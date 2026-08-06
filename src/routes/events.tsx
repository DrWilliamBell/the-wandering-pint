import { createFileRoute, Link } from "@tanstack/react-router";

import weddings from "@/assets/weddings.jpg";
import corporate from "@/assets/corporate.jpg";
import festivals from "@/assets/festivals.jpg";
import interior from "@/assets/interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Weddings, Festivals & Corporate Irish Pub Hire" },
      {
        name: "description",
        content:
          "Mobile Irish pub hire for weddings, corporate events, private parties and festivals across the UK. A real pub arrives at your venue.",
      },
      { property: "og:title", content: "Events — The Wandering Pint" },
      {
        property: "og:description",
        content:
          "Weddings, corporate summer parties, milestone birthdays and festivals — served from a handcrafted Irish pub on wheels.",
      },
    ],
  }),
  component: Events,
});

const sections = [
  {
    id: "weddings",
    eyebrow: "Weddings",
    title: "The bar your guests never leave.",
    body: "From the drinks reception through to the last dance, the pub becomes the gravitational centre of the day. We arrive early, sit quietly behind the ceremony, then open the hatch to a lawn full of guests and a tray of settled Guinness.",
    points: [
      "Arrival pints or Irish coffee on arrival",
      "Discreet service through speeches and dinner",
      "Late licence extensions arranged where permitted",
      "Personalised chalkboard and signature drink",
    ],
    image: weddings,
  },
  {
    id: "corporate",
    eyebrow: "Corporate Events",
    title: "Hospitality that doesn't feel corporate.",
    body: "Summer parties, product launches, client evenings and away-days. The pub gives a courtyard or car park instant warmth and gives your guests somewhere to stand, talk and stay.",
    points: [
      "Invoiced tab, drinks tokens or cash bar",
      "Branded chalkboards and glassware available",
      "Fully insured with risk assessments supplied",
      "Indoor courtyards and rooftops considered on survey",
    ],
    image: corporate,
  },
  {
    id: "private-parties",
    eyebrow: "Private Parties",
    title: "An entire pub outside your front door.",
    body: "Milestone birthdays, anniversaries, christenings, wakes and long summer garden gatherings. Nobody has to drive, nobody has to host the bar, and nobody wants to go inside.",
    points: [
      "Driveways, gardens and paddocks welcome",
      "Bar-tender-led service for 30 to 150 guests",
      "Trad music duo bookable through us",
      "Left spotless, gone by morning",
    ],
    image: interior,
  },
  {
    id: "festivals",
    eyebrow: "Festivals",
    title: "A landmark bar with genuine character.",
    body: "Traders row is full of gazebos. A hand-built Irish pub becomes the meeting point people navigate by — and it serves fast without losing an ounce of charm.",
    points: [
      "Multi-day trading with on-site crew",
      "High-volume keg service, four lines",
      "Full documentation for licensing packs",
      "Off-grid capable with silent generator",
    ],
    image: festivals,
  },
];

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Wherever it parks, the night gathers around it."
        lede="Weddings, corporate events, private parties and festivals — across England, Wales and Scotland."
        image={weddings}
        alt="Wedding guests gathered around the mobile Irish pub at night"
      />

      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`border-b border-border ${i % 2 ? "bg-secondary/30" : ""}`}
        >
          <div
            className={`mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-12 md:py-36`}
          >
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <img
                src={s.image}
                alt={`${s.eyebrow} with the mobile Irish pub`}
                loading="lazy"
                className="w-full object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
            <div className={i % 2 ? "md:order-1" : ""}>
              <SectionHeading eyebrow={s.eyebrow} title={s.title} lede={s.body} />
              <ul className="mt-10 space-y-4">
                {s.points.map((p, j) => (
                  <Reveal key={p} as="li" delay={j * 70}>
                    <span className="flex gap-4 text-sm font-light text-muted-foreground md:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {p}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12 md:py-36">
        <SectionHeading
          eyebrow="Availability"
          title={<>Peak Saturdays go 9–14 months ahead.</>}
          align="center"
        />
        <Reveal delay={200}>
          <Link to="/contact" className="btn-gold mt-14">
            Check Your Date
          </Link>
        </Reveal>
      </section>
    </>
  );
}
