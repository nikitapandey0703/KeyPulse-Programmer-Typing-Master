import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
  function FloatingCircle({ size, x, y, delay }) {
    return (
      <motion.div
        initial={{ x, y, opacity: 0.50 }}
        animate={{
          x: [x, x + 40, x - 30, x],
          y: [y, y - 60, y + 40, y],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="pointer-events-none absolute rounded-full blur-[60px]"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.05), transparent)",
        }}
      />
    );
  }
  return (
    <section className="w-full bg-[#071416] px-6  overflow-hidden">
      {/* Hero Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-full overflow-hidden rounded-3xl bg-[#081a1d]"
      >
        {/* Bottom White Glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-white/20 blur-[180px]"
        />

        {/* Teal Ambient Glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-[-120px] right-[-200px] h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[160px]"
        />
        {/* Floating White Gradient Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingCircle size={220} x={100} y={200} delay={0} />
          <FloatingCircle size={160} x={600} y={120} delay={2} />
          <FloatingCircle size={260} x={900} y={350} delay={4} />
          <FloatingCircle size={180} x={400} y={420} delay={1} />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3b40]/70 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative z-10 max-w-4xl px-10 py-24 md:px-20 md:py-32"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 text-sm tracking-wide text-teal-300 uppercase"
          >
            Welcome to Keypulse
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white"
          >
            Practice English & Code
            <span className="block text-teal-300">With Structured Clarity</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Keypulse helps you sharpen English grammar through factual problems
            and solve real-world coding snippets — organized by language and
            difficulty for focused practice.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home