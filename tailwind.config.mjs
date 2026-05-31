/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D2A6E",
          light: "#4A47A3",
          lighter: "#EEEDFA",
        },
        accent: {
          DEFAULT: "#5B7FFF",
          hover: "#4A6AE5",
          light: "#EEF2FF",
          violet: "#A78BFA",
        },
        "text-primary": "#0C0C0E",
        "text-secondary": "#5C5C6E",
        "text-tertiary": "#8B8B9E",
        border: "#E2E2EA",
        surface: {
          raised: "#F6F6F9",
          base: "#FFFFFF",
        },
        dark: {
          bg: "#050510",
          surface: "#0d0d1a",
        },
        success: {
          DEFAULT: "#16A34A",
          light: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#D97706",
          light: "#FFFBEB",
        },
        danger: {
          DEFAULT: "#DC2626",
          light: "#FEF2F2",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"General Sans"', "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(12,12,14,0.04)",
        md: "0 2px 8px rgba(12,12,14,0.06), 0 1px 2px rgba(12,12,14,0.04)",
        lg: "0 8px 24px rgba(12,12,14,0.08), 0 2px 8px rgba(12,12,14,0.04)",
        focus: "0 0 0 3px rgba(45,42,110,0.15)",
      },
      maxWidth: {
        content: "1140px",
        prose: "680px",
      },
      animation: {
        "gradient-shift": "gs 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        orb1: "orb1 10s ease-in-out infinite",
        orb2: "orb2 13s ease-in-out infinite",
        orb3: "orb3 16s ease-in-out infinite",
        "grid-pulse": "gridPulse 6s ease-in-out infinite",
        "mesh-shift": "meshShift 20s ease-in-out infinite",
        "border-spin": "borderSpin 5s linear infinite",
        "beam-rotate": "beamRotate 30s linear infinite",
        "rise-up": "riseUp 3s ease-in infinite",
        streak: "streak 9s linear infinite",
        "node-float": "nodeFloat 5s ease-in-out infinite",
        "float-card": "floatCard 6s ease-in-out infinite",
        "count-up": "countUp 1.5s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        gs: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseDot: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        orb1: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.1)" },
          "66%": { transform: "translate(-20px,15px) scale(0.95)" },
        },
        orb2: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(-25px,30px) scale(0.9)" },
          "66%": { transform: "translate(35px,-10px) scale(1.05)" },
        },
        orb3: {
          "0%,100%": { transform: "translate(0,0) scale(1) rotate(0deg)" },
          "25%": { transform: "translate(40px,20px) scale(1.15) rotate(5deg)" },
          "50%": {
            transform: "translate(-30px,40px) scale(0.85) rotate(-3deg)",
          },
          "75%": {
            transform: "translate(20px,-30px) scale(1.05) rotate(2deg)",
          },
        },
        gridPulse: {
          "0%,100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        meshShift: {
          "0%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        borderSpin: {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        beamRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        riseUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-80px)", opacity: "0" },
        },
        streak: {
          "0%": {
            transform: "translateX(-100%) translateY(100%)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateX(200%) translateY(-200%)",
            opacity: "0",
          },
        },
        nodeFloat: {
          "0%,100%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(8px,-12px)" },
          "50%": { transform: "translate(-5px,8px)" },
          "75%": { transform: "translate(12px,5px)" },
        },
        floatCard: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
