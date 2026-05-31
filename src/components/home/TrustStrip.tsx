import { useEffect, useRef, useState } from "react";
import FadeIn from "../ui/FadeIn";

const STATS = [
  { value: 100, suffix: "+", label: "IP offices connected" },
  { value: 70,  suffix: "M+", label: "Trademark records" },
  { value: 190, suffix: "+", label: "Jurisdictions (renewals)" },
  { value: 27.7, suffix: "%", label: "Average savings on renewals", decimal: true },
];

function CountUp({ target, suffix, decimal = false }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          setCount(current);
          if (current >= target) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display = decimal ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div ref={ref} style={{ fontFamily: "'Plus Jakarta Sans', monospace", fontSize: "clamp(32px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
      {display}{suffix}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 64, background: "#050510" }}>
      <div className="max-w-content mx-auto px-7">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="max-md:grid-cols-2">
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center">
                  <CountUp target={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 6, fontFamily: "'General Sans', sans-serif" }}>{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
