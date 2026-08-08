export type Publication = {
  title: string;
  year: number;
  authors?: string;
  venue: string;
  details?: string;
  tags: readonly string[];
  links?: readonly { label: string; href: string }[];
};

export const featuredPublications: readonly Publication[] = [
  {
    title: "Interval Adjoint Significance Analysis for Neural Networks",
    authors: "Sher Afghan · Uwe Naumann",
    year: 2020,
    venue: "Computational Science — ICCS 2020",
    details: "LNCS 12139, pp. 365–378 · Springer International Publishing",
    tags: ["IASA", "Automatic differentiation", "Neural networks"],
    links: [
      { label: "DOI", href: "https://doi.org/10.1007/978-3-030-50420-5_27" },
      { label: "RWTH record", href: "https://publications.rwth-aachen.de/record/816737" },
    ],
  },
  {
    title: "Towards Sobolev Pruning",
    authors: "Neil Kichler · Sher Afghan · Uwe Naumann",
    year: 2024,
    venue: "Platform for Advanced Scientific Computing Conference (PASC24)",
    tags: ["Sobolev training", "Pruning", "Gradient matching"],
    links: [
      { label: "DOI", href: "https://doi.org/10.1145/3659914.3659915" },
      { label: "arXiv", href: "https://arxiv.org/abs/2312.03510" },
    ],
  },
] as const;

export const otherPublications: readonly Publication[] = [
  {
    title: "Structured Layerwise Pruning via Extended-Interval Activation- and Derivative-Based Significance Measures",
    authors: "Mansoor Ahmad · Sher Afghan Malik · Uwe Naumann · Ekkapot Charoenwanit",
    year: 2025,
    venue: "20th International Joint Symposium on Artificial Intelligence and Natural Language Processing (iSAI-NLP 2025)",
    tags: ["Structured pruning", "Extended intervals"],
    links: [{ label: "DOI", href: "https://doi.org/10.1109/iSAI-NLP66160.2025.11320543" }],
  },
  {
    title: "Neural networks assisted computational aero-acoustic analysis of an isolated tire",
    year: 2020,
    venue: "Proceedings of the Institution of Mechanical Engineers, Part D: Journal of Automobile Engineering",
    details: "Vol. 234, Issues 10–11, pp. 2561–2577",
    tags: ["Neural networks", "Computational engineering"],
    links: [{ label: "DOI", href: "https://doi.org/10.1177/0954407020915104" }],
  },
  {
    title: "Optimization of a 660 MWe Supercritical Power Plant Performance — A Case of Industry 4.0 in the Data-Driven Operational Management Part 1. Thermal Efficiency",
    year: 2020,
    venue: "Energies",
    details: "Vol. 13, Issue 21, Article 5592",
    tags: ["Optimization", "Data-driven engineering"],
    links: [
      { label: "DOI", href: "https://doi.org/10.3390/en13215592" },
      { label: "RWTH record", href: "https://publications.rwth-aachen.de/record/808647" },
    ],
  },
] as const;

export const earlierPublications: readonly Publication[] = [
  { title: "Computation Offloading: Is it practical and feasible?", year: 2017, venue: "The Journal of Bahria University Information and Communication Technologies", details: "Vol. 10", tags: ["Mobile computing", "Offloading"] },
  { title: "Effective ASCII-HEX Steganography for secure cloud", year: 2015, venue: "Technical Journal, University of Engineering and Technology Taxila", details: "Vol. 20, No. II", tags: ["Cloud security", "Steganography"] },
  { title: "A Security Model for SaaS in Cloud Computing", year: 2015, venue: "Technical Journal, University of Engineering and Technology Taxila", details: "Vol. 20, No. IV", tags: ["Cloud computing", "Security"] },
] as const;
