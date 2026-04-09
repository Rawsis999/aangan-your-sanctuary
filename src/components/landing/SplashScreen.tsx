import { motion } from "framer-motion";
import aanganLogo from "@/assets/aangan-logo-wide.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "hsl(20 50% 10%)" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img
          src={aanganLogo}
          alt="Aangan"
          className="h-32 md:h-48 w-auto"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="w-16 h-0.5 bg-primary rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.p
          className="font-serif text-cream/60 text-sm tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Your Backyard Retreat
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
