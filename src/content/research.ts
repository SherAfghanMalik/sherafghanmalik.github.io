export const researchAreas = [
  { number: "01", title: "Automatic Differentiation", summary: "Forward/tangent and reverse/adjoint modes for efficiently computing sensitivities in numerical programs and neural networks.", topics: ["dco/c++", "Higher-order derivatives", "C++"] },
  { number: "02", title: "Interval Adjoint Significance Analysis", summary: "Interval-valued tangent and adjoint propagation for estimating how strongly neurons or channels can influence a model's behavior.", topics: ["IASA", "Interval arithmetic", "Sensitivity analysis"] },
  { number: "03", title: "Structured Neural-Network Pruning", summary: "Derivative-informed ranking of neurons and CNN channels to produce smaller models with practical structured reductions.", topics: ["MLPs", "VGG-16", "ResNet-56", "PyTorch"] },
  { number: "04", title: "Scientific Computing & HPC", summary: "Reproducible numerical and machine-learning experiments on Linux GPU clusters using Slurm, job automation, and model-exchange tooling.", topics: ["GPU", "Slurm", "ONNX", "Reproducibility"] },
] as const;

export const researchProcess = [
  { step: "Input domain", detail: "Represent ranges or uncertainty in the network input." },
  { step: "Interval propagation", detail: "Propagate activation intervals through the model." },
  { step: "Tangent / adjoint", detail: "Compute interval derivative information in forward or reverse mode." },
  { step: "Significance ranking", detail: "Estimate bounded influence for neurons or channels." },
  { step: "Structured pruning", detail: "Remove lower-significance model components." },
  { step: "Optional retraining", detail: "Use bias augmentation and Sobolev-style gradient matching." },
] as const;
