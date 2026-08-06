import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={90}>
        <h2 className="mt-6 text-4xl leading-[1.05] text-balance sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={170}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed font-light text-muted-foreground md:text-lg">
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
