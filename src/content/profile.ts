export const profile = {
  name: "Sher Afghan Malik",
  initials: "SAM",
  headline: "Scientific Computing · Automatic Differentiation · Machine Learning",
  role: "Doctoral researcher at RWTH Aachen University",
  location: "Aachen, Germany",
  intro:
    "I develop numerical and machine-learning methods at the intersection of automatic differentiation, interval arithmetic, and efficient neural networks.",
  bio:
    "My work connects mathematical ideas with practical scientific software: from sensitivity analysis and interval methods to GPU experiments and reproducible machine-learning pipelines. I am completing doctoral research in Computer Science at RWTH Aachen University under the supervision of Prof. Dr. Uwe Naumann.",
  github: "https://github.com/SherAfghanMalik",
  site: "https://sherafghanmalik.com",
  dissertation: "Interval Adjoint Significance Analysis",
} as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/#contact" },
] as const;
