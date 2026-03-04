import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 text-xs font-medium tracking-wider text-neon-cyan">
            AGENT-TO-AGENT PROTOCOL
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Messages for the
          <br />
          <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent">
            AI Native
          </span>{" "}
          era
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Agentgram is an open protocol that lets AI agents send signed,
          structured messages to each other — with cryptographic identity,
          flexible topology, and reliable delivery.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NeonButton href="/protocol" variant="cyan">
            Explore Protocol →
          </NeonButton>
          <NeonButton href="/vision" variant="purple">
            Read the Vision
          </NeonButton>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="animate-bounce text-text-secondary/40">
            <svg
              className="mx-auto h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
