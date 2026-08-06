import { createFileRoute, Link } from "@tanstack/react-router";

import heroPub from "@/assets/hero-pub.jpg";
import interior from "@/assets/interior.jpg";
import weddings from "@/assets/weddings.jpg";
import corporate from "@/assets/corporate.jpg";
import festivals from "@/assets/festivals.jpg";
import pint from "@/assets/pint.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FaqList } from "@/components/site/Accordion";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { faqs, steps, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Wandering Pint — Mobile Irish Pub Hire Across the UK" },
      {
        name: "description",
        content:
          "A handcrafted wooden Irish pub built inside a restored caravan, travelling across the UK for weddings, festivals, private parties and corporate events.",
      },
      { property: "og:title", content: "The Wandering Pint — Mobile Irish Pub Hire" },
      {
        property: "og:description",
        content:
          "A real Irish pub on wheels. Handcrafted dark wood, copper taps and a proper pint of Guinness — delivered to your venue anywhere in the UK.",
      },
    ],
  }),
  component: Home,
});

const occasions = [
  {
    title: "Weddings",
    image: weddings,
    body: "The bar your guests never leave. A glowing snug on the lawn for the drinks reception, the speeches and every hour after.",
  },
  {
    title: "Corporate Events",
    image: corporate,
    body: "Summer parties, launches and client evenings with the atmosphere of a Dublin pub and the polish of a private members' club.",
  },
  {
    title: "Private Parties",
    image: interior,
    body: "Milestone birthdays, anniversaries and garden gatherings — an entire pub parked outside your front door.",
  },
  {
    title: "Festivals",
    image: festivals,
    body: "A landmark bar with genuine character, built to serve long queues without losing an ounce of charm.",
  },
];

function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-svh items-end overflow-hidden grain">
        <img
          src={heroPub}
          alt="A vintage caravan converted into a traditional Irish pub, lit with warm festoon lights at dusk on a country estate lawn"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover ken"
        />
        <div className="veil absolute inset-0" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-44 pb-16 md:px-12 md:pb-24">
          <Reveal>
            <p className="eyebrow">A real Irish pub — on wheels</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 max-w-5xl text-[3rem] leading-[0.94] text-balance sm:text-7xl md:text-[7.5rem]">
              Bring a Real Irish Pub to Your Event
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-9 max-w-2xl text-base leading-relaxed font-light text-cream/80 md:text-xl">
              A handcrafted wooden Irish pub on wheels, travelling across the UK for unforgettable
              weddings, parties, festivals and corporate events.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="btn-gold">
                Book Your Event
              </Link>
              <Link to="/the-mobile-pub" className="btn-ghost-gold">
                Step Inside the Pub
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute right-6 bottom-10 hidden flex-col items-center gap-4 md:right-12 md:flex">
          <span className="text-[0.6rem] tracking-[0.35em] text-cream/50 [writing-mode:vertical-rl] uppercase">
            Scroll
          </span>
          <span className="h-16 w-px bg-gradient-to-b from-gold/70 to-transparent" />
        </div>
      </section>

      {/* ---------- STATEMENT ---------- */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <Reveal>
            <p className="max-w-5xl font-display text-2xl leading-[1.35] text-balance sm:text-3xl md:text-[2.9rem]">
              Not a horsebox. Not a food truck. Not a trailer bar. This is a{" "}
              <span className="text-gilded">genuine caravan</span>, stripped to the shell and rebuilt
              by hand as a traditional Irish public house — then driven to your door.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              ["Reclaimed oak", "Panelling, bar top and shelving built from salvaged Irish timber."],
              ["Copper & brass", "Four working taps, polished fittings, etched glass and lanterns."],
              ["Warm lamplight", "Amber pendants and festoons that turn any field into a snug."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 110}>
                <div className="hairline" />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          eyebrow="How it works"
          title={<>Four unhurried steps from enquiry to last orders.</>}
          lede="We handle the licensing, the logistics and the levelling blocks. You choose the moment the hatch opens."
        />
        <div className="mt-20 grid gap-x-14 gap-y-14 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="flex gap-8 border-t border-border pt-8">
                <span className="font-display text-3xl text-gold/70">{s.n}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed font-light text-muted-foreground md:text-base">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-12 md:py-36">
          <Reveal>
            <div className="relative">
              <img
                src={interior}
                alt="Handcrafted interior of the mobile Irish pub with dark oak panelling and copper taps"
                width={1408}
                height={1600}
                loading="lazy"
                className="w-full object-cover shadow-[var(--shadow-lift)]"
              />
              <span className="absolute -right-3 -bottom-3 hidden h-24 w-24 border-r border-b border-gold/50 md:block" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={<>A pub built in a barn, one winter, by two stubborn hands.</>}
              lede="It started with a rusting 1970s touring caravan and a memory of a fire-lit bar in West Cork. Eleven months of joinery later, the shell had become a pub: curved oak ceiling, brass footrail, etched mirror, a proper settle for the Guinness."
            />
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
                Today it travels the UK — and every venue it visits becomes, for one night, a
                village local somewhere on the Atlantic coast.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link to="/about" className="btn-ghost-gold mt-10">
                Read our story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- WHY CLIENTS LOVE US ---------- */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          eyebrow="Why clients love us"
          title={<>The bar becomes the memory of the whole day.</>}
          align="center"
        />
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {[
            [
              "It is unmistakably real",
              "Guests walk up, look twice, and realise an actual Irish pub has been parked on the lawn.",
            ],
            [
              "Poured properly",
              "A two-part Guinness settle, a curated whiskey shelf, and bartenders who talk to your guests.",
            ],
            [
              "Effortless for you",
              "Licensing, TENs, insurance, power and clean-down handled. One point of contact throughout.",
            ],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="h-full border border-border bg-card/60 p-10 grain">
                <span className="font-display text-5xl text-gold/40">0{i + 1}</span>
                <h3 className="mt-8 text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed font-light text-muted-foreground">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="border-y border-border bg-secondary/20">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <SectionHeading
            eyebrow="Where we travel"
            title={<>Weddings, corporate events, private parties, festivals.</>}
          />
          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={i * 90}>
                <article className="group">
                  <div className="overflow-hidden">
                    <img
                      src={o.image}
                      alt={`${o.title} — the mobile Irish pub in use`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-8 text-3xl md:text-4xl">{o.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed font-light text-muted-foreground md:text-base">
                    {o.body}
                  </p>
                  <Link
                    to="/events"
                    className="mt-6 inline-block text-[0.7rem] tracking-[0.25em] text-gold uppercase"
                  >
                    Explore →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY STRIP ---------- */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading eyebrow="Gallery" title={<>Lamplight, timber and a long night.</>} />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[heroPub, pint, weddings, festivals].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <img
                src={src}
                alt="The mobile Irish pub and its details"
                loading="lazy"
                className={`w-full object-cover ${i % 2 ? "aspect-[3/4]" : "aspect-[3/4] md:mt-10"}`}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link to="/gallery" className="btn-ghost-gold mt-14">
            View full gallery
          </Link>
        </Reveal>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={pint}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
          <SectionHeading eyebrow="Testimonials" title={<>Kind words from long nights.</>} />
          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col justify-between border-t border-gold/40 pt-8">
                  <blockquote className="font-display text-xl leading-[1.45] md:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm tracking-[0.2em] text-gold uppercase">{t.name}</p>
                    <p className="mt-2 text-xs font-light text-muted-foreground">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title={<>The practical questions.</>} />
          <div>
            <FaqList items={faqs.slice(0, 5) as unknown as { q: string; a: string }[]} />
            <Reveal delay={120}>
              <Link to="/faq" className="btn-ghost-gold mt-12">
                All questions
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <ContactBlock />
    </>
  );
}

function ContactBlock() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Enquire"
              title={<>Tell us about your date.</>}
              lede="Share a few details and we'll reply within one working day with availability and a tailored quote."
            />
            <Reveal delay={240}>
              <div className="mt-12 space-y-3 text-sm font-light text-muted-foreground">
                <p>hello@thewanderingpint.co.uk</p>
                <p>+44 (0)1234 567 890</p>
                <p>Based in the Cotswolds · Travelling UK-wide</p>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12">
                <MapPlaceholder />
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form
              className="border border-border bg-card/60 p-8 md:p-12 grain"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-7">
                {[
                  { label: "Full name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Phone", type: "tel", name: "phone" },
                  { label: "Event date", type: "date", name: "date" },
                  { label: "Venue / location", type: "text", name: "venue" },
                  { label: "Approx. guests", type: "number", name: "guests" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      name={f.name}
                      className="mt-3 w-full border-b border-input bg-transparent pb-3 text-base font-light text-foreground outline-none transition-colors focus:border-gold"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                    Tell us more
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-3 w-full resize-none border-b border-input bg-transparent pb-3 text-base font-light text-foreground outline-none transition-colors focus:border-gold"
                  />
                </label>
                <button type="submit" className="btn-gold mt-4 w-full">
                  Send enquiry
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
