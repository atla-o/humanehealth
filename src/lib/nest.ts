export type OutboundLink = {
  label: string;
  href: string;
};

export type ClinicArm = {
  name: string;
  role: string;
  links: OutboundLink[];
};

export type InvestorTop = {
  name: string;
  role: string;
  links: OutboundLink[];
  here?: boolean;
};

export type ClinicDesk = {
  slug: string;
  name: string;
  summary: string;
  whenRequired: boolean;
};

/** Own-repo products. Not screens in this app. */
export const linkedProducts: ClinicArm[] = [
  {
    name: "Phenomatch",
    role: "Phenotype matching. Own repo. Not a screen here.",
    links: [
      { label: "Site", href: "https://phenomatch.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/phenomatch" },
    ],
  },
  {
    name: "Antiporn",
    role: "Content filter. Own repo. Not a screen here.",
    links: [
      { label: "Site", href: "https://antiporn.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/antiporn" },
    ],
  },
  {
    name: "Lessfret",
    role: "Coaching and care coordination. Own repo. Not a screen here.",
    links: [
      { label: "Site", href: "https://lessfret.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/lessfret" },
    ],
  },
];

/**
 * Nested under Humanehealth. Not investor tops and not this UI.
 * Acashi has its own repo. devoutshaman has no atla-o repo and no product host here.
 */
export const nested = [
  {
    name: "Acashi",
    role: "Insurance nest. Own repo. Not a peer top and not a screen in this app.",
    href: "https://github.com/atla-o/acashi",
  },
  {
    name: "devoutshaman",
    role: "Consumer sell-health nest (edible/medicine). Not a peer top and not a screen in this app. No atla-o/devoutshaman repo. devoutshaman.com is the Devo holding lander, not this product.",
    href: null,
  },
] as const;

export const investorTops: InvestorTop[] = [
  {
    name: "Arcada",
    role: "Social club. Recreation stays in that repo, not this one.",
    links: [{ label: "Repo", href: "https://github.com/atla-o/arcada" }],
  },
  {
    name: "Lightround",
    role: "Counterdecadence fund.",
    links: [
      { label: "Site", href: "https://lightround.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/lightround" },
    ],
  },
  {
    name: "Humanehealth",
    role: "This clinic network hub.",
    links: [{ label: "Repo", href: "https://github.com/atla-o/humanehealth" }],
    here: true,
  },
  {
    name: "Mattercircle",
    role: "Matter and factory hub.",
    links: [{ label: "Repo", href: "https://github.com/atla-o/mattercircle" }],
  },
];

export const clinicDesks: ClinicDesk[] = [
  {
    slug: "wellness",
    name: "Schedule wellness",
    summary: "Book a wellness visit on the clinic desk.",
    whenRequired: true,
  },
  {
    slug: "diagnostic",
    name: "Invasive diagnostic",
    summary: "Request an invasive diagnostic visit.",
    whenRequired: false,
  },
  {
    slug: "unnaturalfertility",
    name: "Unnaturalfertility",
    summary:
      "Clinic arm on this hub. Not an investor top and not its own holding.",
    whenRequired: false,
  },
  {
    slug: "cosmetic",
    name: "Cosmetic restoration",
    summary: "Request a cosmetic restoration visit.",
    whenRequired: false,
  },
  {
    slug: "stimulants",
    name: "Concentrated stimulants",
    summary:
      "Visit queue only. This desk does not list doses, sources, or preparation.",
    whenRequired: false,
  },
];

export function getDesk(slug: string): ClinicDesk | undefined {
  return clinicDesks.find((desk) => desk.slug === slug);
}

export function nestMap() {
  return {
    publisher: "atla-o",
    parent: "Devo Holdings",
    hub: "Humanehealth",
    investorTops,
    nested,
    linkedProducts,
    clinicDesks,
    notInThisUi: ["recreation", "Acashi", "devoutshaman"],
  };
}
