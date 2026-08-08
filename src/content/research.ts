export const researchAreas = [
  {
    number: "01",
    title: "Interval Adjoint Significance Analysis",
    summary:
      "A framework for estimating and bounding the significance of neural-network components using interval tangent and adjoint information.",
    topics: ["Interval arithmetic", "Adjoint methods", "Sensitivity analysis"],
  },
  {
    number: "02",
    title: "Structured neural-network pruning",
    summary:
      "Using significance information to identify neurons or channels that can be removed while retaining useful model behavior.",
    topics: ["CNNs", "VGG", "ResNet", "Model efficiency"],
  },
  {
    number: "03",
    title: "Gradient-aware retraining",
    summary:
      "Exploring bias compensation and Sobolev-style objectives that match model outputs and selected input derivatives after pruning.",
    topics: ["Higher-order derivatives", "PyTorch", "Fine-tuning"],
  },
] as const;

export const researchThemes = [
  "Automatic differentiation",
  "Scientific computing",
  "Interval arithmetic",
  "Sensitivity analysis",
  "Deep learning",
  "Neural-network pruning",
  "High-performance computing",
  "Research software engineering",
] as const;
