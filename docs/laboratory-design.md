# JokerLabs: positioning and commercial page structure

Updated 2026-10-13. Local implementation, not a hosting deployment.

## Identity and promise

JokerLabs is an AI laboratory building its flagship product, Currency Exchange,
and selling AI, software, automation and integration services. The flagship is
product evidence, not a competing company identity. Do not describe Currency
Exchange as AI-powered unless an implemented AI capability is verified.

## Visitor journey

1. **Hero — positioning:** AI laboratory, business benefit, flagship mention.
   Primary action: discuss a project. Secondary action: explore the flagship.
2. **Currency Exchange — product evidence:** operational problem, connected
   capabilities, recent developments (roles, currency reports, customer management,
   memberships/payments), a demo inquiry CTA and the trial closing offer.
3. **Services — commercial bridge:** apply the laboratory's capabilities to a
   visitor's own business. Benefits precede technical methods.
4. **Why — confidence:** product experience, clear scope, staged validation and
   direct team access. Avoid unverified testimonials or performance statistics.
5. **Process — reduce uncertainty:** understand, define, validate, integrate, evolve.
6. **Team — people behind the work.**
7. **FAQ — objections:** distinguish lab/product; explain demos, other industries,
   price/timing and what happens after an inquiry. Native accordions, not simulated support.
8. **Contact — conversion:** explicit choice of services or Currency Exchange demo.

Navigation follows visible sections: Home, Product, Services, Process, Team,
Contact. Removed the generic project gallery and repeated lab/about sections
from composition; their source remains available for future use.

## Marketing decisions

- Concrete positioning before aspirational language.
- Product evidence close to the promise, followed by the service offer.
- Two audience paths ending at one short inquiry form.
- Clear next-step labels; requesting a demo is not scheduling an appointment.
- Progressive disclosure: concise flagship summary plus recent capabilities,
  replacing the nested product mini-landing and duplicate FAQ/offer blocks.
- The authorized offer is a 7-day trial extended to one month total with annual
  membership purchase; inquiries do not activate access. No guaranteed posting/filing, artificial urgency,
  inflated branch capacity or invented social proof.
- Blue/teal identity, geometric hero art, mobile layouts and reduced-motion CSS.

Reference: [Google's landing-page guidance](https://support.google.com/google-ads/answer/6238826?hl=en)
recommends relevant messaging, specific calls to action and a clear path from
promise to action. This implementation has no measured conversion-lift claim.

## Source and conversion handling

`app/page.tsx` owns order. Hero, CurrencyExchangeSection, ServicesSection,
WhySection, ProcessSection, TeamSection, FaqSection and ContactSection render it.
`content/es.ts`, `content/en.ts`, `lib/locale-types.ts` own bilingual copy.
`lib/constants.ts` owns anchor navigation; `app/layout.tsx` owns metadata.

`InquiryLink` dispatches an allowlisted transient services/product interest.
The form lets visitors change it and prepends interest/locale to the existing
email message, preserving the current server request contract. No inquiry is
sent until form submission. `generate_lead` includes interest/locale only after
server success; analytics remains subject to the existing consent setup.
No inquiry data is persisted in browser storage.

## Remaining integration work

Structured server metadata, input hardening/throttling, provider-safe errors,
durable lead storage and any trial lifecycle remain separate tasks in
[the OpenSpec proposal](../../currency-exchange/openspec/changes/landing-product-integration/proposal.md).
The current contact API's existing limitations remain documented there. Product
availability claims reflect local source, not production deployment verification.

## Validation

TypeScript and production build are the applicable code checks. Browser visual
and actual email-delivery validation need an available preview/delivery environment.
Monitor demo versus services inquiries and qualified conversations before claiming
marketing improvements. A/B test copy only with an explicit conversion definition.

## Currency Exchange sales section

The flagship now leads with an operational benefit (exchange house under control),
followed by less fragmented information, branch permissions and informed decisions.
A labelled interactive illustration lets visitors switch between cash/currencies,
customer information and reports. All values are sample data, not live tenant
records or screenshots. The illustration runs locally without API calls.

Recent capabilities support the commercial story rather than exposing API or
provider implementation details. Core/Growth capacity is described accurately.
Demo CTA appears beside the promise and in the closing offer; both preserve the
existing Currency Exchange inquiry interest. ES/EN share the same content contract.

## Product showcase and roadmap presentation

The Currency Exchange section uses a distinct brand lockup, dimensional illustrated
panel, benefit cards, high-contrast electronic-invoicing exhibit and demo closing.
The ES/EN roadmap separates current capabilities from planned invoicing, provider-
gated automatic renewal (under validation), and planned service-payment reconciliation.
The invoice is a concept illustration, not an issued document or live feature.
No launch date, provider certification, authority acceptance or availability guarantee
is made. Source baseline: backend `docs/PROJECT-HANDOFF.md` electronic-invoicing
milestone and `docs/integrations/wompi.md` payment boundaries.

## Reporting and compliance spotlight

DIAN Formats 1099 (FX purchases) and 1100 (FX sales), plus configured UIAF
quarterly reporting, now have distinct commercial cards and an illustrative
record → generate → review/submit flow. Copy describes support for compliance,
not a blanket legal compliance guarantee or automatic authority acceptance.
UIAF is conditional on company configuration and reporting access is permission-
controlled. Electronic invoicing remains separately labelled Planned.
Source evidence: `money-exchange-backend/app/api/routers/reports.py`,
`app/services/dian.py`, and `app/services/uiaf.py`. Both locales and mobile styles
are aligned; the preview remains illustrative and calls no reporting APIs.

## Shared styling across the landing

Services, differentiation, process, team, FAQ, contact and footer now use the same
blue/teal surfaces, restrained borders, icon containers and editorial typography.
`SectionHeading` is their shared heading boundary. Cards use responsive grids;
FAQ keeps native disclosure controls. Process shows all five stages as an ordered
list rather than automatically rotating between hidden steps. Team identities and
roles remain the supplied content; initials are graphics, not invented portraits.
Footer retains all navigation, email and five social destinations. Contact retains
its interest selection, submission and confirmation behavior. The mobile menu
now exposes expanded state and its controlled overlay identifier.

New styles use `jl-*` classes in `app/globals.css`, existing theme tokens and
reduced-motion hover support. Hero and navigation have matching surface/CTA
refinements. No dependency, backend, plan or roadmap change is included.

## Trial offer and commercial strategy

The closing product panel now uses `CurrencyExchangeTrial`, with a 7-day request
and annual membership inquiry. Offer selection is visible in the contact form,
included in the existing inquiry email and segmented in existing analytics events.
One month means the total extended trial. Pricing, exact dates and membership
terms are confirmed before payment. See [marketing strategy](marketing-strategy.md).

## Globe and neural core hero

`HeroPlanet` renders one rotating, translucent longitude/latitude globe around a
central brain with two sculpted hemispheres and teal cortical folds. The globe
rotates independently so the neural core remains recognizable. Blue/teal materials
adapt to the active theme. The old separate SVG globe has been removed.

The inline globe/brain SVG fallback shares the exact positioned bounds with the
canvas; only one layer is visible after WebGL initializes. Context loss restores
the fallback. Rotation pauses offscreen, in hidden tabs and for reduced-motion
preferences. GPU resources and observers are released on unmount. No external
textures or models are required.

### Animation visibility verification

The globe now includes asymmetric rotating beacons; the brain subtly changes
perspective and follows pointer movement within the illustration. Reduced motion
continues to stop the animation. Initialization failures log diagnostic messages
rather than silently hiding the reason for fallback.

Local Chrome verification confirmed the Three.js canvas is visible (opacity 1),
the SVG fallback is hidden, successive hero frames differ and no browser runtime
exceptions were observed. TypeScript validation passed.

### Interactive neural illustration

The brain is now a computational graph with 200 nodes, nearest-neighbor synapses,
travelling signals and a central circuit chip. Drag or arrow keys rotate the view;
click, Enter/Space or Activate network sends a visual activation pulse. Pause/Resume
controls stop the automatic animation. Pointer capture supports dragging, while
vertical touch scrolling remains available. Instructions and buttons are localized
in ES/EN and keyboard focus is visible. Reduced motion disables automatic movement;
explicit interaction can still update the static view. This is a brand illustration,
not a live model or product inference.

### Recognizable brain and detailed processor

The neural graph now sits inside a continuous lobed brain silhouette with paired
translucent cortex volumes, branching gyri and a central fissure. Globe lines and
synapses are subdued to prioritize the brain. The AI processor has a beveled dark
package, teal substrate, metallic lid, 28 gold leads, circuit traces and a locally
rendered AI/JokerLabs label. Procedural texture resources are disposed on teardown.
Chrome verified the visible scene, animation, drag, keyboard, pulse, pause and
mobile width without runtime exceptions; TypeScript passed.

### Sculpted anatomical direction

The cortex now uses solid, shaded half-ellipsoid hemispheres with a narrow sagittal
cleft and recessed winding sulci modeled into the mesh. Broad proportions,
cerebellar lobes and a tapered brainstem replace the flat neon contour. The chip
is smaller and sits lower on the front; neural connections remain secondary.
This is a procedural anatomical illustration, not a medical reconstruction.
TypeScript and Chrome interaction/mobile checks passed without runtime exceptions.

### Personified JokerLabs agent

The brain is now the head of an original procedural character with expressive
eyes and smile, a forehead AI chip, teal JokerLabs T-shirt, navy trousers and
trainers. Its head and arms move subtly; click/Enter or Say hello triggers a
hand wave alongside neural activation. Static fallback also shows the clothed
character. This is a website brand character, not a ChatGPT Work pet. No mascot
reference was supplied, so no exact likeness to an existing mascot is claimed.
Chrome checked animation, keyboard, dragging, greeting, pause and mobile width;
TypeScript passed and no browser runtime exceptions were observed.

### Mascot material and lighting polish

The character uses a procedural studio environment for reflections, filmic tone
mapping, warm key/cool fill lighting and soft self-shadowing. Eyes have sclera,
teal irises, pupils, highlights and brows. Clothes use a locally generated weave
bump map; seams, thumbs, rubber soles and laces add physical detail. The printed
JokerLabs mark conforms to the shirt surface. The forehead processor retains its
metal package and gold leads. Environment, texture and shadow resources are
released with the scene. The character keeps its greeting, drag, keyboard, pause
and reduced-motion behavior. Chrome and TypeScript checks passed.

### Mascot performance and official branding

The forehead processor is enlarged with its AI marking and gold pins clearly
visible. The shirt texture now draws the actual `public/assets/logo-white.svg`
mark above the JokerLabs name, conforming to the fabric surface. The local SVG
loads asynchronously; its texture updates in place and is released on teardown.

Animation now coordinates torso breathing, small head motion, irregular smooth
blinks, damped pupil tracking and a staged greeting. Arm lift/settle uses smooth
interpolation; a separate forearm pivot provides the wrist-wave gesture. Pausing
or reduced motion stops the automatic performance; explicit greeting still shows
a static wave. Chrome verified the official shirt mark, visible processor,
animation, keyboard, dragging, greeting, pause and mobile width without runtime
exceptions. TypeScript validation passed.

### Rear processor and exposed circuit

The processor has moved from the forehead to a rear circuit board mounted on the
shirt. Its gold pins connect to teal right-angle traces and gold terminals.
The official JokerLabs logo remains on the front. View circuit / View front turns
the character with eased rotation, or immediately when paused/reduced motion is
active. Manual drag and arrow keys remain available. Chrome confirmed rear board
visibility, toggle state, existing interactions and mobile width without runtime
exceptions. TypeScript passed.

### Circuit backpack

The flat rear board is now a rounded technological backpack with real depth,
padded shoulder straps, a top handle, front pocket and zipper. Its outward face
carries teal circuit traces, gold terminals and a small embedded AI module;
illuminated piping follows the bag perimeter. A subtle delayed sway follows the
character's idle performance. The view control is now View backpack / View front.
Chrome verified the rear appearance, interactions and mobile layout without
runtime exceptions; TypeScript passed.

### Black brand patch and character acting

The official shirt logo now sits on a black rounded patch with a stitched border,
white JokerLabs mark/name and teal AI Laboratory caption. Character acting adds
asymmetric brows, curious head tilt, small gaze shifts, a relaxed bent-arm pose,
coordinated smile widening and a brief wink during the greeting. These motions
share the existing paused/reduced-motion animation lifecycle. Chrome verified the
appearance and existing interactions/mobile width without runtime exceptions;
TypeScript passed.

### Detailed character sculpt

The mascot has sculpted cheeks and nose, a mouth cavity with teeth and lower lip,
upper eyelids and stronger asymmetric brows. The shirt has tailored shoulders/waist,
collar and side seams. Hands have three stylized fingers plus a thumb, sleeve cuffs
are outlined, and trousers/trainers include pocket seams, tongues and toe stitching.
The character is slightly larger for facial and garment readability while preserving
the black logo patch and circuit backpack. Chrome interaction/mobile checks passed
without runtime exceptions; TypeScript passed.

### Mascot name: Jais

The user named the company agent Jais. The shirt now separates the official
JokerLabs mark and the name Jais into two black stitched chest patches, one on
each side. The accessible illustration label also identifies Jais. Chrome checked
the appearance and interactions/mobile layout without runtime exceptions;
TypeScript passed.

### Stable shirt patches

Logo/name geometry is projected onto the actual tailored torso mesh with a small
normal offset and parented to the torso. It therefore follows breathing deformation
instead of intersecting the shirt. Polygon offset handles residual depth conflicts;
the patch does not cast or receive self-shadows, while depth testing still allows
normal occlusion by the character. Chrome interactions/mobile and TypeScript checks
passed without runtime exceptions.

### Jais the developer

Jais now carries an open laptop with a modeled keyboard, trackpad and a locally
rendered syntax-colored code editor. The name patch says Developer and the
accessible description identifies Jais as a JokerLabs programmer. The laptop is
parented to the non-greeting forearm and follows the carrying pose; the other arm
remains free to greet. Code is illustrative, not an executing application.
Chrome verified the appearance, animation, controls and mobile layout without
runtime exceptions; TypeScript passed.

### Laptop extraction performance

Jais begins with the computer stored. A timed sequence reaches behind, raises the
closed laptop from the backpack, brings it around the side and opens its hinged
screen. The computer transfers from the character root to the forearm while
preserving its world transform, then eases into the carrying grip. Take out laptop
replays the action. Paused/reduced-motion activation shows the final pose directly.
Chrome verified the full replay and captured extraction/open poses with no runtime
exceptions; existing controls/mobile layout and TypeScript passed.

### Laptop rendering and Python sticker

Laptop chassis parts now have beveled edges, keyboard/display separation is
increased, and the screen uses an anisotropic texture without tone-mapping its
code colors. Display/decals do not self-shadow. Pixel ratio is capped at 2.
The reaching arm now turns towards the backpack rather than forward. A white
Python sticker sits on the exterior of the lid, using the official two-snakes SVG
from https://www.python.org/community/logos/ (Python Software Foundation).
Local copy: public/assets/python-logo.svg. Chrome verified the extraction replay,
open pose, rear sticker and controls/mobile without runtime exceptions.

### Engineering identity without a laptop

The laptop, extraction sequence and extraction control have been removed at the
user's request. Jais now communicates engineering through a code-symbol sleeve
badge, the Engineer name-patch subtitle and the existing circuit backpack. Greeting,
gaze, breathing, dragging, keyboard controls and rear view remain available.
TypeScript passed; Chrome checks cover the existing interactions and mobile layout.
