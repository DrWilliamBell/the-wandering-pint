export function MapPlaceholder() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-secondary/50 grain">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.115 85 / 12%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.115 85 / 12%) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
        <p className="eyebrow">Google Map</p>
        <p className="max-w-xs text-sm font-light text-muted-foreground">
          Based in the Cotswolds — travelling to venues across England, Wales and Scotland.
        </p>
      </div>
    </div>
  );
}
