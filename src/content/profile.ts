export const profile = {
  name: "Sher Afghan Malik",
  initials: "SAM",
  headline: "Scientific Computing · Algorithmic Differentiation · Machine Learning",
  positioning: "Researcher and software engineer working across numerical methods, efficient machine learning, and high-performance scientific software.",
  status: "Doctoral researcher in Computer Science at RWTH Aachen University, completing the doctoral examination process.",
  location: "Aachen, Germany",
  intro: "I implement mathematical and machine-learning methods as reliable research software—from C++ algorithmic differentiation and interval algorithms to reproducible PyTorch and TensorFlow/Keras studies.",
  biography: "My work bridges scientific computing, algorithmic differentiation, and machine learning. I develop derivative-based methods for understanding neural networks, implement them in C++ and Python, and evaluate them through reproducible computational experiments.",
  dissertation: "Interval Adjoint Significance Analysis",
  doctoralStart: "2018",
  supervisor: "Prof. Dr. Uwe Naumann",
  institution: "RWTH Aachen University",
  site: "https://sherafghanmalik.com",
  email: "sher@sherafghanmalik.com",
  portrait: "/images/WhatsApp Image 2026-08-08 at 04.33.19-Photoroom.png",
} as const;

export const quickFacts = [
  { label: "Doctoral research", value: "RWTH Aachen University · Doctoral Research" },
  { label: "Core contribution", value: "Interval Adjoint Significance Analysis" },
  { label: "Engineering", value: "C++ · Python · PyTorch / TensorFlow" },
  { label: "HPC & computing", value: "Linux · Windows · Slurm · GPU/HPC" },
] as const;

export const languages = [
  { language: "Urdu", proficiency: "Native" },
  { language: "English", proficiency: "Advanced" },
  { language: "German", proficiency: "Elementary proficiency (A2)" },
] as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Experience", href: "/experience/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/#contact" },
] as const;
