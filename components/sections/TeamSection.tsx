"use client";

import { useContent } from "@/components/layout/LocaleProvider";
import { TEAM } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TeamSection() {
  const { team } = useContent();
  return <section id="team" className="section-pad jl-team" aria-labelledby="team-title"><div className="wrap"><SectionHeading id="team-title" eyebrow={team.eyebrow} title={team.line1} accent={team.line2} description={team.sub} /><div className="jl-team-grid">{TEAM.map((member, index) => <article className="jl-member" key={member.name}><div className="jl-member-art" aria-hidden="true"><span>{member.initials}</span><i>{member.suit}</i><small>JL / 0{index + 1}</small></div><div className="jl-member-info"><h3>{member.name}</h3><p>{team.roles[index] ?? member.role}</p></div></article>)}</div></div></section>;
}
