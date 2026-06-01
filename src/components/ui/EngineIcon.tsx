import { url } from "../../utils/url";

interface EngineIconProps {
  engine: "docket" | "renewal";
  /** Tile size in px — icon scales to 62% of tile. Default 52. */
  size?: number;
  /** dark = white icon on #2D2A6E tile (for dark-bg sections)
   *  light = color icon on washed-indigo gradient (for light-bg sections) */
  variant?: "dark" | "light";
  className?: string;
}

export default function EngineIcon({
  engine,
  size = 52,
  variant = "dark",
  className = "",
}: EngineIconProps) {
  const radius = Math.round(size * 0.22);          // ~20px on 88px tile
  const iconSize = Math.round(size * 0.80);         // 80% of tile

  const bg =
    variant === "dark"
      ? "#2D2A6E"
      : "linear-gradient(135deg, #EEEDFA, #EEF2FF)";

  const src =
    variant === "dark"
      ? url(`/assets/${engine}engine-white.svg`)
      : url(`/assets/${engine}engine-color.svg`);

  const label = engine === "docket" ? "DocketEngine" : "RenewalEngine";

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <img src={src} alt={`${label} icon`} width={iconSize} height={iconSize} />
    </div>
  );
}
