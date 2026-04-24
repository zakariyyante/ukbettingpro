import { BRAND } from "../config/brand";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Casino logo">
        <defs>
          <linearGradient id="logoMark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary-2)"/>
            <stop offset="50%" stopColor="var(--accent)"/>
            <stop offset="100%" stopColor="var(--primary)"/>
          </linearGradient>
          <linearGradient id="logoEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)"/>
            <stop offset="100%" stopColor="var(--primary)"/>
          </linearGradient>
        </defs>
        {/* Card-like frame */}
        <rect x="5" y="6" width="28" height="26" rx="6" fill="#071a34" stroke="url(#logoEdge)" strokeWidth="1.5"/>

        {/* Chip ring */}
        <circle cx="19" cy="18" r="7.6" fill="none" stroke="url(#logoMark)" strokeWidth="2.2"/>
        <circle cx="19" cy="18" r="4.7" fill="url(#logoMark)" opacity="0.22"/>

        {/* Simple spade pip */}
        <path
          d="M19 12.1c2.7 2.5 5.2 4.6 5.2 6.7 0 1.6-1.2 2.9-2.9 2.9-1 0-1.9-.4-2.4-1.1.1 1 .8 1.9 1.6 2.4H16.5c.9-.5 1.5-1.4 1.6-2.4-.6.7-1.5 1.1-2.5 1.1-1.7 0-2.9-1.3-2.9-2.9 0-2.1 2.5-4.2 5.3-6.7Z"
          fill="url(#logoMark)"
        />

        {/* Accent notch */}
        <path d="M12 28.8h14" stroke="url(#logoEdge)" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      </svg>
      <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-[color:var(--foreground)] leading-none">
        {BRAND.name}
      </span>
    </div>
  );
}
