"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/components/layout/LocaleProvider";
import styles from "./HeroPlanet.module.css";
import { useTheme } from "next-themes";

/** A single globe with a neural core; SVG and WebGL share the same bounds. */
export function HeroPlanet() {
  const { locale } = useContent();
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [available, setAvailable] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const backRef = useRef(false);
  const turnRef = useRef<(back: boolean) => void>(() => {});
  const pulseRef = useRef(() => {});
  const pauseRef = useRef<(value: boolean) => void>(() => {});
  const hostRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("three"), import("three/addons/environments/RoomEnvironment.js")]).then(([THREE, { RoomEnvironment }]) => {
      if (cancelled) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch (error) {
        console.warn("[HeroPlanet] WebGL unavailable; using the static illustration.", error);
        return; // Static illustration also covers devices without WebGL.
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.98;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      const scene = new THREE.Scene();
      const studio = new RoomEnvironment();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = pmrem.fromScene(studio, 0.04);
      scene.environment = environment.texture;
      scene.environmentIntensity = 0.55;
      studio.dispose();
      pmrem.dispose();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
      camera.position.z = 4.2;
      const tilt = new THREE.Group();
      tilt.rotation.z = -0.18;
      tilt.rotation.x = 0.15;
      scene.add(tilt);
      const planet = new THREE.Group();
      tilt.add(planet);
      const dark = resolvedTheme !== "light";
      // An airy globe shell leaves the brain visible at its center.
      const surfaceGeometry = new THREE.SphereGeometry(0.985, 48, 32);
      const surfaceMaterial = new THREE.MeshBasicMaterial({
        color: dark ? 0x1674aa : 0x319aca, transparent: true, opacity: 0.045,
        depthWrite: false,
      });
      planet.add(new THREE.Mesh(surfaceGeometry, surfaceMaterial));
      const brain = new THREE.Group();
      scene.add(brain);
      brain.scale.setScalar(1.15);
      brain.rotation.set(0.12, -0.2, 0.03);
      const head = new THREE.Group();
      head.position.y = 0.4;
      head.scale.setScalar(0.66);
      brain.add(head);
      const brainGeometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
      const brainMaterials: InstanceType<typeof THREE.Material>[] = [];
      const brainTextures: InstanceType<typeof THREE.Texture>[] = [];
      // A brain-shaped computational graph: two hemispheres, synapses and a chip.
      const neurons: InstanceType<typeof THREE.Vector3>[] = [];
      for (const side of [-1, 1]) {
        for (let i = 0; i < 100; i++) {
          const y = 1 - 2 * (i + 0.5) / 100;
          const angle = i * Math.PI * (3 - Math.sqrt(5));
          const radius = Math.sqrt(1 - y * y);
          const fold = 1 + 0.08 * Math.sin(angle * 3 + y * 8);
          neurons.push(new THREE.Vector3(
            side * 0.245 + Math.cos(angle) * radius * 0.29 * fold,
            y * 0.48 + 0.07,
            Math.sin(angle) * radius * 0.32 * fold,
          ));
        }
      }
      const nodeGeometry = new THREE.BufferGeometry().setFromPoints(neurons);
      const nodeMaterial = new THREE.PointsMaterial({
        transparent: true, opacity: 0.45, color: dark ? 0x66ffe0 : 0x007e87, size: 0.019, sizeAttenuation: true,
      });
      const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
      head.add(nodes);
      const edges: [InstanceType<typeof THREE.Vector3>, InstanceType<typeof THREE.Vector3>][] = [];
      const connections: number[] = [];
      for (let i = 0; i < neurons.length; i++) {
        const nearby = neurons.map((point, index) => ({ index, distance: point.distanceToSquared(neurons[i]) }))
          .filter(({ index }) => index !== i).sort((a, b) => a.distance - b.distance).slice(0, 3);
        for (const { index } of nearby) {
          if (index <= i) continue;
          edges.push([neurons[i], neurons[index]]);
          connections.push(...neurons[i].toArray(), ...neurons[index].toArray());
        }
      }
      const connectionGeometry = new THREE.BufferGeometry();
      connectionGeometry.setAttribute("position", new THREE.Float32BufferAttribute(connections, 3));
      const connectionMaterial = new THREE.LineBasicMaterial({
        color: dark ? 0x3d9ee8 : 0x166ab0, transparent: true, opacity: 0.12,
      });
      head.add(new THREE.LineSegments(connectionGeometry, connectionMaterial));
      const signalPositions = new Float32Array(36 * 3);
      const signalGeometry = new THREE.BufferGeometry();
      const signalAttribute = new THREE.BufferAttribute(signalPositions, 3);
      signalAttribute.setUsage(THREE.DynamicDrawUsage);
      signalGeometry.setAttribute("position", signalAttribute);
      const signalMaterial = new THREE.PointsMaterial({ color: dark ? 0xddfff9 : 0x00677a, size: 0.043 });
      head.add(new THREE.Points(signalGeometry, signalMaterial));
      // Sculpted cortex: broad paired hemispheres, a sagittal fissure and
      // raised gyri separated by recessed, winding sulci across the whole volume.
      const cortexMaterial = new THREE.MeshPhysicalMaterial({
        color: dark ? 0x4f9caa : 0x5a9ba6, roughness: 0.48, metalness: 0.02, clearcoat: 0.18, clearcoatRoughness: 0.5, side: THREE.DoubleSide,
      });
      const lowerMaterial = new THREE.MeshStandardMaterial({
        color: dark ? 0x246273 : 0x417c8c, roughness: 0.75, metalness: 0.04,
      });
      brainMaterials.push(cortexMaterial, lowerMaterial);
      for (const side of [-1, 1]) {
        const shell = new THREE.SphereGeometry(1, 112, 80, Math.PI / 2, Math.PI);
        const positions = shell.getAttribute("position");
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i);
          const latitude = Math.acos(Math.max(-1, Math.min(1, y)));
          const longitude = Math.atan2(z, x);
          const meander = longitude * 9 + 1.6 * Math.sin(latitude * 6 + side * 0.6)
            + 0.65 * Math.sin(longitude * 3 - latitude * 4);
          const branch = latitude * 13 + 1.2 * Math.sin(longitude * 5 + latitude * 2);
          const sulcus = Math.exp(-Math.pow(Math.sin(meander) / 0.27, 2));
          const crossSulcus = Math.exp(-Math.pow(Math.sin(branch) / 0.24, 2));
          const relief = 1 - 0.085 * sulcus - 0.04 * crossSulcus;
          const frontal = 1 + 0.06 * z;
          // Inner faces nearly meet, leaving a narrow interhemispheric cleft.
          positions.setXYZ(i,
            side * (0.012 + Math.abs(x) * 0.55 * relief * frontal),
            y * 0.45 * relief + 0.085 + 0.025 * z,
            z * 0.435 * relief,
          );
        }
        shell.computeVertexNormals();
        brainGeometries.push(shell);
        head.add(new THREE.Mesh(shell, cortexMaterial));
        // The cerebellum sits below and behind the cerebral hemispheres.
        const cerebellum = new THREE.SphereGeometry(1, 48, 32);
        const lowerPositions = cerebellum.getAttribute("position");
        for (let i = 0; i < lowerPositions.count; i++) {
          const x = lowerPositions.getX(i), y = lowerPositions.getY(i), z = lowerPositions.getZ(i);
          const folds = 1 - 0.045 * Math.pow(Math.sin(y * 32 + z * 5), 6);
          lowerPositions.setXYZ(i,side * 0.16 + x * 0.19 * folds,y * 0.145 * folds - 0.335,z * 0.22 * folds - 0.15);
        }
        cerebellum.computeVertexNormals();
        brainGeometries.push(cerebellum);
        head.add(new THREE.Mesh(cerebellum,lowerMaterial));
      }
      const stemGeometry = new THREE.CylinderGeometry(0.065,0.035,0.23,20);
      brainGeometries.push(stemGeometry);
      const stem = new THREE.Mesh(stemGeometry, lowerMaterial);
      stem.position.set(0,-0.43,-0.13); stem.rotation.x=-0.25;
      head.add(stem);

      // Layered semiconductor package: substrate, beveled body, lid and gold leads.
      const chip = new THREE.Group();
      chip.position.set(0, 0.055, 0.205);
      chip.scale.setScalar(0.34);
      chip.rotation.z = -0.05;
      const backPanel = new THREE.Group();
      backPanel.position.set(0,-0.105,-0.15);
      backPanel.rotation.y=Math.PI;
      brain.add(backPanel);
      backPanel.add(chip);
      // A rounded, wearable tech backpack rather than a flat circuit board.
      const bagMaterial=new THREE.MeshStandardMaterial({color:0x102b42,roughness:0.72,metalness:0.12});
      const pocketMaterial=new THREE.MeshStandardMaterial({color:0x174c5a,roughness:0.6,metalness:0.15});
      const strapMaterial=new THREE.MeshStandardMaterial({color:0x14202f,roughness:0.92});
      const pipingMaterial=new THREE.MeshStandardMaterial({color:0x35d8c3,emissive:0x0b6a59,emissiveIntensity:0.4,roughness:0.4});
      brainMaterials.push(bagMaterial,pocketMaterial,strapMaterial,pipingMaterial);
      const bagShape = (width: number,height: number,radius: number) => {
        const shape=new THREE.Shape(),x=width/2,y=height/2;
        shape.moveTo(-x+radius,-y);shape.lineTo(x-radius,-y);shape.quadraticCurveTo(x,-y,x,-y+radius);
        shape.lineTo(x,y-radius);shape.quadraticCurveTo(x,y,x-radius,y);shape.lineTo(-x+radius,y);
        shape.quadraticCurveTo(-x,y,-x,y-radius);shape.lineTo(-x,-y+radius);shape.quadraticCurveTo(-x,-y,-x+radius,-y);
        return shape;
      };
      const bagGeometry=new THREE.ExtrudeGeometry(bagShape(0.36,0.43,0.065),{depth:0.14,bevelEnabled:true,bevelSize:0.025,bevelThickness:0.025,bevelSegments:4,steps:1});
      brainGeometries.push(bagGeometry);
      const bag=new THREE.Mesh(bagGeometry,bagMaterial);bag.position.z=0.015;backPanel.add(bag);
      const bagCurve=(points: number[][],radius: number,material: InstanceType<typeof THREE.Material>) => {
        const geometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(([x,y,z])=>new THREE.Vector3(x,y,z))),48,radius,8,false);
        brainGeometries.push(geometry);backPanel.add(new THREE.Mesh(geometry,material));
      };
      // Shoulder straps wrap towards the front; a padded handle crowns the bag.
      for(const side of [-1,1]) {
        bagCurve([[side*0.13,0.17,0.01],[side*0.17,0.24,-0.08],[side*0.18,0.14,-0.26],[side*0.17,-0.06,-0.27],[side*0.15,-0.18,-0.03]],0.024,strapMaterial);
        bagCurve([[side*0.13,0.17,0.014],[side*0.17,0.235,-0.075],[side*0.18,0.14,-0.235]],0.004,pipingMaterial);
      }
      bagCurve([[-0.065,0.22,0.065],[-0.06,0.27,0.065],[0,0.285,0.065],[0.06,0.27,0.065],[0.065,0.22,0.065]],0.014,strapMaterial);
      const rimPoints=bagShape(0.35,0.42,0.06).getPoints(48).map(point=>[point.x,point.y,0.169]);
      bagCurve(rimPoints,0.004,pipingMaterial);
      const pocketGeometry=new THREE.ExtrudeGeometry(bagShape(0.24,0.105,0.025),{depth:0.026,bevelEnabled:true,bevelSize:0.008,bevelThickness:0.008,bevelSegments:2,steps:1});
      brainGeometries.push(pocketGeometry);
      const pocket=new THREE.Mesh(pocketGeometry,pocketMaterial);pocket.position.set(0,-0.115,0.181);backPanel.add(pocket);
      bagCurve([[-0.095,-0.088,0.216],[0,-0.084,0.218],[0.095,-0.088,0.216]],0.0035,strapMaterial);
      const zipperGeometry=new THREE.BoxGeometry(0.012,0.028,0.007);brainGeometries.push(zipperGeometry);
      const zipper=new THREE.Mesh(zipperGeometry,pipingMaterial);zipper.position.set(0.075,-0.101,0.223);zipper.rotation.z=-0.3;backPanel.add(zipper);
      const circuitPanel=new THREE.Group();circuitPanel.position.z=0.178;backPanel.add(circuitPanel);
      const packageMaterial = new THREE.MeshStandardMaterial({ color: 0x111a28, metalness: 0.4, roughness: 0.42 });
      const substrateMaterial = new THREE.MeshStandardMaterial({ color: dark ? 0x07574f : 0x0a7468, metalness: 0.25, roughness: 0.5 });
      const metalMaterial = new THREE.MeshStandardMaterial({ color: 0xc6d5e0, metalness: 0.8, roughness: 0.28 });
      const goldMaterial = new THREE.MeshStandardMaterial({ color: 0xc8a46a, metalness: 0.72, roughness: 0.3 });
      brainMaterials.push(packageMaterial, substrateMaterial, metalMaterial, goldMaterial);
      const box = (width: number, height: number, depth: number, z: number, material: InstanceType<typeof THREE.Material>) => {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        brainGeometries.push(geometry);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = z;
        chip.add(mesh);
      };
      box(0.32, 0.32, 0.024, 0, substrateMaterial);
      const shape = new THREE.Shape();
      const half = 0.139, corner = 0.02;
      shape.moveTo(-half + corner,-half);
      shape.lineTo(half-corner,-half); shape.quadraticCurveTo(half,-half,half,-half+corner);
      shape.lineTo(half,half-corner); shape.quadraticCurveTo(half,half,half-corner,half);
      shape.lineTo(-half+corner,half); shape.quadraticCurveTo(-half,half,-half,half-corner);
      shape.lineTo(-half,-half+corner); shape.quadraticCurveTo(-half,-half,-half+corner,-half);
      const packageGeometry = new THREE.ExtrudeGeometry(shape,{depth:0.038,bevelEnabled:true,bevelSize:0.007,bevelThickness:0.006,bevelSegments:2,steps:1});
      brainGeometries.push(packageGeometry);
      const body = new THREE.Mesh(packageGeometry, packageMaterial);
      body.position.z = 0.012;
      chip.add(body);
      box(0.225,0.225,0.012,0.062,metalMaterial);
      const pinGeometry = new THREE.BoxGeometry(0.021,0.065,0.012);
      brainGeometries.push(pinGeometry);
      const pins = new THREE.InstancedMesh(pinGeometry,goldMaterial,28);
      const transform = new THREE.Object3D();
      let pinIndex = 0;
      for(let edge=0;edge<4;edge++) for(let i=0;i<7;i++) {
        const offset = (i-3)*0.037;
        transform.position.set(edge<2 ? offset : (edge===2 ? -0.18 : 0.18),edge<2 ? (edge===0 ? -0.18 : 0.18) : offset,0.002);
        transform.rotation.z = edge<2 ? 0 : Math.PI/2;
        transform.updateMatrix(); pins.setMatrixAt(pinIndex++,transform.matrix);
      }
      chip.add(pins);
      const labelCanvas = document.createElement("canvas");
      labelCanvas.width=512; labelCanvas.height=512;
      const context=labelCanvas.getContext("2d");
      if(context) {
        context.fillStyle="#13283d"; context.fillRect(0,0,512,512);
        context.strokeStyle="#447486"; context.lineWidth=3; context.strokeRect(16,16,480,480);
        context.fillStyle="#6bf5d0"; context.font="bold 172px sans-serif"; context.textAlign="center"; context.fillText("AI",256,280);
        context.fillStyle="#b6cbd5"; context.font="32px monospace"; context.fillText("JOKERLABS",256,365);
        context.fillStyle="#79939e"; context.font="22px monospace"; context.fillText("NEURAL CORE / 01",256,421);
        context.beginPath();context.arc(54,54,12,0,Math.PI*2);context.fillStyle="#c8a46a";context.fill();
        const labelTexture = new THREE.CanvasTexture(labelCanvas);
        labelTexture.colorSpace=THREE.SRGBColorSpace;
        brainTextures.push(labelTexture);
        const labelMaterial = new THREE.MeshBasicMaterial({map:labelTexture});
        const labelGeometry = new THREE.PlaneGeometry(0.196,0.196);
        brainMaterials.push(labelMaterial);brainGeometries.push(labelGeometry);
        const label=new THREE.Mesh(labelGeometry,labelMaterial);label.position.z=0.069;chip.add(label);
      }
      const circuits: number[]=[];
      const circuitEndpoints: number[][]=[];
      for(const side of [-1,1]) for(let pin=0;pin<5;pin++) {
        const y=(pin-2)*0.03;
        const x=side*(0.137+Math.abs(pin-2)*0.012);
        const endY=y+(pin-2)*0.042;
        circuits.push(side*0.12,y,0.012,x,y,0.012,x,y,0.012,x,endY,0.012,x,endY,0.012,side*0.174,endY,0.012);
        circuitEndpoints.push([side*0.174,endY,0.014]);
      }
      for(const side of [-1,1]) for(let pin=0;pin<3;pin++) {
        const x=(pin-1)*0.045;
        circuits.push(x,side*0.123,0.012,x,side*0.172,0.012);
        circuitEndpoints.push([x,side*0.172,0.014]);
      }
      const circuitGeometry=new THREE.BufferGeometry();
      circuitGeometry.setAttribute("position",new THREE.Float32BufferAttribute(circuits,3));
      const circuitMaterial=new THREE.LineBasicMaterial({color:0x71f5d1});
      circuitPanel.add(new THREE.LineSegments(circuitGeometry,circuitMaterial));
      const terminalGeometry=new THREE.SphereGeometry(0.006,8,6);
      brainGeometries.push(terminalGeometry);
      for(const [x,y,z] of circuitEndpoints) {
        const terminal=new THREE.Mesh(terminalGeometry,goldMaterial);terminal.position.set(x,y,z);circuitPanel.add(terminal);
      }
      // Twin-thruster jetpack bolted to the backpack: tanks, glowing bands and plasma exhaust.
      const jetpack=new THREE.Group();jetpack.position.z=0.075;backPanel.add(jetpack);
      const tankMaterial=new THREE.MeshStandardMaterial({color:0x8fa6b4,metalness:0.75,roughness:0.3});
      const nozzleMaterial=new THREE.MeshStandardMaterial({color:0x1b2633,metalness:0.6,roughness:0.45});
      const flameMaterial=new THREE.MeshBasicMaterial({color:0x35d8c3,transparent:true,opacity:0.55,depthWrite:false});
      const flameCoreMaterial=new THREE.MeshBasicMaterial({color:0xeafffb,transparent:true,opacity:0.9,depthWrite:false});
      brainMaterials.push(tankMaterial,nozzleMaterial,flameMaterial,flameCoreMaterial);
      const tankGeometry=new THREE.CapsuleGeometry(0.05,0.26,6,20);
      const bandGeometry=new THREE.TorusGeometry(0.052,0.006,6,24);
      const bracketGeometry=new THREE.BoxGeometry(0.07,0.03,0.05);
      const nozzleGeometry=new THREE.CylinderGeometry(0.036,0.05,0.06,20);
      // Cones point downward with their base at the nozzle, so scaling grows the exhaust.
      const flameGeometry=new THREE.ConeGeometry(0.034,0.2,16,1,true).rotateX(Math.PI).translate(0,-0.1,0);
      const flameCoreGeometry=new THREE.ConeGeometry(0.018,0.12,12,1,true).rotateX(Math.PI).translate(0,-0.06,0);
      brainGeometries.push(tankGeometry,bandGeometry,bracketGeometry,nozzleGeometry,flameGeometry,flameCoreGeometry);
      const flames: InstanceType<typeof THREE.Group>[] = [];
      for(const side of [-1,1]) {
        const tank=new THREE.Mesh(tankGeometry,tankMaterial);tank.position.x=side*0.245;jetpack.add(tank);
        for(const y of [-0.1,0.1]) {
          const band=new THREE.Mesh(bandGeometry,pipingMaterial);band.position.set(side*0.245,y,0);band.rotation.x=Math.PI/2;jetpack.add(band);
          const bracket=new THREE.Mesh(bracketGeometry,nozzleMaterial);bracket.position.set(side*0.2,y,0);jetpack.add(bracket);
        }
        const nozzle=new THREE.Mesh(nozzleGeometry,nozzleMaterial);nozzle.position.set(side*0.245,-0.21,0);jetpack.add(nozzle);
        const flame=new THREE.Group();flame.position.set(side*0.245,-0.24,0);jetpack.add(flame);flames.push(flame);
        for(const [geometry,material] of [[flameGeometry,flameMaterial],[flameCoreGeometry,flameCoreMaterial]] as const) {
          const plume=new THREE.Mesh(geometry,material);plume.userData.isExhaust=true;flame.add(plume);
        }
        flame.scale.setScalar(0.6);
      }
      const exhaustGlow=new THREE.PointLight(0x35d8c3,0.12,0.9);exhaustGlow.position.set(0,-0.32,0);jetpack.add(exhaustGlow);
      brainGeometries.push(nodeGeometry,connectionGeometry,signalGeometry,circuitGeometry);
      brainMaterials.push(nodeMaterial,connectionMaterial,signalMaterial,circuitMaterial);
      // Personified laboratory agent: a friendly face and branded work clothes.
      const shirtMaterial = new THREE.MeshStandardMaterial({color:dark?0x087d81:0x0a9897,roughness:0.78});
      const pantsMaterial = new THREE.MeshStandardMaterial({color:0x15263e,roughness:0.9});
      const skinMaterial = new THREE.MeshPhysicalMaterial({color:0x72bac1,roughness:0.45,clearcoat:0.2,clearcoatRoughness:0.4});
      const shoeMaterial = new THREE.MeshStandardMaterial({color:0x09131e,roughness:0.7});
      const eyeMaterial = new THREE.MeshPhysicalMaterial({color:0x071823,roughness:0.12,clearcoat:1,clearcoatRoughness:0.08});
      const irisMaterial = new THREE.MeshPhysicalMaterial({color:0x0faeaa,roughness:0.18,metalness:0.2,clearcoat:1});
      const scleraMaterial = new THREE.MeshPhysicalMaterial({color:0xe4f1ed,roughness:0.22,clearcoat:0.5});
      const seamMaterial = new THREE.MeshStandardMaterial({color:0x0c5e65,roughness:0.9});
      const rubberMaterial = new THREE.MeshStandardMaterial({color:0xb9cccf,roughness:0.85});
      brainMaterials.push(irisMaterial,scleraMaterial,seamMaterial,rubberMaterial);
      const pupilMaterial = new THREE.MeshBasicMaterial({color:0xdffff7});
      brainMaterials.push(shirtMaterial,pantsMaterial,skinMaterial,shoeMaterial,eyeMaterial,pupilMaterial);
      const roundedPart = (parent: InstanceType<typeof THREE.Group>, material: InstanceType<typeof THREE.Material>, position: number[], scale: number[]) => {
        const geometry = new THREE.SphereGeometry(1,24,18);
        brainGeometries.push(geometry);
        const mesh = new THREE.Mesh(geometry,material);
        mesh.position.set(position[0],position[1],position[2]);
        mesh.scale.set(scale[0],scale[1],scale[2]);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh); return mesh;
      };
      const cheekMaterial=new THREE.MeshPhysicalMaterial({color:0x65b4b9,roughness:0.48,clearcoat:0.12});
      const mouthMaterial=new THREE.MeshStandardMaterial({color:0x10232e,roughness:0.8});
      brainMaterials.push(cheekMaterial,mouthMaterial);
      // Sculpted facial planes create a designed expression, not floating eyes.
      for(const side of [-1,1]) {
        roundedPart(head,cheekMaterial,[side*0.252,-0.145,0.338],[0.102,0.071,0.048]);
      }
      roundedPart(head,skinMaterial,[0,-0.095,0.45],[0.046,0.035,0.037]);
      const brows: InstanceType<typeof THREE.Group>[] = [];
      const eyeGroups: InstanceType<typeof THREE.Group>[] = [];
      const gazeGroups: InstanceType<typeof THREE.Group>[] = [];
      // Layered eyes: sclera, teal iris, dark pupil and corneal highlights.
      for(const side of [-1,1]) {
        const eye = new THREE.Group();head.add(eye);eyeGroups.push(eye);
        eye.position.set(side*0.17,-0.025,0.405);
        const gaze = new THREE.Group();eye.add(gaze);gazeGroups.push(gaze);
        roundedPart(eye,eyeMaterial,[0,0,0],[0.102,0.125,0.058]);
        roundedPart(eye,scleraMaterial,[0,0.005,0.039],[0.082,0.101,0.035]);
        roundedPart(gaze,irisMaterial,[0.008,0.003,0.07],[0.047,0.067,0.018]);
        roundedPart(gaze,eyeMaterial,[0.008,0.003,0.085],[0.026,0.045,0.009]);
        roundedPart(gaze,pupilMaterial,[-0.008,0.03,0.095],[0.012,0.017,0.005]);
        const lidPath=new THREE.CatmullRomCurve3([
          new THREE.Vector3(-0.093,0.015,0.027),new THREE.Vector3(-0.064,0.105,0.022),
          new THREE.Vector3(0.015,0.123,0.018),new THREE.Vector3(0.089,0.05,0.024),
        ]);
        const lidGeometry=new THREE.TubeGeometry(lidPath,28,0.01,6,false);
        brainGeometries.push(lidGeometry);eye.add(new THREE.Mesh(lidGeometry,skinMaterial));
        const browCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(side*0.09,0.128,0.427),new THREE.Vector3(side*0.17,0.153,0.413),new THREE.Vector3(side*0.235,0.12,0.389),
        ]);
        const browGeometry = new THREE.TubeGeometry(browCurve,20,0.017,8,false);
        brainGeometries.push(browGeometry);
        const brow=new THREE.Group();
        brow.position.set(side*0.17,0.13,0.41);
        const browMesh=new THREE.Mesh(browGeometry,lowerMaterial);
        browMesh.position.set(-side*0.17,-0.13,-0.41);
        brow.add(browMesh);head.add(brow);brows.push(brow);
      }
      // Upturned corners and a curved tooth band read as a smile at hero size.
      const smile=new THREE.Group();smile.position.set(0,-0.162,0.46);head.add(smile);
      const mouthShape=new THREE.Shape();
      mouthShape.moveTo(-0.14,0.018);
      mouthShape.quadraticCurveTo(0,-0.01,0.14,0.018);
      mouthShape.bezierCurveTo(0.115,-0.055,0.065,-0.09,0,-0.09);
      mouthShape.bezierCurveTo(-0.065,-0.09,-0.115,-0.055,-0.14,0.018);
      const teethShape=new THREE.Shape();
      teethShape.moveTo(-0.125,0.008);
      teethShape.quadraticCurveTo(0,-0.015,0.125,0.008);
      teethShape.quadraticCurveTo(0.08,-0.046,0,-0.046);
      teethShape.quadraticCurveTo(-0.08,-0.046,-0.125,0.008);
      for(const [shape,material,depth] of [[mouthShape,mouthMaterial,0],[teethShape,scleraMaterial,0.003]] as const) {
        const geometry=new THREE.ShapeGeometry(shape,32);
        const vertices=geometry.getAttribute("position");
        for(let i=0;i<vertices.count;i++) {const x=vertices.getX(i);vertices.setZ(i,depth-x*x*0.6);}
        geometry.computeVertexNormals();brainGeometries.push(geometry);smile.add(new THREE.Mesh(geometry,material));
      }
      const lipPath=new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.14,0.018,-0.012),new THREE.Vector3(-0.08,-0.071,-0.004),
        new THREE.Vector3(0,-0.092,0),new THREE.Vector3(0.08,-0.071,-0.004),new THREE.Vector3(0.14,0.018,-0.012),
      ]);
      const lipGeometry=new THREE.TubeGeometry(lipPath,32,0.006,8,false);
      brainGeometries.push(lipGeometry);smile.add(new THREE.Mesh(lipGeometry,cheekMaterial));
      roundedPart(brain,skinMaterial,[0,0.075,0],[0.075,0.09,0.07]);
      const torso = roundedPart(brain,shirtMaterial,[0,-0.105,0],[0.225,0.255,0.14]);
      // Tailor the torso: shoulders and waist have distinct, non-spherical shapes.
      const torsoVertices=torso.geometry.getAttribute("position");
      for(let i=0;i<torsoVertices.count;i++) {
        const x=torsoVertices.getX(i),y=torsoVertices.getY(i),z=torsoVertices.getZ(i);
        const taper= y<0 ? 1+y*0.12 : 1+Math.sin(y*Math.PI)*0.04;
        torsoVertices.setXYZ(i,x*taper,y,z*(1+0.015*Math.sin(y*13+x*7)));
      }
      torso.geometry.computeVertexNormals();
      const collarGeometry = new THREE.TorusGeometry(0.072,0.016,8,24);
      brainGeometries.push(collarGeometry);
      const collar = new THREE.Mesh(collarGeometry,pantsMaterial);
      collar.position.set(0,0.095,0.005);collar.rotation.x=Math.PI/2;brain.add(collar);
      // Cloth weave is procedural and tiny; no remote texture downloads.
      const fabricCanvas=document.createElement("canvas");fabricCanvas.width=64;fabricCanvas.height=64;
      const fabricContext=fabricCanvas.getContext("2d");
      if(fabricContext) {
        fabricContext.fillStyle="#888";fabricContext.fillRect(0,0,64,64);
        for(let y=0;y<64;y+=2) for(let x=0;x<64;x+=2) {
          const value=110+Math.round(35*Math.sin(x*2.7+y*1.3));
          fabricContext.fillStyle=`rgb(${value},${value},${value})`;fabricContext.fillRect(x,y,1,2);
        }
        const fabricTexture=new THREE.CanvasTexture(fabricCanvas);
        fabricTexture.wrapS=fabricTexture.wrapT=THREE.RepeatWrapping;fabricTexture.repeat.set(8,8);
        brainTextures.push(fabricTexture);shirtMaterial.bumpMap=fabricTexture;shirtMaterial.bumpScale=0.0015;
        pantsMaterial.bumpMap=fabricTexture;pantsMaterial.bumpScale=0.001;
      }
      const detailCurve = (points: number[][], radius: number, material: InstanceType<typeof THREE.Material>, parent: InstanceType<typeof THREE.Group> = brain) => {
        const geometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(([x,y,z])=>new THREE.Vector3(x,y,z))),24,radius,6,false);
        brainGeometries.push(geometry);parent.add(new THREE.Mesh(geometry,material));
      };
      // Sleeve hems, trouser seams, distinct soles and shoelaces.
      detailCurve([[-0.18,-0.26,0.04],[-0.1,-0.3,0.104],[0,-0.31,0.112],[0.1,-0.3,0.104],[0.18,-0.26,0.04]],0.004,seamMaterial);
      detailCurve([[-0.17,0.025,0.073],[-0.115,0.07,0.078],[0,0.087,0.074],[0.115,0.07,0.078],[0.17,0.025,0.073]],0.0035,seamMaterial);
      for(const side of [-1,1]) {
        detailCurve([[side*0.18,-0.06,0.082],[side*0.2,-0.135,0.058],[side*0.178,-0.22,0.068]],0.0025,seamMaterial);
        detailCurve([[side*0.155,-0.245,0.087],[side*0.17,-0.23,0.079],[side*0.185,-0.235,0.055]],0.002,seamMaterial);
      }
      const forearms: InstanceType<typeof THREE.Group>[] = [];
      const arms: InstanceType<typeof THREE.Group>[] = [];
      for(const side of [-1,1]) {
        const arm = new THREE.Group();arm.position.set(side*0.205,0.015,0);brain.add(arm);arms.push(arm);
        roundedPart(arm,shirtMaterial,[side*0.045,-0.055,0],[0.092,0.12,0.1]);
        const forearm = new THREE.Group();forearm.position.set(side*0.07,-0.14,0.012);arm.add(forearm);forearms.push(forearm);
        roundedPart(forearm,skinMaterial,[0,-0.05,0],[0.06,0.12,0.063]);
        roundedPart(forearm,skinMaterial,[side*0.008,-0.14,0.008],[0.061,0.063,0.052]);
        for(let finger=0;finger<3;finger++) {
          roundedPart(forearm,skinMaterial,[(finger-1)*0.031+side*0.008,-0.184+(finger===1?-0.008:0),0.018],[0.021,0.038,0.031]);
        }
        const cuffGeometry=new THREE.TorusGeometry(0.076,0.004,6,24);
        brainGeometries.push(cuffGeometry);
        const cuff=new THREE.Mesh(cuffGeometry,seamMaterial);cuff.scale.set(1,1,1.1);cuff.rotation.x=Math.PI/2;
        cuff.position.set(side*0.05,-0.115,0);arm.add(cuff);
        roundedPart(brain,pantsMaterial,[side*0.108,-0.425,0],[0.098,0.225,0.105]);
        roundedPart(brain,shoeMaterial,[side*0.112,-0.635,0.055],[0.109,0.067,0.16]);
        roundedPart(brain,rubberMaterial,[side*0.112,-0.67,0.055],[0.11,0.016,0.157]);
        roundedPart(forearm,skinMaterial,[-side*0.045,-0.12,0.055],[0.027,0.044,0.028]);
        detailCurve([[side*0.13,-0.28,0.08],[side*0.13,-0.43,0.103],[side*0.13,-0.59,0.06]],0.003,seamMaterial);
        roundedPart(brain,pantsMaterial,[side*0.112,-0.593,0.07],[0.052,0.015,0.084]);
        detailCurve([[side*0.112-0.08,-0.65,0.142],[side*0.112,-0.658,0.205],[side*0.112+0.08,-0.65,0.142]],0.003,rubberMaterial);
        detailCurve([[side*0.15,-0.32,0.072],[side*0.13,-0.35,0.097],[side*0.08,-0.36,0.091]],0.0025,seamMaterial);
        for(let lace=0;lace<3;lace++) detailCurve([[side*0.112-0.035,-0.602,0.075+lace*0.027],[side*0.112,-0.59,0.078+lace*0.027],[side*0.112+0.035,-0.602,0.075+lace*0.027]],0.003,rubberMaterial);
      }
      const shirtCanvas=document.createElement("canvas");shirtCanvas.width=512;shirtCanvas.height=256;
      const shirtContext=shirtCanvas.getContext("2d");
      if(shirtContext) {
        // Separate embroidered chest patches: company mark and agent name.
        shirtContext.fillStyle="#020304";
        shirtContext.beginPath();shirtContext.roundRect(8,12,224,232,20);shirtContext.fill();
        shirtContext.beginPath();shirtContext.roundRect(270,56,234,148,16);shirtContext.fill();
        shirtContext.strokeStyle="#42605f";shirtContext.lineWidth=2;shirtContext.setLineDash([6,5]);
        shirtContext.beginPath();shirtContext.roundRect(16,20,208,216,14);shirtContext.stroke();
        shirtContext.beginPath();shirtContext.roundRect(278,64,218,132,10);shirtContext.stroke();shirtContext.setLineDash([]);
        shirtContext.fillStyle="#f1ffff";shirtContext.textAlign="center";
        shirtContext.font="bold 32px sans-serif";shirtContext.fillText("JokerLabs",120,216);
        shirtContext.font="bold 79px sans-serif";shirtContext.fillText("Jais",387,145);
        shirtContext.fillStyle="#8adfcd";shirtContext.font="17px monospace";shirtContext.fillText("ENGINEER",387,176);
        const shirtTexture=new THREE.CanvasTexture(shirtCanvas);shirtTexture.colorSpace=THREE.SRGBColorSpace;brainTextures.push(shirtTexture);
        const brandMark = new Image();
        brandMark.onload = () => {
          if (cancelled) return;
          shirtContext.drawImage(brandMark,140,200,970,860,42,38,156,146);
          shirtTexture.needsUpdate=true;
          render();
        };
        brandMark.onerror = () => console.warn("[HeroPlanet] Could not load the JokerLabs shirt mark.");
        brandMark.src="/assets/logo-white.svg";
        const logoMaterial=new THREE.MeshStandardMaterial({map:shirtTexture,transparent:true,depthWrite:false,roughness:0.85,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
        const logoGeometry=new THREE.PlaneGeometry(0.34,0.17,40,24);
        const logoPositions=logoGeometry.getAttribute("position");
        // Project onto the actual tailored shirt, rather than an ideal sphere.
        // Parenting to the torso keeps the print in sync with every breath.
        const shirtProbe=new THREE.Mesh(torso.geometry,shirtMaterial);
        shirtProbe.updateMatrixWorld(true);
        const projection=new THREE.Raycaster();
        const direction=new THREE.Vector3(0,0,-1);
        for(let i=0;i<logoPositions.count;i++) {
          const x=logoPositions.getX(i)/0.225;
          const y=(logoPositions.getY(i)+0.015)/0.255;
          projection.set(new THREE.Vector3(x,y,3),direction);
          const hit=projection.intersectObject(shirtProbe,false)[0];
          if(hit) {
            const point=hit.point.clone().addScaledVector(hit.face!.normal,0.035);
            logoPositions.setXYZ(i,point.x,point.y,point.z);
          }
        }
        logoGeometry.computeVertexNormals();brainMaterials.push(logoMaterial);brainGeometries.push(logoGeometry);
        const logo=new THREE.Mesh(logoGeometry,logoMaterial);
        logo.userData.isShirtPatch=true;
        torso.add(logo);
      }
      const updateSignals = (time: number) => {
        for (let i = 0; i < 36; i++) {
          const phase = time * 0.45 + i * 0.173;
          const [a, b] = edges[(i * 17 + Math.floor(phase)) % edges.length];
          const progress = phase % 1;
          signalAttribute.setXYZ(i, a.x + (b.x - a.x) * progress, a.y + (b.y - a.y) * progress, a.z + (b.z - a.z) * progress);
        }
        signalAttribute.needsUpdate = true;
      };
      updateSignals(0);
      // Studio portrait lighting gives readable cloth, skin and metal response.
      scene.add(new THREE.HemisphereLight(0xd9f5ff,0x152332,0.95));
      brain.traverse((object) => { if(object instanceof THREE.Mesh) { const shaded=!object.userData.isShirtPatch&&!object.userData.isExhaust; object.castShadow=shaded; object.receiveShadow=shaded; } });
      const light = new THREE.DirectionalLight(0xffefd9, 2.8);
      light.position.set(-3, 4, 5);
      light.castShadow=true;light.shadow.mapSize.set(1024,1024);
      light.shadow.camera.left=-1;light.shadow.camera.right=1;light.shadow.camera.top=1;light.shadow.camera.bottom=-1;
      light.shadow.camera.near=0.1;light.shadow.camera.far=12;
      light.shadow.normalBias=0.018;light.shadow.bias=-0.0001;
      const fill=new THREE.DirectionalLight(0x87c9f3,1.2);fill.position.set(3,1,4);scene.add(fill);
      scene.add(light);

      // Continuous meridians and parallels, rather than triangulated wireframe.
      const points: number[] = [];
      const segment = (a: number[], b: number[]) => points.push(...a, ...b);
      for (let meridian = 0; meridian < 12; meridian++) {
        const phi = meridian * Math.PI * 2 / 12;
        for (let j = 0; j < 96; j++) {
          const at = (i: number) => {
            const theta = i * Math.PI / 96;
            return [Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi)];
          };
          segment(at(j), at(j + 1));
        }
      }
      for (let latitude = 1; latitude < 9; latitude++) {
        const theta = latitude * Math.PI / 9;
        for (let j = 0; j < 128; j++) {
          const at = (i: number) => {
            const phi = i * Math.PI * 2 / 128;
            return [Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi)];
          };
          segment(at(j), at(j + 1));
        }
      }
      const gridGeometry = new THREE.BufferGeometry();
      gridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const gridMaterial = new THREE.LineBasicMaterial({ color: dark ? 0x52d9cd : 0x087e94, transparent: true, opacity: 0.14 });
      planet.add(new THREE.LineSegments(gridGeometry, gridMaterial));
      // Asymmetric beacons make the globe's rotation legible at a glance.
      const beaconGeometry = new THREE.SphereGeometry(0.023, 12, 8);
      const beaconMaterial = new THREE.MeshBasicMaterial({ color: dark ? 0x7cfff0 : 0x087e94 });
      brainGeometries.push(beaconGeometry);
      brainMaterials.push(beaconMaterial);
      for (const [latitude, longitude] of [[0.42, 0.4], [-0.6, 2.5], [0.8, 4.1], [-0.25, 5.3]]) {
        const beacon = new THREE.Mesh(beaconGeometry, beaconMaterial);
        beacon.position.set(
          1.015 * Math.cos(latitude) * Math.cos(longitude),
          1.015 * Math.sin(latitude),
          1.015 * Math.cos(latitude) * Math.sin(longitude),
        );
        planet.add(beacon);
      }
      const rim = new THREE.DirectionalLight(0x448dff, 2);
      rim.position.set(3, -1, -2);
      scene.add(rim);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.dataset.renderer = "threejs";
      host.appendChild(renderer.domElement);
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let visible = true;
      let lost = false;
      let previous = 0;
      let elapsed = 0;
      let userPaused = pausedRef.current;
      let burst = 0;
      let greetingTime = 3;
      let yaw = backRef.current ? Math.PI + 0.2 : 0;
      let pitch = 0;
      let drag: { id: number; x: number; y: number; moved: boolean } | undefined;
      let pointerX = 0;
      let pointerY = 0;
      const interactionArea = host;
      const onPointerMove = (event: PointerEvent) => {
        if (drag && event.pointerId === drag.id) {
          const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
          drag.moved ||= Math.abs(dx) + Math.abs(dy) > 2;
          yaw += dx * 0.009;
          pitch = Math.max(-0.65, Math.min(0.65, pitch + dy * 0.006));
          drag.x = event.clientX; drag.y = event.clientY;
          if (motion.matches || userPaused) { brain.rotation.set(0.12 + pitch, -0.2 + yaw, 0.03); tilt.rotation.y = yaw; render(); }
        }
        const bounds = host.getBoundingClientRect();
        pointerX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
        pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      };
      const onPointerLeave = () => { pointerX = 0; pointerY = 0; };
      interactionArea?.addEventListener("pointermove", onPointerMove);
      interactionArea?.addEventListener("pointerleave", onPointerLeave);
      const render = () => {
        if (!lost) renderer.render(scene, camera);
      };
      const frame = (time: number) => {
        const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
        elapsed += delta;
        burst = Math.max(0, burst - delta * 0.65);
        planet.rotation.y += delta * (0.22 + burst * 0.5);
        tilt.rotation.y += (yaw * 0.5 - tilt.rotation.y) * (1 - Math.exp(-delta * 4));
        updateSignals(elapsed * (1 + burst));
        connectionMaterial.opacity = 0.12 + burst * 0.25;
        nodeMaterial.size = 0.019 + burst * 0.014;
        // Gentle changes in perspective reveal the brain's sculpted volume.
        const easing = 1 - Math.exp(-delta * 4);
        brain.rotation.y += (-0.2 + Math.sin(elapsed * 0.6) * 0.3 + pointerX * 0.18 + yaw - brain.rotation.y) * easing;
        brain.rotation.x += (0.12 + pointerY * 0.12 + pitch - brain.rotation.x) * easing;
        // One coordinated performance: anticipation, lift, wrist wave, settle.
        greetingTime += delta;
        const smooth = (value: number) => { const t = Math.max(0,Math.min(1,value)); return t*t*(3-2*t); };
        const greeting = smooth(greetingTime / 0.4) * (1-smooth((greetingTime-1.8)/0.75));
        const breath = Math.sin(elapsed * 1.7);
        // Jetpack hover: a soft bob, a lift on greeting/pulse and flickering exhaust.
        const thrust = 0.6 + burst * 0.7 + greeting * 0.3;
        brain.position.y = Math.sin(elapsed * 1.3) * 0.012 + (burst + greeting) * 0.025;
        flames.forEach((flame,index) => {
          const flicker = Math.sin(elapsed*31+index*1.7)*0.16 + Math.sin(elapsed*57+index)*0.07;
          flame.scale.set(thrust*(0.92+flicker*0.3),thrust*(1+flicker),thrust*(0.92+flicker*0.3));
        });
        exhaustGlow.intensity = 0.08 + thrust * 0.08;
        torso.scale.y = 0.255 * (1 + breath * 0.012);
        torso.scale.z = 0.14 * (1 + breath * 0.018);
        head.position.y = 0.4 + breath * 0.003;
        backPanel.rotation.z = Math.sin(elapsed*1.7-0.3)*0.008;
        const curious = Math.sin(elapsed * 0.55) * 0.03;
        head.rotation.z += (curious - pointerX * 0.07 - greeting * 0.11 - head.rotation.z) * easing;
        head.rotation.y += (pointerX * 0.08 - head.rotation.y) * easing;
        brain.rotation.z = 0.03 + Math.sin(elapsed * 0.7) * 0.008 - greeting * 0.018;
        smile.scale.x = 1 + greeting * 0.16;
        smile.scale.y = 1 + greeting * 0.06;
        brows[0].rotation.z = -0.06 - greeting * 0.12;
        brows[1].rotation.z = 0.12 + pointerX * 0.12;
        brows[1].position.y = 0.137 + greeting * 0.012;
        head.rotation.x = Math.sin(elapsed * 0.8) * 0.018 + greeting * 0.04;
        arms[0].rotation.z += (0.2 + Math.sin(elapsed * 1.2) * 0.04 - greeting * 0.08 - arms[0].rotation.z) * easing;
        forearms[0].rotation.z = -0.16 + Math.sin(elapsed * 0.9) * 0.018;
        arms[1].rotation.z += (-0.12 + greeting * 2.05 - arms[1].rotation.z) * (1-Math.exp(-delta*10));
        arms[1].rotation.x += (greeting * 0.18 - arms[1].rotation.x) * easing;
        forearms[1].rotation.z = greeting * (0.3 + Math.sin(greetingTime * 13) * 0.23);
        // Short, smooth blinks on an uneven cycle; pupils track the visitor.
        const blinkPhase = elapsed % 5.7;
        const blink = blinkPhase < 0.19 ? Math.sin(blinkPhase / 0.19 * Math.PI) :
          blinkPhase > 3.7 && blinkPhase < 3.86 ? Math.sin((blinkPhase-3.7)/0.16*Math.PI) : 0;
        const wink = greetingTime > 0.95 && greetingTime < 1.23 ? Math.sin((greetingTime-0.95)/0.28*Math.PI) : 0;
        eyeGroups.forEach((eye,index) => { eye.scale.y=Math.max(0.08,1-Math.max(blink,index===0?wink:0)*0.92); });
        for (const gaze of gazeGroups) {
          const idleGaze = Math.sin(elapsed*0.7)*0.004;
          gaze.position.x += (pointerX*0.015+idleGaze-gaze.position.x)*easing;
          gaze.position.y += (-pointerY*0.012-gaze.position.y)*easing;
        }
        packageMaterial.emissive.setHex(0x063f44);
        packageMaterial.emissiveIntensity = 0.05 + burst * 0.4;
        previous = time;
        render();
      };
      const sync = () => {
        previous = 0;
        renderer.setAnimationLoop(!motion.matches && !userPaused && visible && !document.hidden && !lost ? frame : null);
        render();
      };
      pulseRef.current = () => {
        burst = 1;
        greetingTime = 0;
        // Explicit static greeting when automatic animation is paused/reduced.
        if (motion.matches || userPaused) { arms[1].rotation.z=1.95;forearms[1].rotation.z=0.35; }
        updateSignals(elapsed + 1);
        nodeMaterial.size = 0.033;
        connectionMaterial.opacity = 0.37;
        render();
      };
      turnRef.current = (back) => {
        yaw = back ? Math.PI + 0.2 : 0;
        pointerX=0;pointerY=0;
        if(motion.matches || userPaused) { brain.rotation.y=-0.2+yaw;render(); }
      };
      pauseRef.current = (value) => { userPaused = value; sync(); };
      const onPointerDown = (event: PointerEvent) => {
        if ((event.target as HTMLElement).closest("button") || event.button !== 0) return;
        drag = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
        host.setPointerCapture(event.pointerId);
        host.dataset.dragging = "true";
      };
      const onPointerUp = (event: PointerEvent) => {
        if (!drag || drag.id !== event.pointerId) return;
        if (!drag.moved && event.type !== "pointercancel") pulseRef.current();
        if (host.hasPointerCapture(event.pointerId)) host.releasePointerCapture(event.pointerId);
        drag = undefined;
        delete host.dataset.dragging;
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.target !== host) return;
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
          event.preventDefault();
          yaw += event.key === "ArrowLeft" ? -0.18 : event.key === "ArrowRight" ? 0.18 : 0;
          pitch = Math.max(-0.65, Math.min(0.65, pitch + (event.key === "ArrowUp" ? -0.12 : event.key === "ArrowDown" ? 0.12 : 0)));
          brain.rotation.set(0.12 + pitch, -0.2 + yaw, 0.03); tilt.rotation.y = yaw * 0.5; render();
        } else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); pulseRef.current(); }
      };
      host.addEventListener("pointerdown", onPointerDown);
      host.addEventListener("pointerup", onPointerUp);
      host.addEventListener("pointercancel", onPointerUp);
      host.addEventListener("keydown", onKeyDown);
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        render();
      };
      const onLost = (event: Event) => {
        event.preventDefault();
        lost = true;
        delete host.dataset.ready;
        sync();
      };
      const onRestored = () => {
        lost = false;
        resize();
        host.dataset.ready = "true";
        sync();
      };
      const resizeObserver = new ResizeObserver(resize);
      const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      resizeObserver.observe(host);
      intersection.observe(host);
      motion.addEventListener("change", sync);
      document.addEventListener("visibilitychange", sync);
      renderer.domElement.addEventListener("webglcontextlost", onLost);
      renderer.domElement.addEventListener("webglcontextrestored", onRestored);
      resize();
      host.dataset.ready = "true";
      sync();
      setAvailable(true);
      cleanup = () => {
        renderer.setAnimationLoop(null);
        turnRef.current = () => {};
        pulseRef.current = () => {};
        pauseRef.current = () => {};
        host.removeEventListener("pointerdown", onPointerDown);
        host.removeEventListener("pointerup", onPointerUp);
        host.removeEventListener("pointercancel", onPointerUp);
        host.removeEventListener("keydown", onKeyDown);
        interactionArea?.removeEventListener("pointermove", onPointerMove);
        interactionArea?.removeEventListener("pointerleave", onPointerLeave);
        resizeObserver.disconnect();
        intersection.disconnect();
        motion.removeEventListener("change", sync);
        document.removeEventListener("visibilitychange", sync);
        renderer.domElement.removeEventListener("webglcontextlost", onLost);
        renderer.domElement.removeEventListener("webglcontextrestored", onRestored);
        surfaceGeometry.dispose();
        surfaceMaterial.dispose();
        brainGeometries.forEach((geometry) => geometry.dispose());
        brainTextures.forEach((texture) => texture.dispose());
        brainMaterials.forEach((material) => material.dispose());
        gridGeometry.dispose();
        gridMaterial.dispose();
        environment.dispose();
        light.shadow.map?.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    }).catch((error) => {
      console.error("[HeroPlanet] Could not initialize the Three.js scene.", error);
    });

    return () => { cancelled = true; cleanup(); };
  }, [resolvedTheme]);

  return (
    <div ref={hostRef} className={`lab-core-webgl ${styles.interactive}`} role="group" tabIndex={0}
      aria-label={locale === "es" ? "Jais, programador de JokerLabs interactivo. Arrastra o usa las flechas para girar. Pulsa Enter para saludar." : "Jais, interactive JokerLabs developer. Drag or use arrow keys to rotate. Press Enter to say hello."}>
      <div className={`lab-neural-controls ${styles.controls}`}>
        <span>{locale === "es" ? "ARRASTRA PARA EXPLORAR" : "DRAG TO EXPLORE"}</span>
        <button type="button" disabled={!available} onClick={() => pulseRef.current()}>{locale === "es" ? "Saludar" : "Say hello"}</button>
        <button type="button" disabled={!available} aria-pressed={paused} onClick={() => { setPaused(!paused); pausedRef.current = !paused; pauseRef.current(!paused); }}>{paused ? (locale === "es" ? "Reanudar" : "Resume") : (locale === "es" ? "Pausar" : "Pause")}</button>
        <button type="button" disabled={!available} aria-pressed={showBack} onClick={() => { const back=!showBack;setShowBack(back);backRef.current=back;turnRef.current(back); }}>{showBack ? (locale === "es" ? "Ver frente" : "View front") : (locale === "es" ? "Ver mochila" : "View backpack")}</button>
      </div>
      <svg className="lab-core-fallback" aria-hidden="true" viewBox="0 0 360 360" fill="none">
        <g stroke="var(--jl-horizon)" opacity=".35">
          <circle cx="180" cy="180" r="145" />
          <ellipse cx="180" cy="180" rx="75" ry="145" />
          <ellipse cx="180" cy="180" rx="145" ry="55" />
          <path d="M35 180h290M180 35v290" />
        </g>
        <g transform="translate(63 -6) scale(.65)" stroke="var(--jl-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M176 111c-17-20-42-10-46 8-24 0-34 24-25 42-20 17-15 43 3 53-5 25 20 44 40 36 12 16 28 4 28-8V111Zm8 0c17-20 42-10 46 8 24 0 34 24 25 42 20 17 15 43-3 53 5 25-20 44-40 36-12 16-28 4-28-8V111Z" fill="var(--surf)" />
          <path d="M131 121c-5 16 5 25 18 24m-42 17c18-10 33-2 31 16m-29 35c16 5 27-5 25-19m14 55c-8-14-2-27 10-28m18-63c-18 0-22 16-15 27m68-64c5 16-5 25-18 24m42 17c-18-10-33-2-31 16m29 35c-16 5-27-5-25-19m-14 55c8-14 2-27-10-28m-18-63c18 0 22 16 15 27M174 256v17h12v-17" />
        </g>
        <g fill="var(--jl-horizon)" opacity=".7">
          <rect x="116" y="166" width="18" height="64" rx="9" /><rect x="226" y="166" width="18" height="64" rx="9" />
        </g>
        <g fill="var(--jl-accent)" opacity=".55"><path d="M118 232h14l-7 26zM228 232h14l-7 26z" /></g>
        <g fill="var(--jl-primary)">
          <rect x="153" y="253" width="24" height="55" rx="9" /><rect x="183" y="253" width="24" height="55" rx="9" />
          <rect x="148" y="301" width="32" height="12" rx="6" /><rect x="181" y="301" width="32" height="12" rx="6" />
        </g>
        <g fill="var(--jl-accent)">
          <rect x="145" y="174" width="70" height="84" rx="22" />
          <rect x="128" y="185" width="19" height="61" rx="9" /><rect x="213" y="185" width="19" height="61" rx="9" />
        </g>
        <g fill="var(--foreground)"><ellipse cx="168" cy="115" rx="5" ry="8" /><ellipse cx="192" cy="115" rx="5" ry="8" /></g>
        <path d="M169 136q11 10 22 0" stroke="var(--foreground)" strokeWidth="3" fill="none" />
        <text x="180" y="213" textAnchor="middle" fill="var(--background)" fontFamily="sans-serif" fontSize="10" fontWeight="bold">JokerLabs</text>
      </svg>
    </div>
  );
}
