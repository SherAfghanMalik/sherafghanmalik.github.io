export type Experience = {
  period: string;
  role: string;
  organization: string;
  location?: string;
  summary: string;
  evidence: readonly string[];
  kind: "research" | "teaching" | "engineering";
};

export const experiences: readonly Experience[] = [
  {
    period: "2018 — doctoral examination process",
    role: "Doctoral Research",
    organization: "RWTH Aachen University / STCE",
    location: "Aachen, Germany",
    summary: "Doctoral work in scientific computing on interval adjoints, algorithmic differentiation, sensitivity analysis, and efficient neural networks. Thesis submitted; degree not yet awarded.",
    evidence: ["C++ and Python research implementations", "PyTorch pruning experiments", "GPU/HPC and Slurm workflows", "Reproducible experiment pipelines"],
    kind: "research",
  },
  {
    period: "2018",
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
