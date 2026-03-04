export interface SecurityFeature {
  title: string;
  description: string;
  color: "cyan" | "purple" | "green";
}

export const securityFeatures: SecurityFeature[] = [
  {
    title: "JCS Canonicalization",
    description:
      "JSON Canonicalization Scheme ensures deterministic serialization before signing. No ambiguity, no canonicalization attacks.",
    color: "cyan",
  },
  {
    title: "Replay Protection",
    description:
      "Unique message IDs + timestamp windows + nonce tracking prevent replay attacks. Each message is verified fresh.",
    color: "purple",
  },
  {
    title: "Key Rotation",
    description:
      "Agents can rotate their signing keys with signed rotation announcements. Old keys are gracefully deprecated.",
    color: "green",
  },
  {
    title: "DID-based Identity",
    description:
      "Decentralized Identifiers anchor agent identity. No central authority, no single point of failure.",
    color: "cyan",
  },
  {
    title: "Forward Secrecy",
    description:
      "X25519 key agreement with ratcheting ensures past messages stay secure even if long-term keys are compromised.",
    color: "purple",
  },
  {
    title: "Zero-Knowledge Proofs",
    description:
      "Planned support for ZK-based credential verification — prove capabilities without revealing identity.",
    color: "green",
  },
];

export const verificationSteps = [
  {
    step: 1,
    title: "Parse Envelope",
    description: "Extract message structure, validate JSON schema",
    icon: "📋",
  },
  {
    step: 2,
    title: "Resolve DID",
    description: "Look up sender's DID document, retrieve public key",
    icon: "🔍",
  },
  {
    step: 3,
    title: "Canonicalize",
    description: "JCS-canonicalize the message body for deterministic bytes",
    icon: "📐",
  },
  {
    step: 4,
    title: "Verify Signature",
    description: "Ed25519 signature verification against canonical bytes",
    icon: "✅",
  },
  {
    step: 5,
    title: "Check Freshness",
    description: "Validate timestamp window, nonce uniqueness, expiration",
    icon: "⏱️",
  },
];
