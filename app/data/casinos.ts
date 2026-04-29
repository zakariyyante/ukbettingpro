import { LogoKey } from "../components/CasinoLogos";

export interface Casino {
  /** auto-generated hash of name + index */
  id: string;
  name: string;
  logo: `/${string}` | LogoKey;
  /** auto-generated: 10.0 → 9.x descending */
  rating: number;
  /** fake social proof (3000–6000 range) */
  votes: number;
  /** ALL CAPS */
  bonus: string;
  /** affiliate tracking URL */
  url: string;
  /** auto-generated: first 3 only */
  badge?: "Best Bonus" | "Top Pick" | "Trending Now";
  /** true = shown in MobileCasinoModal only */
  isMobile?: boolean;
}

type CasinoRaw = {
  name: string;
  logo: `/${string}` | LogoKey;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
};

const topBadges: Array<NonNullable<Casino["badge"]>> = ["Best Bonus", "Top Pick", "Trending Now"];

const hashId = (input: string): string => {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return `c_${Math.abs(h).toString(36)}`;
};

// Raw casino data: do not set id/rating/badge manually.
const casinosRawData: CasinoRaw[] = [
  // Homepage grid (regular casinos)
  {
    name: "Barz",
    logo: "/barz.webp",
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48000&bid=1480",
    votes: 4872,
  },
  {
    name: "Spinland",
    logo: "/spinland.png",
    bonus: "100% UP TO £300 + 50 BONUS SPINS ON FIRST DEPOSIT",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48778&lpid=213&bid=1617&subid=Spinland-ST&clickid=",
    votes: 5231,
  },
  {
    name: "Karamba",
    logo: "/karamba.svg",
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://www.karamba.co.uk/lp/wo-300-spins?asys=cexp&affid=40838",
    votes: 3984,
  },

  // Mobile modal (only when ?gclid= present)
  {
    name: "odinfortune",
    logo: "/odinfortune.png",
    bonus: "300% UP TO €2000 + 150 FREE SPINS",
    url: "https://odinfortune.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=odinfortune",
    votes: 5872,
    isMobile: true
  },
  {
    name: "Westace",
    logo: "/westace.webp",
    bonus: "300% UP TO €2000 + 150 FREE SPINS",
    url: "https://daytonaspin.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=daytona",
    votes: 5872,
    isMobile: true
  },
  // {
  //   name: "DaytonaSpin",
  //   logo: "/daytonaspin.svg",
  //   bonus: "255% UP TO £4500 + 255 FREE SPINS",
  //   url: "https://daytonaspin.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=daytona",
  //   votes: 5872,
  //   isMobile: true
  // },
 
  
    {
      name: "Spinboss",
      logo: "/spinboss.webp",
      bonus: "400% up to 12750 GBP + 400 FREE SPINS:",
      url: "https://daytonaspin.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=daytona",
      votes: 5872,
      isMobile: true
    },
  {
    name: "Lolajack",
    logo: "/lolajack.webp",
    bonus: "400% UP TO €15,000 + 400 FREE SPINS",
    url: "https://daytonaspin.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=daytona",
    votes: 5872,
    isMobile: true
  },
  
  {
    name: "Lizaro",
    logo: "/lizaro.png",
    bonus: "200% up to £1000 + 250 FREE SPINS",
    url: "https://daytonaspin.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=daytona",
    votes: 5872,
    isMobile: true
  },

  {
    name: "X3Bet",
    logo: "/x3bet.svg",
    bonus: "100% UP TO €600 + 200 FREE SPINS",
    url: "https://x3bet.cowgramslp.live?sub_id_1=5nttr97thxorpm&utm_source=x3bet",
    votes: 5872,
    isMobile: true
  },

  // {
  //   name: "Basswin",
  //   logo: "/basswin.svg",
  //   bonus: "GET UP TO £3,000 + 300 FREE SPINS",
  //   url: "https://example-affiliate.com/?offer=basswin",
  //   votes: 5771,
  //   isMobile: true,
  // },
  // {
  //   name: "SpinShark",
  //   logo: "/spinshark.svg",
  //   bonus: "UP TO £900 BONUS + 150 FREE SPINS",
  //   url: "https://example-affiliate.com/?offer=spinshark",
  //   votes: 4622,
  //   isMobile: true,
  // },
];

export const casinos: Casino[] = casinosRawData.map((casino, index) => {
  const rating = Number((10 - index * 0.1).toFixed(1));
  return {
    ...casino,
    id: hashId(`${casino.name}:${index}`),
    rating,
    badge: index < 3 ? topBadges[index] : undefined,
  };
});

