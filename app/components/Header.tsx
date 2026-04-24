'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Casinos', href: '/#casinos' },
    { name: 'Reviews', href: '/#casinos' },
    { name: 'FAQ', href: '/#guide' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--background)]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[color:var(--foreground)]/75 hover:text-[color:var(--foreground)] transition-colors font-medium tracking-wide text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[color:var(--foreground)]/75 hover:text-[color:var(--foreground)] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-5 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[color:var(--foreground)]/75 hover:text-[color:var(--foreground)] transition-colors font-medium py-2.5 px-3 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
