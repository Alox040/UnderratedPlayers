import type { LucideIcon } from "lucide-react";
import { Eye, Globe, Search, Target, TrendingUp, Users } from "lucide-react";

export const content = {
  brand: {
    name: "Underrated Players",
    logoLines: ["UNDERRATED", "PLAYERS"] as const,
  },
  links: {
    home: "/",
    playerSurvey: "/talent-bewerben",
    clubSurvey: "/vereine",
    services: "/leistungen",
    about: "/mitwirkung",
    participation: "/mitwirkung",
    contact: "/kontakt",
    privacy: "/datenschutz",
    legal: "/impressum",
  },
  header: {
    loginLabel: "Login",
    signupLabel: "Sign Up",
  },
  nav: [
    { href: "/", label: "HOME" },
    { href: "/talent-bewerben", label: "PLAYERS" },
    { href: "/vereine", label: "TEAMS" },
    { href: "/leistungen", label: "SCOUTING" },
    { href: "/mitwirkung", label: "MITWIRKUNG" },
  ] as const,
  footer: {
    platformTitle: "Platform",
    platformLinks: [
      { href: "/talent-bewerben", label: "Players" },
      { href: "/vereine", label: "Teams" },
      { href: "/leistungen", label: "Scouting" },
    ] as const,
    companyTitle: "Company",
    companyLinks: [{ href: "/mitwirkung", label: "Mitwirkung" }] as const,
    supportTitle: "Support",
    supportLinks: [
      { href: "/kontakt", label: "Contact" },
      { href: "/datenschutz", label: "Privacy Policy" },
    ] as const,
    legalLinks: [{ href: "/impressum", label: "Impressum" }] as const,
    copyrightSuffix: "All rights reserved.",
  },
} as const;

type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
  iconClass: string;
};

type MissionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClass: string;
};

export const homeContent: {
  hero: {
    titleLines: readonly { text: string; className: string }[];
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    kickerTitle: string;
    kickerLines: readonly { text: string; className: string }[];
    kickerSubtitle: { prefix: string; accent: string; suffix: string };
    imageAlt: string;
  };
  stats: readonly StatItem[];
  features: {
    talentsTitle: string;
    talentsCta: { label: string; href: string };
    players: readonly {
      name: string;
      age: number;
      country: string;
      position: string;
      rating: number;
      description: string;
      profileCtaLabel: string;
      profileHref: string;
    }[];
    ratingLabel: string;
    ageCountrySeparator: string;
    missionTitle: string;
    missionDescription: string;
    missionItems: readonly MissionItem[];
    missionCta: { label: string; href: string };
  };
  cta: {
    titleLines: readonly { text: string; className?: string }[];
    description: string;
    button: { label: string; href: string };
    imageAlt: string;
  };
} = {
  hero: {
    titleLines: [
      { text: "DISCOVER.", className: "text-white" },
      { text: "ANALYZE.", className: "text-brand-blue" },
      { text: "EMPOWER.", className: "text-brand-green" },
    ],
    description:
      "Underrated Players shines a light on the hidden talents of football and gives them the recognition they deserve.",
    primaryCta: {
      label: "Discover Players",
      href: content.links.playerSurvey,
    },
    secondaryCta: {
      label: "Learn More",
      href: content.links.services,
    },
    kickerTitle: "For",
    kickerLines: [
      { text: "Underrated", className: "text-white drop-shadow-md" },
      { text: "Players", className: "text-brand-green drop-shadow-md" },
    ],
    kickerSubtitle: {
      prefix: "From",
      accent: "Unseen",
      suffix: "To Signed",
    },
    imageAlt: "Stadium Night",
  },
  stats: [
    {
      icon: Users,
      value: "250+",
      label: "Players Analyzed",
      iconClass: "text-brand-green",
    },
    {
      icon: Eye,
      value: "50K+",
      label: "Profiles Viewed",
      iconClass: "text-brand-blue",
    },
    {
      icon: TrendingUp,
      value: "120+",
      label: "Talents Tracked",
      iconClass: "text-brand-green",
    },
    {
      icon: Globe,
      value: "20+",
      label: "Countries Covered",
      iconClass: "text-brand-blue",
    },
  ],
  features: {
    talentsTitle: "Latest Talents",
    talentsCta: {
      label: "View All Players",
      href: content.links.playerSurvey,
    },
    players: [
      {
        name: "ARDA GULER",
        age: 20,
        country: "TURKEY",
        position: "CAM",
        rating: 87,
        description:
          "Creative attacking midfielder with an exceptional vision of the game.",
        profileCtaLabel: "View Profile",
        profileHref: content.links.playerSurvey,
      },
      {
        name: "ELYE WAHI",
        age: 21,
        country: "FRANCE",
        position: "ST",
        rating: 85,
        description:
          "Fast, powerful striker with great depth and excellent finishing.",
        profileCtaLabel: "View Profile",
        profileHref: content.links.playerSurvey,
      },
      {
        name: "JAMAL MUSIALA",
        age: 20,
        country: "GERMANY",
        position: "CM",
        rating: 90,
        description:
          "Technical and intelligent midfielder, already decisive at the highest level.",
        profileCtaLabel: "View Profile",
        profileHref: content.links.playerSurvey,
      },
    ],
    ratingLabel: "Potential",
    ageCountrySeparator: "|",
    missionTitle: "Our Mission",
    missionDescription:
      "We believe talent has no limits. Our mission is to identify, analyze and promote underrated players who deserve more recognition.",
    missionItems: [
      {
        icon: Search,
        title: "In-Depth Analysis",
        description: "Detailed reports based on data and advanced scouting.",
        iconClass: "text-brand-green",
      },
      {
        icon: Users,
        title: "Passionate Community",
        description: "Join thousands of football fans who share the same vision.",
        iconClass: "text-brand-blue",
      },
      {
        icon: Target,
        title: "Real Opportunities",
        description:
          "Connecting talents with the right opportunities for their future.",
        iconClass: "text-brand-green",
      },
    ],
    missionCta: {
      label: "Learn More",
      href: content.links.services,
    },
  },
  cta: {
    titleLines: [
      { text: "Football Has No Borders." },
      { text: "Let's Take Talent Further.", className: "text-brand-green" },
    ],
    description:
      "Join the Underrated Players community and help shape the future of football.",
    button: {
      label: "Join The Community",
      href: content.links.clubSurvey,
    },
    imageAlt: "Glowing Earth",
  },
};
