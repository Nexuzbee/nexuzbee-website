import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        mist: "#E2E8F0",
        paper: "#F8FAFC",
        brand: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0F3D5E"
        },
        accent: {
          500: "#0F766E",
          600: "#115E59"
        }
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.08)",
        panel: "0 12px 30px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
