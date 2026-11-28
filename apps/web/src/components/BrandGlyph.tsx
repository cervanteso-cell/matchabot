import { cn } from "@rakazo/ui-web";

/** v1 Sprout Bot mark (RAL 6011 #6C7C59) for auth and other static brand moments. */
export function BrandGlyph({
  size = 74,
  className,
  label,
}: {
  size?: number;
  className?: string;
  label?: string;
}) {
  return (
    <img
      src="/brand/matcha-bot-glyph.png"
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      data-matcha-bot-glyph=""
    />
  );
}