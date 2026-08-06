import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="relative flex min-h-[68vh] items-end overflow-hidden grain">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover ken"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-40 pb-20 md:px-12 md:pb-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.98] text-balance sm:text-6xl md:text-8xl">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base leading-relaxed font-light text-muted-foreground md:text-lg">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
