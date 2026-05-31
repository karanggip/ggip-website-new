import { useCallback, useRef, useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "91,127,255",
  style = {},
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={className}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: hovering
          ? `1px solid rgba(${glowColor},0.3)`
          : "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: hovering ? "translateY(-4px)" : "translateY(0)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${glowColor},0.15) 0%, transparent 70%)`,
          left: pos.x - 140,
          top: pos.y - 140,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
