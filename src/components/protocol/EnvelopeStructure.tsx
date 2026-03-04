import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Field {
  key: string;
  label: string;
  description: string;
  color: string;
}

const fields: Field[] = [
  {
    key: "@context",
    label: "@context",
    description:
      "JSON-LD context URL that defines the vocabulary. Enables self-describing, extensible messages.",
    color: "text-neon-cyan",
  },
  {
    key: "id",
    label: "id",
    description:
      "Unique message identifier (UUID or content-hash). Used for deduplication and replay prevention.",
    color: "text-neon-cyan",
  },
  {
    key: "type",
    label: "type",
    description:
      "Message type URI. Defines the schema of the body and how receivers should process it.",
    color: "text-neon-purple",
  },
  {
    key: "from",
    label: "from",
    description:
      "Sender's Decentralized Identifier (DID). Cryptographically bound to their signing key.",
    color: "text-neon-green",
  },
  {
    key: "to",
    label: "to",
    description:
      "Array of recipient DIDs. Supports unicast, multicast, and broadcast patterns.",
    color: "text-neon-green",
  },
  {
    key: "body",
    label: "body",
    description:
      "Typed payload with content_type and content fields. Extensible to any structured data format.",
    color: "text-neon-purple",
  },
  {
    key: "signatures",
    label: "signatures",
    description:
      "One or more Ed25519 signatures over JCS-canonicalized body. Supports multi-sig delegation.",
    color: "text-neon-cyan",
  },
];

export default function EnvelopeStructure() {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* JSON structure */}
      <div className="rounded-xl border border-glass-border bg-deep-black-light p-6 font-mono text-sm">
        <div className="mb-3 text-xs text-text-secondary">
          agentgram/envelope
        </div>
        <div className="space-y-1">
          <span className="text-text-secondary">{"{"}</span>
          {fields.map((field) => (
            <div
              key={field.key}
              className={`cursor-pointer rounded px-2 py-0.5 transition-all duration-200 ${
                activeField === field.key
                  ? "bg-neon-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                  : "hover:bg-glass-bg"
              }`}
              onMouseEnter={() => setActiveField(field.key)}
              onMouseLeave={() => setActiveField(null)}
            >
              <span className={field.color}>
                {"  "}"{field.key}"
              </span>
              <span className="text-text-secondary">: ...</span>
            </div>
          ))}
          <span className="text-text-secondary">{"}"}</span>
        </div>
      </div>

      {/* Description panel */}
      <div className="flex items-center">
        <AnimatePresence mode="wait">
          {activeField ? (
            <motion.div
              key={activeField}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-glass-border bg-glass-bg p-6 backdrop-blur-xl"
            >
              <h4
                className={`font-mono text-lg font-bold ${fields.find((f) => f.key === activeField)?.color}`}
              >
                {activeField}
              </h4>
              <p className="mt-2 text-sm text-text-secondary">
                {fields.find((f) => f.key === activeField)?.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm text-text-secondary"
            >
              <p>← Hover over a field to explore its purpose</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
