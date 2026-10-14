import { Eyebrow } from "@/components/shared/Eyebrow";

export function SectionHeading({ id, eyebrow, title, accent, description }: {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return <div className="jl-section-heading"><Eyebrow>{eyebrow}</Eyebrow><div className="jl-section-heading-row"><h2 id={id}>{title}<br /><span>{accent}</span></h2>{description && <p>{description}</p>}</div></div>;
}
