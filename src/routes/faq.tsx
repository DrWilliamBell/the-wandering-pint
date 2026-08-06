import { createFileRoute, Link } from "@tanstack/react-router";

import interior from "@/assets/interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FaqList } from "@/components/site/Accordion";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mobile Irish Pub Hire Questions Answered" },
      {
        name: "description",
        content:
          "Space, power, licensing, travel and booking questions answered for our converted caravan Irish pub.",
      },
      { property: "og:title", content: "FAQ — The Wandering Pint" },
      {
        property: "og:description",
        content: "Everything practical: space, power, licensing, travel and securing your date.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The practical questions."
        lede="And a few we get asked at every wedding, usually around eleven o'clock."
        image={interior}
        alt="Warmly lit interior of the handcrafted mobile Irish pub"
      />

      <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-12 md:py-36">
        <FaqList items={faqs as unknown as { q: string; a: string }[]} />
        <Reveal delay={140}>
          <div className="mt-20 text-center">
            <p className="font-display text-3xl text-balance md:text-4xl">
              Still wondering something?
            </p>
            <Link to="/contact" className="btn-gold mt-10">
              Ask us directly
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
