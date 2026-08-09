export type Experience = {
  period: string;
  role: string;
  organization: string;
  location?: string;
  summary: string;
  evidence: readonly string[];
  kind: "research" | "teaching" | "engineering";
  links?: readonly { label: string; href: string }[];
};

export const experiences: readonly Experience[] = [
  {
    period: "Oct 2018 — Present",
    role: "Doctoral Research",
    organization: "RWTH Aachen University / Software and Tools for Computational Engineering (STCE)",
    location: "Aachen, Germany",
    summary: "Research in scientific computing and machine learning centered on Interval Adjoint Significance Analysis (IASA), interval methods, algorithmic and automatic differentiation, and structured neural-network pruning. Thesis submitted; doctoral examination ongoing; degree not yet awarded.",
    evidence: ["C++ interval-analysis software with dco/c++ and Boost Interval", "Python, PyTorch, and TensorFlow/Keras research workflows", "ONNX-based model exchange", "Reproducible GPU/HPC experiments with Linux and Slurm"],
    kind: "research",
    links: [{ label: "Explore the research", href: "/research/" }, { label: "View publications", href: "/publications/" }],
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Technical Assistant",
    organization: "QCG Computer GmbH",
    location: "Eschweiler, Germany",
    summary: "Supported final configuration and technical testing before delivery.",
    evidence: ["Server-rack configuration", "BBU testing", "Size-O testing", "Final-delivery preparation and testing"],
    kind: "engineering",
  },
  {
    period: "Sep 2022 — Dec 2023",
    role: "Research Assistant (HiWi)",
    organization: "RWTH Aachen University / STCE",
    location: "Aachen, Germany",
    summary: "Developed and tested neural-network research workflows while supporting student research projects.",
    evidence: ["C++ and dco/c++ workflows", "ONNX export and import in Python", "PyTorch and TensorFlow model validation", "HPC training automation", "Support and supervision of bachelor's and master's research projects"],
    kind: "research",
  },
  {
    period: "May 2018 — Oct 2018",
    role: "Lecturer",
    organization: "Khwaja Fareed University of Engineering and Information Technology",
    location: "Rahim Yar Khan, Pakistan",
    summary: "University teaching in computer science.",
    evidence: ["Advanced Object-Oriented Programming"],
    kind: "teaching",
  },
  {
    period: "Feb 2017 — Apr 2018",
    role: "Lecturer",
    organization: "University of South Asia",
    location: "Lahore, Pakistan",
    summary: "Taught core undergraduate computer-science subjects.",
    evidence: ["Data Structures", "Artificial Intelligence", "Database"],
    kind: "teaching",
  },
  {
    period: "Aug 2015 — Feb 2017",
    role: "Lecturer",
    organization: "University of Management and Technology",
    location: "Lahore, Pakistan",
    summary: "Teaching across theoretical computer science, security, and data systems.",
    evidence: ["Theory of Automata", "Information Security", "Database"],
    kind: "teaching",
  },
  {
    period: "Mar 2014 — Aug 2015",
    role: "Software Engineer",
    organization: "CYAN Business Solution",
    summary: "Developed and maintained database-backed business software and reports.",
    evidence: ["Oracle Report Builder", "Oracle Form Builder", "Oracle RDBMS", "SQL and PL/SQL"],
    kind: "engineering",
  },
  {
    period: "Oct 2013 — Feb 2014",
    role: "Software Engineer",
    organization: "Sapphire Finishing Mills Ltd.",
    summary: "Worked on Oracle-based forms and operational reporting software.",
    evidence: ["Oracle Report Builder", "Oracle Form Builder"],
    kind: "engineering",
  },
] as const;

export const experienceSummary = [
  { label: "Doctoral research", detail: "Numerical methods, AD, pruning, and research software at RWTH/STCE" },
  { label: "University teaching", detail: "Algorithms, AI, databases, security, and object-oriented programming" },
  { label: "Software engineering", detail: "Historical Oracle, SQL, PL/SQL, forms, and reporting systems experience" },
] as const;
