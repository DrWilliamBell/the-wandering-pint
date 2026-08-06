import { createFileRoute, Link } from "@tanstack/react-router";

import corporate from "@/assets/corporate.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Mobile Irish Pub Hire" },
      {
        name: "description",
        content:
          "Three considered mobile Irish pub packages for weddings, parties and corporate events, plus bespoke multi-day festival trading.",
      },
      { property: "og:title", content: "Packages & Pricing — The Wandering Pint" },
      {
        property: "og:description",
        content: "The Snug, The Session and The Full House — plus bespoke festival trading.",
      },
    ],
  }),
  component: Packages,
});

const packages = [
  {
    name: "The Snug",
    price: "from £950",
    for: "Intimate gatherings up to 60 guests",
    items: [
      "5 hours of bar service",
      "One bartender",
      "Two keg lines including Guinness",
      "Wine, prosecco and soft drinks",
      "Festoon lighting and barrel tables",
      "Set-up, licensing and clean-down",
    ],
  },
  {
    name: "The Session",
    price: "from £1,650",
    for: "Weddings and parties, 60–150 guests",
    featured: true,
    items: [
      "8 hours of bar service",
      "Two bartenders",
      "Four keg lines and full spirits back-bar",
      "Curated Irish whiskey flight",
      "Signature cocktail designed with you",
      "Chalkboard signwriting personalised",
      "Festoon lighting, barrels and bench seating",
    ],
  },
  {
    name: "The Full House",
    price: "from £2,750",
    for: "Large events and corporate hospitality",
    items: [
      "Full-day and late-licence service",
      "Three bartenders plus event manager",
      "Four keg lines, cocktail menu, wine list",
      "Trad music duo for two sets",
      "Branded glassware and signage",
      "Second serving point on request",
      "Full documentation pack for venues",
    ],
  },
];

function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Three ways to open the hatch."
        lede="Every quote is tailored — these are the shapes most events take. Mileage beyond 60 miles from the Cotswolds is quoted transparently."
        image={corporate}
        alt="Guests being served at the mobile Irish pub during an evening corporate event"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col border p-10 grain md:p-12 ${
                  p.featured
                    ? "border-gold/50 bg-card shadow-[var(--shadow-gold)]"
                    : "border-border bg-card/50"
                }`}
              >
                {p.featured ? (
                  <span className="mb-6 self-start border border-gold/50 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-gold uppercase">
                    Most booked
                  </span>
                ) : null}
                <h2 className="text-4xl">{p.name}</h2>
                <p className="mt-3 text-sm font-light text-muted-foreground">{p.for}</p>
                <p className="mt-8 font-display text-3xl text-gilded">{p.price}</p>
                <div className="hairline my-8" />
                <ul className="space-y-4">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-4 text-sm font-light text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 ${p.featured ? "btn-gold" : "btn-ghost-gold"} w-full`}
                >
                  Enquire
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <SectionHeading
            eyebrow="Bespoke"
            title={<>Festivals, tours and multi-day trading.</>}
            lede="For festival organisers and brand activations we build a bespoke arrangement around footfall, trading hours, crew accommodation and off-grid power. Tell us the site and we'll design the bar around it."
          />
          <Reveal delay={220}>
            <Link to="/contact" className="btn-ghost-gold mt-12">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
