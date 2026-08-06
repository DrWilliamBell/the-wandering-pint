import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl text-gilded md:text-4xl">The Wandering Pint</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed font-light text-muted-foreground">
              A handcrafted wooden Irish pub built inside a restored caravan — travelling the
              length of the UK to bring the warmth of a real snug bar to your venue.
            </p>
            <p className="mt-8 text-[0.65rem] tracking-[0.3em] text-gold uppercase">
              Craic · Ceol · Cairde
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Explore</p>
            {[
              { to: "/about", label: "About" },
              { to: "/the-mobile-pub", label: "The Mobile Pub" },
              { to: "/events", label: "Events" },
              { to: "/gallery", label: "Gallery" },
              { to: "/packages", label: "Packages" },
              { to: "/faq", label: "FAQ" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">Enquiries</p>
            <a
              href="mailto:hello@thewanderingpint.co.uk"
              className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
            >
              hello@thewanderingpint.co.uk
            </a>
            <a
              href="tel:+441234567890"
              className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
            >
              +44 (0)1234 567 890
            </a>
            <p className="text-sm font-light text-muted-foreground">
              Based in the Cotswolds · Travelling UK-wide
            </p>
            <Link to="/contact" className="btn-ghost-gold mt-6 !px-6 !py-3">
              Book Your Event
            </Link>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col gap-3 text-[0.65rem] tracking-[0.22em] text-muted-foreground/70 uppercase md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} The Wandering Pint Ltd</p>
          <p>Fully licensed · Public liability insured · Registered in England</p>
        </div>
      </div>
    </footer>
  );
}
