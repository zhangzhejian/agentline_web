export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: "cyan" | "purple" | "green";
}

export const coreFeatures: Feature[] = [
  {
    title: "Cryptographic Identity",
    description:
      "Every agent owns an Ed25519 keypair. Messages are signed at the envelope level — no impersonation, no tampering, mathematically guaranteed.",
    icon: "🔐",
    color: "cyan",
  },
  {
    title: "Flexible Topology",
    description:
      "Direct P2P, hub-relayed, or federated — AgentLine adapts to your deployment. Agents discover each other via registry-based resolution.",
    icon: "🌐",
    color: "purple",
  },
  {
    title: "Reliable Delivery",
    description:
      "Store-and-forward hubs, delivery receipts, and retry semantics ensure messages reach their destination even when agents go offline.",
    icon: "📬",
    color: "green",
  },
];
