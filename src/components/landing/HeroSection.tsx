import { motion } from "framer-motion";

const FairyLight = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 rounded-full bg-amber"
    style={{ left, top, boxShadow: "0 0 8px 2px hsl(var(--amber-glow) / 0.6)" }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: 2.5 + delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const fairyLights = [
  { delay: 0, left: "10%", top: "15%" },
  { delay: 0.8, left: "25%", top: "8%" },
  { delay: 1.5, left: "45%", top: "12%" },
  { delay: 0.3, left: "65%", top: "6%" },
  { delay: 1.2, left: "80%", top: "14%" },
  { delay: 0.6, left: "90%", top: "20%" },
  { delay: 1.8, left: "15%", top: "25%" },
  { delay: 0.4, left: "70%", top: "22%" },
  { delay: 1.0, left: "50%", top: "18%" },
  { delay: 2.0, left: "35%", top: "28%" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-grain">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, hsl(var(--primary) / 0.85) 0%, hsl(var(--mud)) 35%, hsl(var(--twilight)) 80%, hsl(var(--twilight)) 100%)`,
        }}
      />

      {/* Fairy lights */}
      {fairyLights.map((light, i) => (
        <FairyLight key={i} {...light} />
      ))}

      {/* Decorative bougainvillea accent — top corners */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0 0 Q60 30 40 80 Q20 60 0 100" fill="hsl(var(--primary) / 0.4)" />
          <path d="M0 0 Q80 10 60 60 Q30 40 10 80" fill="hsl(var(--foliage) / 0.5)" />
          <circle cx="35" cy="50" r="6" fill="hsl(var(--primary) / 0.6)" />
          <circle cx="20" cy="70" r="5" fill="hsl(var(--primary) / 0.5)" />
          <circle cx="50" cy="35" r="4" fill="hsl(var(--primary) / 0.7)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0 0 Q60 30 40 80 Q20 60 0 100" fill="hsl(var(--primary) / 0.4)" />
          <path d="M0 0 Q80 10 60 60 Q30 40 10 80" fill="hsl(var(--foliage) / 0.5)" />
          <circle cx="35" cy="50" r="6" fill="hsl(var(--primary) / 0.6)" />
          <circle cx="20" cy="70" r="5" fill="hsl(var(--primary) / 0.5)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-amber font-sans text-sm tracking-[0.3em] uppercase mb-6"
        >
          Your Neighborhood Aangan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-6"
        >
          Leave a Little Lighter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-cream/70 font-sans text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your neighborhood 'Aangan.' No dressing up. Just you and the stars.
        </motion.p>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block bg-amber text-mud font-sans font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300"
          style={{ boxShadow: "0 4px 24px hsl(var(--amber-glow) / 0.4)" }}
        >
          Vibe with Us — Menu & Hours ↓
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-cream/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
