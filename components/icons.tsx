type IconProps = {
  name: "monitor" | "code" | "shield" | "lock" | "spark" | "mail" | "phone" | "globe";
  className?: string;
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    className
  };

  switch (name) {
    case "monitor":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case "code":
      return (
        <svg {...common} aria-hidden="true">
          <path d="m9 8-4 4 4 4" />
          <path d="m15 8 4 4-4 4" />
          <path d="m13 5-2 14" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.7 1.7 3.8-4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden="true">
          <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
  }
}
