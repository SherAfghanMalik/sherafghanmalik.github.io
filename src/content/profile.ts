export const profile = {
  name: "Sher Afghan Malik",
  initials: "SAM",
  headline: "Scientific Computing · Automatic Differentiation · Machine Learning",
  positioning: "Researcher and software engineer working across numerical methods, efficient machine learning, and high-performance scientific software.",
  status: "Doctoral researcher in Computer Science at RWTH Aachen University, completing the doctoral examination process.",
  location: "Aachen, Germany",
  intro: "I implement mathematical and machine-learning methods as reliable research software—from C++ automatic differentiation and interval algorithms to PyTorch pruning studies on GPU/HPC systems.",
  biography: "My work bridges scientific computing, automatic differentiation, and machine learning. I develop derivative-based methods for understanding neural networks, implement them in C++ and Python, and evaluate them through reproducible GPU and HPC workflows.",
  dissertation: "Interval Adjoint Significance Analysis",
  doctoralStart: "2018",
  supervisor: "Prof. Dr. Uwe Naumann",
  institution: "RWTH Aachen University",
  site: "https://sherafghanmalik.com",
  email: "SherAfghanMalik@live.com",
  portrait: "/images/sher-afghan-malik.webp",
} as const;

export const quickFacts = [
  { label: "Doctoral research", value: "RWTH Aachen · since 2018" },
  { label: "Core contribution", value: "Interval Adjoint Significance Analysis" },
  { label: "Engineering", value: "C++ · Python · PyTorch" },
  { label: "Compute", value: "Linux · Slurm · GPU/HPC" },
] as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Experience", href: "/experience/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/#contact" },
] as const;
