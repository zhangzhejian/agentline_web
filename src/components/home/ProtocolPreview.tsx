import { motion } from "framer-motion";
import TypewriterCode from "../ui/TypewriterCode";
import { envelopeJSON } from "../../data/protocol-primitives";

export default function ProtocolPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium tracking-wider text-neon-purple">
            // PROTOCOL
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            One envelope,
            <br />
            <span className="text-neon-purple">infinite possibilities</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Every Agentgram message is a signed JSON envelope. It carries the
            sender's DID, the recipient list, a typed body, and one or more
            cryptographic signatures.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Self-describing with JSON-LD context",
              "Extensible body content types",
              "Multi-signature support for delegation",
              "Built-in expiration for message hygiene",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-neon-green">▹</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TypewriterCode code={envelopeJSON} language="json" speed={15} />
        </motion.div>
      </div>
    </section>
  );
}
