import { createFileRoute, Link } from "@tanstack/react-router";

import heroPub from "@/assets/hero-pub.jpg";
import interior from "@/assets/interior.jpg";
import pint from "@/assets/pint.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/the-mobile-pub")({
  head: () => ({
    meta: [
      { title: "The Mobile Pub — A Real Irish Pub Inside a Caravan" },
      {
        name: "description",
        content:
          "Step inside a genuine caravan rebuilt as a traditional Irish pub: reclaimed oak, copper taps, etched glass and warm lamplight. Not a horsebox or food truck.",
      },
      { property: "og:title", content: "The Mobile Pub — The Wandering Pint" },
      {
        property: "og:description",
        content:
          "Reclaimed oak, four copper taps, etched mirrors and lamplight — inside a fully mobile converted caravan.",
      },
    ],
  }),
  component: MobilePub,
});

const specs = [
  ["Base vehicle", "1978 touring caravan, fully restored chassis and brakes"],
  ["Footprint", "5.4m long × 2.2m wide · 7m × 4m of level ground required"],
  ["Access", "Towed by 4×4 · 2.4m minimum gate width"],
  ["Power", "One 13amp socket, or our silent inverter generator"],
  ["Taps", "Four keg lines with copper fonts and drip tray"],
  ["Capacity", "Comfortably serves 30–250 guests · two bartenders"],
  ["Set-up", "90 minutes to first pour · 60 minutes to leave no trace"],
  ["Licensing", "Personal licence held · TEN arranged · £5m public liability"],
];

function MobilePub() {
  return (
    <>
      <PageHero
        eyebrow="The mobile pub"
        title="A genuine caravan. A genuine pub."
        lede="Not a horsebox. Not a food truck. Not a trailer bar. A real caravan, rebuilt board by board as a traditional Irish public house — and fully mobile."
        image={heroPub}
        alt="Exterior of the converted caravan Irish pub with gold signwriting and open serving hatch"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          eyebrow="What makes it different"
          title={<>Every surface was chosen, cut and fitted by hand.</>}
          lede="Mobile bars are usually flat panels bolted to a frame. This is cabinetmaking — the kind that takes a winter and rewards a lifetime."
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2">
          <Reveal>
            <img
              src={interior}
              alt="Interior of the mobile Irish pub showing etched glass, oak shelving and copper taps"
              loading="lazy"
              className="w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div className="space-y-12">
            {[
              [
                "Reclaimed Irish oak",
                "Panelling and bar top salvaged from a Dublin pub refit, waxed rather than lacquered so it keeps the depth of old timber.",
              ],
              [
                "Copper & brass fittings",
                "Four hand-polished copper fonts, a brass footrail, cast iron lanterns and antique-finish hardware throughout.",
              ],
              [
                "Etched glass & mirrors",
                "Traditional acid-etched signwriting and a bevelled back mirror that doubles the lamplight at night.",
              ],
              [
                "Amber lighting",
                "Dimmable pendants inside, festoon lines outside — warm enough to make a car park feel like a snug.",
              ],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="border-t border-border pt-7">
                  <h3 className="text-2xl md:text-3xl">{t}</h3>
                  <p className="mt-4 text-sm leading-relaxed font-light text-muted-foreground md:text-base">
                    {b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <SectionHeading eyebrow="Specification" title={<>The practical detail.</>} />
          <dl className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {specs.map(([k, v], i) => (
              <Reveal key={k} delay={i * 60}>
                <div className="border-t border-border pt-6">
                  <dt className="text-[0.65rem] tracking-[0.3em] text-gold uppercase">{k}</dt>
                  <dd className="mt-3 text-base font-light text-muted-foreground">{v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Behind the bar"
              title={<>Guinness, poured the way it should be.</>}
              lede="A two-part settle, a chilled line, a clean glass at 45 degrees. Alongside it: Irish stouts and ales, a curated whiskey shelf, cocktails, wine, prosecco and considered non-alcoholic options."
            />
            <Reveal delay={240}>
              <Link to="/packages" className="btn-ghost-gold mt-10">
                See packages
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <img
              src={pint}
              alt="A pint of dark Irish stout with a creamy head on a dark wooden bar top"
              loading="lazy"
              className="w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
