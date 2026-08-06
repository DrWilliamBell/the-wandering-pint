import { createFileRoute, Link } from "@tanstack/react-router";

import interior from "@/assets/interior.jpg";
import heroPub from "@/assets/hero-pub.jpg";
import pint from "@/assets/pint.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — The Wandering Pint Mobile Irish Pub" },
      {
        name: "description",
        content:
          "How a rusting 1970s touring caravan was rebuilt by hand into a traditional Irish pub that now travels across the UK.",
      },
      { property: "og:title", content: "Our Story — The Wandering Pint" },
      {
        property: "og:description",
        content:
          "Eleven months of joinery turned a caravan shell into a real Irish pub. This is how it happened.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A caravan, a winter, and a memory of West Cork."
        lede="We didn't set out to build a business. We set out to rebuild a feeling."
        image={interior}
        alt="Dark oak panelling and copper taps inside the converted caravan pub"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8 text-base leading-relaxed font-light text-muted-foreground md:text-lg">
            <Reveal>
              <p className="font-display text-2xl leading-[1.35] text-foreground md:text-3xl">
                In a village bar on the Beara Peninsula, the rain came sideways, the fire smoked, and
                nobody left for six hours. We spent the next decade trying to explain that room to
                people. Eventually we decided to build it instead.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                The shell was a 1978 touring caravan, found under a tarpaulin on a Gloucestershire
                farm and worth almost nothing. Everything inside came out. What went back in was
                joinery: reclaimed oak from a Dublin bar refit, a curved matchboard ceiling steamed
                to shape, a solid elm counter, brass footrail, etched mirror, and shelves deep enough
                for a serious whiskey collection.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Eleven months, one very cold barn, and roughly four hundred hours of sanding later,
                the caravan had become a pub. Not a bar unit. Not a serving hatch dressed with
                bunting. A pub — with a settle, a snug corner, and lamplight that makes strangers
                talk to each other.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p>
                Since then it has stood on estate lawns, cobbled courtyards, clifftops and festival
                fields. It has poured the first pint of hundreds of marriages. It still smells,
                faintly and permanently, of beeswax and stout.
              </p>
            </Reveal>
          </div>

          <div className="space-y-10">
            <Reveal delay={120}>
              <img
                src={heroPub}
                alt="The converted caravan Irish pub parked on a country estate lawn at dusk"
                loading="lazy"
                className="w-full object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="border border-border bg-card/60 p-10 grain">
                <p className="eyebrow">By the numbers</p>
                <dl className="mt-8 space-y-7">
                  {[
                    ["1978", "The year our caravan first left the factory"],
                    ["11 months", "Hand-built conversion, one barn, two joiners"],
                    ["400+", "Events served across England, Wales and Scotland"],
                    ["4", "Working taps, poured with a proper settle"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-display text-4xl text-gilded">{k}</dt>
                      <dd className="mt-1 text-sm font-light text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border">
        <img
          src={pint}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12 md:py-36">
          <SectionHeading
            eyebrow="Our promise"
            title={<>Craftsmanship first. Everything else follows.</>}
            align="center"
          />
          <Reveal delay={220}>
            <Link to="/contact" className="btn-gold mt-14">
              Book Your Event
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
