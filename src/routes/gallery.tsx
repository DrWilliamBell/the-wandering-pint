import { createFileRoute, Link } from "@tanstack/react-router";

import heroPub from "@/assets/hero-pub.jpg";
import interior from "@/assets/interior.jpg";
import weddings from "@/assets/weddings.jpg";
import corporate from "@/assets/corporate.jpg";
import festivals from "@/assets/festivals.jpg";
import pint from "@/assets/pint.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Wandering Pint Mobile Irish Pub" },
      {
        name: "description",
        content:
          "Photographs of our converted caravan Irish pub at weddings, festivals, corporate events and private parties across the UK.",
      },
      { property: "og:title", content: "Gallery — The Wandering Pint" },
      {
        property: "og:description",
        content: "Lamplight, timber and long nights — the mobile Irish pub in the wild.",
      },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: heroPub, alt: "The converted caravan Irish pub lit at dusk", span: "md:col-span-8" },
  { src: pint, alt: "A settled pint of Irish stout on the bar", span: "md:col-span-4" },
  { src: interior, alt: "Oak panelling and copper taps inside the pub", span: "md:col-span-4" },
  { src: weddings, alt: "Wedding guests around the mobile pub at night", span: "md:col-span-8" },
  { src: festivals, alt: "The pub at a UK festival at twilight", span: "md:col-span-7" },
  { src: corporate, alt: "Corporate guests at an evening courtyard event", span: "md:col-span-5" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Lamplight, timber and a long night."
        lede="Real photography from real events. Replace these with your own shots any time."
        image={festivals}
        alt="The mobile Irish pub glowing at a festival at twilight"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-4 md:grid-cols-12">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className={s.span}>
              <figure className="group overflow-hidden">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-24 border-t border-border pt-14 text-center">
            <p className="font-display text-3xl text-balance md:text-5xl">
              Want to see it in person?
            </p>
            <Link to="/contact" className="btn-gold mt-10">
              Book Your Event
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
