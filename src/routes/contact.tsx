import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroPub from "@/assets/hero-pub.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — The Wandering Pint Mobile Irish Pub" },
      {
        name: "description",
        content:
          "Check availability and book our converted caravan Irish pub for your wedding, party, festival or corporate event anywhere in the UK.",
      },
      { property: "og:title", content: "Contact & Book — The Wandering Pint" },
      {
        property: "og:description",
        content: "Tell us your date and venue. We reply within one working day.",
      },
    ],
  }),
  component: Contact,
});

const eventTypes = ["Wedding", "Corporate", "Private party", "Festival", "Something else"];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your date."
        lede="Share a few details and we'll come back within one working day with availability and a tailored quote."
        image={heroPub}
        alt="The converted caravan Irish pub with its serving hatch open at dusk"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Enquiries" title={<>Let's find your night.</>} />
            <Reveal delay={200}>
              <dl className="mt-14 space-y-9">
                {[
                  ["Email", "hello@thewanderingpint.co.uk"],
                  ["Telephone", "+44 (0)1234 567 890"],
                  ["Based", "The Cotswolds, Gloucestershire"],
                  ["Travels", "England, Wales & Scotland"],
                  ["Response", "Within one working day"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-border pt-5">
                    <dt className="text-[0.65rem] tracking-[0.3em] text-gold uppercase">{k}</dt>
                    <dd className="mt-2 text-base font-light text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-14">
                <MapPlaceholder />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              className="border border-border bg-card/60 p-8 grain md:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-7 sm:grid-cols-2">
                {[
                  { label: "Full name", type: "text", name: "name", wide: true },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Phone", type: "tel", name: "phone" },
                  { label: "Event date", type: "date", name: "date" },
                  { label: "Approx. guests", type: "number", name: "guests" },
                  { label: "Venue / location", type: "text", name: "venue", wide: true },
                ].map((f) => (
                  <label key={f.name} className={`block ${f.wide ? "sm:col-span-2" : ""}`}>
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

                <fieldset className="sm:col-span-2">
                  <legend className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                    Type of event
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {eventTypes.map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input type="radio" name="eventType" value={t} className="peer sr-only" />
                        <span className="block border border-border px-4 py-2 text-xs tracking-[0.15em] text-muted-foreground uppercase transition-colors peer-checked:border-gold peer-checked:text-gold">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block sm:col-span-2">
                  <span className="text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
                    Tell us more
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-3 w-full resize-none border-b border-input bg-transparent pb-3 text-base font-light text-foreground outline-none transition-colors focus:border-gold"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-gold w-full">
                    {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
                  </button>
                  <p className="mt-5 text-xs font-light text-muted-foreground">
                    We reply personally to every enquiry. No mailing lists, ever.
                  </p>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
