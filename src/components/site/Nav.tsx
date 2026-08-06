import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/the-mobile-pub", label: "The Mobile Pub" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-gilded md:text-2xl">
              The Wandering Pint
            </span>
            <span className="mt-1 text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase">
              Mobile Irish Pub · UK
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.slice(1, 7).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.7rem] tracking-[0.22em] text-foreground/70 uppercase transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-ghost-gold !px-6 !py-3">
              Book Your Event
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
          >
            <span className="block h-px w-7 bg-gold" />
            <span className="block h-px w-7 bg-gold" />
          </button>
        </nav>
      </div>

      {open ? (
        <div className="fixed inset-0 z-60 flex flex-col bg-background/98 px-6 py-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-gilded">The Wandering Pint</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-gold"
            >
              ✕
            </button>
          </div>
          <div className="mt-14 flex flex-col gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground/85"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
