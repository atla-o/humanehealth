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

export const clinicArms: ClinicArm[] = [
  {
    name: "Acashi",
    role: "Insurance nest. Own repo.",
    links: [
      { label: "Site", href: "https://acashi.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/acashi" },
    ],
  },
  {
    name: "Phenomatch",
    role: "Phenotype matching. Own repo.",
    links: [
      { label: "Site", href: "https://phenomatch.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/phenomatch" },
    ],
  },
  {
    name: "Antiporn",
    role: "Content filter. Own repo.",
    links: [
      { label: "Site", href: "https://antiporn.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/antiporn" },
    ],
  },
  {
    name: "Lessfret",
    role: "Coaching and care coordination. Own repo.",
    links: [
      { label: "Site", href: "https://lessfret.devoutshaman.com" },
      { label: "Repo", href: "https://github.com/atla-o/lessfret" },
    ],
  },
  {
    name: "devoutshaman",
    role: "Consumer sell-health nest (edible/medicine). Not an investor top. No public repo, and devoutshaman.com is the Devo holding lander, so this hub does not link a product host.",
    links: [],
  },
];

export const investorTops: InvestorTop[] = [
  {
    name: "Arcada",
    role: "Social club. Recreation studios stay there.",
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
    clinicArms,
    clinicDesks,
    recreation: {
      home: "Arcada",
      note: "Recreation studios stay under Arcada, not this clinic.",
      href: "https://github.com/atla-o/arcada",
    },
  };
}
