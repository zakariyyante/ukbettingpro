import { BRAND } from "../config/brand";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Casino logo">
        <defs>
          <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary-2)"/>
            <stop offset="50%" stopColor="var(--accent)"/>
            <stop offset="100%" stopColor="var(--primary)"/>
          </linearGradient>
          <linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)"/>
            <stop offset="100%" stopColor="var(--primary)"/>
          </linearGradient>
        </defs>
        {/* Rounded chip frame */}
        <rect x="5" y="5" width="28" height="28" rx="7" fill="#071226" stroke="url(#logoBlue)" strokeWidth="1.5"/>
        <rect x="9" y="9" width="20" height="20" rx="5" fill="none" stroke="url(#logoCyan)" strokeWidth="1" opacity="0.7"/>
        {/* Simple card / ticket mark (different silhouette) */}
        <path
          d="M13 15.5c0-1.4 1.1-2.5 2.5-2.5h8c1.4 0 2.5 1.1 2.5 2.5v6.8c0 1.4-1.1 2.5-2.5 2.5h-8c-1.4 0-2.5-1.1-2.5-2.5v-1.1c1.2-.3 2.1-1.4 2.1-2.7s-.9-2.4-2.1-2.7v-1.1Z"
          fill="url(#logoBlue)"
          opacity="0.95"
        />
        <path d="M18 14.8h6.8" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.45" strokeLinecap="round"/>
        <path d="M18 24.1h6.8" stroke="#F8FAFC" strokeWidth="1.2" opacity="0.45" strokeLinecap="round"/>
        {/* Accent spark */}
        <path d="M25.5 10.8l.9 1.9 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9.9-1.9Z" fill="url(#logoCyan)" opacity="0.9"/>
      </svg>
      <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-[color:var(--foreground)] leading-none">
        {BRAND.name}
      </span>
    </div>
  );
}
