'use client';

import type { KeyboardEvent, MouseEvent } from "react";
import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  isOnline?: boolean;
}

export default function CasinoCard({ casino, rank, isOnline = false }: CasinoCardProps) {
  const isFeaturedLayout =
    casino.name === "Barz" || casino.name === "Spinland" || casino.name === "Karamba";

  const handleCasinoClick = () => {
    if (casino.isMobile) {
      track('Casino Click', {
        casino: casino.name
      });
    }
  };
  const handleCardClick = () => {
    handleCasinoClick();
    window.open(casino.url, '_blank', 'noopener,noreferrer');
  };
  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image 
          src={casino.logo} 
          alt={casino.name} 
          width={260} 
          height={180} 
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  return (
    <article
      className="group relative overflow-hidden casino-card-bg rounded-2xl p-5 shadow-xl transition-all duration-300 cursor-pointer border border-[#020A16] hover:border-[#020A16] casino-glow gold-shimmer"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#020A16] rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#020A16] rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#020A16] rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#020A16] rounded-br-2xl" />

      {isOnline && casino.badge && (
        <span className="absolute top-0 left-0 rounded-br-xl rounded-tl-2xl px-3 py-1.5 text-[11px] font-extrabold bg-gradient-to-r from-[color:var(--primary-2)] to-[color:var(--accent)] text-[color:var(--foreground)] shadow-lg">
          {casino.badge}
        </span>
      )}

      {isFeaturedLayout ? (
        <div className="grid grid-cols-[1.15fr,0.85fr] gap-4 sm:gap-6 items-stretch">
          <div className="relative pr-4 sm:pr-6">
            <div className="absolute top-0 right-0 h-full w-px bg-[#020A16]" />
            <div className="flex flex-col items-center justify-center h-full min-h-[170px] sm:min-h-[200px]">
              <div className="w-full max-w-[280px] h-20 sm:h-24 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                {renderLogo()}
              </div>
              <div className="mt-4 text-[color:var(--foreground)] text-base tracking-tight">★★★★★</div>
              <div className="mt-2 text-4xl sm:text-5xl font-extrabold text-[color:var(--foreground)]">
                {casino.rating.toFixed(1)}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center py-2">
            <div className="text-base sm:text-lg font-semibold text-[color:var(--foreground)]/80 leading-snug">
              {casino.bonus}
            </div>
            <a
              href={casino.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                event.stopPropagation();
                handleCasinoClick();
              }}
              className="mt-5 inline-flex items-center justify-center rounded-full px-10 sm:px-12 py-4.5 sm:py-6 text-base sm:text-xl font-extrabold uppercase tracking-wide text-[#020A16] bg-gradient-to-b from-[#f8e7a8] to-[#d4a60a] shadow-[0_0_0_1px_rgba(248,231,168,0.35),0_10px_35px_rgba(0,0,0,0.35)] hover:opacity-95 transition-opacity"
            >
              Play Now
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="w-40 h-28 sm:w-48 sm:h-32 flex items-start justify-start [&>svg]:w-full [&>svg]:h-full">
              {renderLogo()}
            </div>
            <div className="text-right">
              <div className="gold-text text-3xl sm:text-4xl font-extrabold leading-none">
                {casino.rating.toFixed(1)}
              </div>
              <div className="text-[color:var(--foreground)] text-sm tracking-tight">★★★★★</div>
            </div>
          </div>

          <div className="text-center mb-4 rounded-xl bg-gradient-to-r from-[color:var(--muted)]/35 via-[color:var(--muted)]/55 to-[color:var(--muted)]/35 border border-[#020A16] px-4 py-3">
            <div className="text-base sm:text-lg font-extrabold text-[color:var(--foreground)] tracking-tight">
              {casino.bonus}
            </div>
          </div>

          <a
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
              handleCasinoClick();
            }}
            className="block w-full bg-gradient-to-r from-[color:var(--primary-2)] via-[color:var(--accent)] to-[color:var(--primary)] text-[color:var(--foreground)] font-extrabold py-4 px-6 rounded-2xl text-base sm:text-lg uppercase shadow-lg transition-all duration-300 hover:opacity-95 flex items-center justify-center gap-2 tracking-wide"
          >
            Play Now
          </a>
          <div className="mt-2 text-center text-[11px] text-[color:var(--foreground)]/55">
            T&amp;Cs apply.
          </div>
        </>
      )}
    </article>
  );
}
