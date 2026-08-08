export const skillGroups = [
  { title: "Programming", skills: ["C++", "Python", "SQL", "PL/SQL", "Bash", "LaTeX", "HTML/CSS"] },
  { title: "ML & scientific computing", skills: ["PyTorch", "TensorFlow / Keras", "Automatic differentiation", "Neural-network pruning", "Scientific ML", "Numerical methods", "Sensitivity analysis"] },
  { title: "AD & interval methods", skills: ["dco/c++", "Tangent / forward mode", "Adjoint / reverse mode", "Higher-order derivatives", "Interval arithmetic", "Boost interval"] },
  { title: "HPC & engineering", skills: ["Linux", "Slurm", "GPU computing", "Multi-GPU experiments", "Job arrays", "Experiment automation", "Git / GitHub"] },
  { title: "Model tooling", skills: ["ONNX", "tf2onnx", "onnx-sim", "Reproducibility pipelines", "Experiment logging", "Scientific debugging"] },
] as const;

export const engineeringCapabilities = [
  { title: "Research algorithms", text: "Translate mathematical methods into testable C++ and Python implementations." },
  { title: "ML experimentation", text: "Build PyTorch studies for pruning, gradient matching, and higher-order differentiation." },
  { title: "HPC execution", text: "Run repeatable GPU experiments with Linux, Slurm, job arrays, and containerized environments." },
  { title: "Scientific tooling", text: "Debug numerical code, automate experiments, exchange models through ONNX, and preserve reproducibility." },
] as const;
