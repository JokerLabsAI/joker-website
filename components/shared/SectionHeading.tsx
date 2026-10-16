import { Eyebrow } from "@/components/shared/Eyebrow";

export function SectionHeading({ id, eyebrow, title, accent, description, as: Heading = "h2" }: {
  id: string;
  as?: "h1" | "h2";
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return <div className="jl-section-heading"><Eyebrow>{eyebrow}</Eyebrow><div className="jl-section-heading-row"><Heading id={id}>{title}<br /><span>{accent}</span></Heading>{description && <p>{description}</p>}</div></div>;
}
