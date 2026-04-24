import Logo from './Logo';
import Image from "next/image";
import { BRAND } from "../config/brand";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[color:var(--surface-1)] border-t border-[#020A16] py-6 sm:py-8 lg:py-12"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Logo />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h5 className="text-blue-200/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Quick Links</h5>
            <ul className="space-y-1 sm:space-y-2 text-blue-100/40 text-xs sm:text-sm">
              <li>
                <a href="/" className="hover:text-[color:var(--accent)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#casinos" className="hover:text-[color:var(--accent)] transition-colors">
                  Casinos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-200/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Legal</h5>
            <ul className="space-y-1 sm:space-y-2 text-blue-100/40 text-xs sm:text-sm">
              <li>
                <a href="/privacy" className="hover:text-[color:var(--accent)] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[color:var(--accent)] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[color:var(--accent)] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-blue-200/80 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Disclaimer</h5>
            <p className="text-blue-100/40 text-xs sm:text-sm leading-relaxed">
              We publish independent comparisons and editorial content. All listed casinos are regulated by the UK Gambling Commission. Always check terms with the operator
              before you play. Gambling should be fun. That's why you set limits and never stake more than you can afford to
              lose.
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-10 flex flex-col items-center gap-3">
          <p className="text-[color:var(--foreground)]/75 text-xs sm:text-sm uppercase tracking-widest font-semibold">
            Play Responsibly
          </p>
          <div className="w-full max-w-4xl rounded-2xl bg-[color:var(--muted)]/30 border border-[#020A16] px-4 py-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-3 sm:gap-5">
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit BeGambleAware"
                className="justify-self-center hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/gamble-aware-logo.svg"
                  alt="GambleAware"
                  width={320}
                  height={56}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GamCare"
                className="justify-self-center hover:opacity-90 transition-opacity"
              >
                <Image src="/cam-care-logo.svg" alt="GamCare" width={220} height={48} className="h-10 w-auto" />
              </a>
              <a
                href="https://www.gamstop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GAMSTOP"
                className="justify-self-center hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/gamstop-vector-logo.svg"
                  alt="GAMSTOP"
                  width={200}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <div className="justify-self-center">
                <Image src="/18pluss.png" alt="18+ only" width={64} height={64} className="h-10 w-auto" />
              </div>
            </div>
          </div>
          <p className="text-[color:var(--foreground)]/70 text-[11px] sm:text-xs text-center max-w-4xl leading-relaxed mt-1">
            New customers only. 18+. T&amp;Cs apply.{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              BeGambleAware.org
            </a>
            . National Gambling Helpline: 0808 8020 133.
          </p>
        </div>

        <div className="border-t border-[#020A16] pt-4 sm:pt-6 text-center mt-6">
          <p className="text-[color:var(--foreground)]/55 text-xs sm:text-sm">
            &copy; {BRAND.year} {BRAND.domain}. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
