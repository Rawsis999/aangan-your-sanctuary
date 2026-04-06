import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const FairyLight = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-amber"
    style={{ left, top, boxShadow: "0 0 10px 3px hsl(var(--amber-glow) / 0.6)" }}
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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.img
        src={heroBg}
        alt="Aangan courtyard exterior"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y: bgY }}
        width={1920}
        height={1080}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Fairy lights */}
      {fairyLights.map((light, i) => (
        <FairyLight key={i} {...light} />
      ))}

      {/* Content with parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-amber font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Your Neighborhood Aangan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight mb-6"
        >
          Leave a Little Lighter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/80 font-sans text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your neighborhood 'Aangan.' No dressing up. Just you and the stars.
        </motion.p>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-10 py-4 rounded-full text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
          style={{ boxShadow: "0 4px 24px hsl(var(--primary) / 0.4)" }}
        >
          Vibe with Us — Menu & Hours ↓
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
