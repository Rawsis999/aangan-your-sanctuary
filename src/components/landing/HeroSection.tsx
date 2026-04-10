import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const FairyLight = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-amber"
    style={{ left, top, boxShadow: "0 0 10px 3px hsl(var(--amber-glow) / 0.6)" }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: 2.5 + delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const FloatingLeaf = ({ delay, left }: { delay: number; left: string }) => (
  <motion.div
    className="absolute text-foliage/30 text-2xl pointer-events-none"
    style={{ left }}
    initial={{ top: "-5%", rotate: 0, opacity: 0 }}
    animate={{ top: "105%", rotate: 360, opacity: [0, 0.6, 0.6, 0] }}
    transition={{ duration: 12 + delay * 3, repeat: Infinity, delay: delay * 2, ease: "linear" }}
  >
    🍃
  </motion.div>
);

const fairyLights = [
  { delay: 0, left: "15%", top: "12%" },
  { delay: 1.2, left: "45%", top: "8%" },
  { delay: 0.8, left: "75%", top: "18%" },
  { delay: 0.4, left: "30%", top: "22%" },
  { delay: 1.6, left: "65%", top: "15%" },
];

const floatingLeaves = [
  { delay: 0, left: "20%" },
  { delay: 2, left: "60%" },
  { delay: 3.5, left: "80%" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Aangan open-air bistro courtyard with fairy lights and stone archway in Shahpur Jat, New Delhi"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y: bgY }}
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/50" />

      {fairyLights.map((light, i) => (
        <FairyLight key={i} {...light} />
      ))}

      {floatingLeaves.map((leaf, i) => (
        <FloatingLeaf key={`leaf-${i}`} {...leaf} />
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber"
          style={{
            left: `${25 + i * 25}%`,
            top: `${35 + (i % 2) * 15}%`,
            boxShadow: "0 0 8px 2px hsl(var(--amber-glow) / 0.4)",
          }}
          animate={{
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), -20, 0],
            y: [0, -40, 20, 0],
            opacity: [0, 0.8, 0.3, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-cream leading-tight mb-4"
        >
          Aangan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif italic text-cream/90 text-2xl md:text-3xl mb-4"
        >
          Leave a Little Lighter.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/70 font-sans text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed"
        >
          Your backyard retreat. Shoes off. Stress off. Come as you are.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-handwritten text-cream/50 text-lg md:text-xl mb-10"
        >
          Shahpur Jat, New Delhi
        </motion.p>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-10 py-4 rounded-full text-lg hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ boxShadow: "0 4px 24px hsl(var(--primary) / 0.4)" }}
        >
          Explore the Vibe ↓
        </motion.a>
      </motion.div>

      <motion.a
        href="#philosophy"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
