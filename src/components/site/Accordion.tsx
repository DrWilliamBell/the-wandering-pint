import { useState } from "react";
import { Reveal } from "./Reveal";

export type QA = { q: string; a: string };

export function FaqList({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 60}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-8 py-7 text-left"
            >
              <span className="font-display text-xl leading-snug md:text-2xl">{item.q}</span>
              <span
                className={`mt-1 shrink-0 text-gold transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                ＋
              </span>
            </button>
            <div
              className={`grid transition-all duration-700 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-8 text-base leading-relaxed font-light text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
