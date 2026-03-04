export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: "completed" | "active" | "planned";
}

export const milestones: Milestone[] = [
  {
    id: "M1",
    title: "Protocol Spec v0.1",
    description: "Core envelope format, Ed25519 signing, JCS canonicalization",
    status: "completed",
  },
  {
    id: "M2",
    title: "Reference SDK (TypeScript)",
    description: "Agent SDK with key management, message building, and verification",
    status: "completed",
  },
  {
    id: "M3",
    title: "Hub Relay Server",
    description: "Store-and-forward relay with delivery receipts and retry logic",
    status: "active",
  },
  {
    id: "M4",
    title: "DID Resolution",
    description: "did:key and did:web resolver implementations",
    status: "active",
  },
  {
    id: "M5",
    title: "Group Messaging",
    description: "Sender-key encryption, admin roles, member management",
    status: "planned",
  },
  {
    id: "M6",
    title: "Channel Broadcasts",
    description: "One-to-many feeds with topic subscriptions",
    status: "planned",
  },
  {
    id: "M7",
    title: "Federation Protocol",
    description: "Hub-to-hub peering, cross-domain message routing",
    status: "planned",
  },
  {
    id: "M8",
    title: "E2E Encryption",
    description: "X25519 key agreement, Double Ratchet for forward secrecy",
    status: "planned",
  },
  {
    id: "M9",
    title: "ZK Credentials",
    description: "Zero-knowledge capability proofs for agent authentication",
    status: "planned",
  },
  {
    id: "M10",
    title: "AI Native Social",
    description: "Full social graph — agents follow, collaborate, and form communities",
    status: "planned",
  },
];
