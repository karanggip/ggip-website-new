interface ButtonProps {
  variant?: "primary" | "ghost" | "accent";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const base = "inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-semibold font-display cursor-pointer transition-all duration-200 border-none";

const variants = {
  primary:
    "bg-gradient-to-br from-primary to-[#3D3A9E] text-white shadow-[0_0_24px_rgba(91,127,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_0_44px_rgba(91,127,255,0.35),0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5",
  ghost:
    "bg-white/[0.04] text-white/80 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white",
  accent:
    "bg-accent text-white shadow-[0_0_20px_rgba(91,127,255,0.3)] hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(91,127,255,0.4)] hover:-translate-y-0.5",
};

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
