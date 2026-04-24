import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import MobileCasinoModal from './components/MobileCasinoModal';
import Footer from "./components/Footer";
import { casinos } from './data/casinos';
import { BRAND } from "./config/brand";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  const hasGclid = !!gclid;

  const isOnline = hasGclid;
  const year = BRAND.year;

  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);
  const regularCasinos = casinos.filter(casino => !casino.isMobile);
  
  return (
    <div className="min-h-screen bg-[color:var(--background)] felt-texture">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />
      
      <Header />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 text-center">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-[color:var(--surface-1)]/70 to-transparent px-5 sm:px-10 py-10 sm:py-14">
          <p className="text-[color:var(--foreground)]/70 text-xs sm:text-sm tracking-wide">
            Updated for {year} • UK-focused comparisons
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[color:var(--foreground)] leading-tight">
            Find the UK&apos;s best online casino picks
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[color:var(--foreground)]/65 max-w-2xl mx-auto leading-relaxed">
            A straightforward guide to licensed UK platforms — with impartial ratings, bonus highlights, and safer-gambling signposting.
          </p>
        </div>
      </section>

      {/* Casino Cards Section */}
      <section id="casinos" className="bg-[color:var(--surface-1)]/10 border-y border-white/5">
        <div className="container mx-auto px-4 pb-16 pt-10 sm:pt-12">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[color:var(--foreground)] tracking-wide">
              Leading UK casino offers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[color:var(--foreground)]/65">
              Hand-picked options with clear pros, bonuses, and payout notes — refreshed regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {regularCasinos.map((casino, index) => (
              <CasinoCard
                key={casino.id}
                casino={casino}
                rank={index + 1}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 lg:p-6 max-w-6xl mx-auto">
            <p className="text-[color:var(--foreground)]/70 text-xs sm:text-sm text-center">
              <strong className="text-[color:var(--foreground)]">New customers only.</strong> 18+. T&amp;Cs apply. BeGambleAware.org. Please play responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[color:var(--surface-1)]/50 py-8 sm:py-12 lg:py-16 border-y border-[#020A16]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[color:var(--foreground)] mb-4 sm:mb-6 lg:mb-8 text-center">
            How We Rank UK Casinos
          </h3>
          
          <div className="casino-card-bg rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-[#020A16]">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[color:var(--foreground)] mb-3 sm:mb-4">
              What Sets Our Reviews Apart?
            </h4>
            <p className="text-[color:var(--foreground)]/65 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Our independent editorial team rigorously evaluates every platform so UK players can
              make confident, informed choices. Each casino is scored across licensing, game variety,
              promotions, payment options, and customer care.
            </p>
            <ul className="space-y-2.5 text-[color:var(--foreground)]/65 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="text-[color:var(--foreground)] mt-0.5">♠</span>
                <span>Every listed platform holds full UKGC certification</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[color:var(--foreground)] mt-0.5">♦</span>
                <span>We independently audit security standards and RNG fairness</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[color:var(--foreground)] mt-0.5">♣</span>
                <span>Our editorial ratings are unbiased and commercially independent</span>
              </li>
            </ul>
          </div>

          <div id="guide" className="bg-[color:var(--card-bg)] rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#020A16] shadow-lg">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold gold-text mb-3 sm:mb-4">
              Responsible Gambling
            </h4>
            <p className="text-[color:var(--foreground)]/65 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Safer gambling is at the heart of everything we do. If you or someone you know needs
              support, confidential help is always available:
            </p>
            <ul className="space-y-2 text-[color:var(--foreground)]/65 text-sm sm:text-base">
              <li>• <strong className="text-[color:var(--foreground)]">BeGambleAware:</strong> Visit{" "}
                <a href="https://www.begambleaware.org" className="text-[color:var(--foreground)] underline decoration-[#020A16] underline-offset-2 hover:opacity-90">
                  begambleaware.org
                </a>
              </li>
              <li>• <strong className="text-[color:var(--foreground)]">GamCare:</strong> Call 0808 8020 133 or visit{" "}
                <a href="https://www.gamcare.org.uk" className="text-[color:var(--foreground)] underline decoration-[#020A16] underline-offset-2 hover:opacity-90">
                  gamcare.org.uk
                </a>
              </li>
              <li>• <strong className="text-[color:var(--foreground)]">National Gambling Helpline:</strong> 0808 8020 133</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
