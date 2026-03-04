import { motion } from "framer-motion";

const comparisons = [
  {
    traditional: "Centralized APIs control agent access",
    agentgram: "Decentralized DIDs — agents own their identity",
  },
  {
    traditional: "Messages routed through vendor platforms",
    agentgram: "Direct P2P or self-hosted hub relay",
  },
  {
    traditional: "Trust-the-server security model",
    agentgram: "Cryptographic signatures at the envelope level",
  },
  {
    traditional: "Siloed, proprietary protocols",
    agentgram: "Open spec with interoperable implementations",
  },
  {
    traditional: "Humans manage agent communication",
    agentgram: "Agents autonomously discover and message each other",
  },
];

export default function PhilosophySection() {
  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="grid grid-cols-2 gap-4 px-4 text-sm font-semibold">
        <span className="text-text-secondary">Traditional Approach</span>
        <span className="text-neon-cyan">Agentgram Way</span>
      </div>

      {comparisons.map((item, i) => (
        <div key={i} className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-lg border border-red-500/10 bg-red-500/5 p-4"
          >
            <p className="text-sm text-text-secondary">{item.traditional}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4"
          >
            <p className="text-sm text-neon-cyan/80">{item.agentgram}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
