import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, UtensilsCrossed, Sparkles, CalendarCheck, BookOpen } from "lucide-react";
import aanganLogo from "@/assets/aangan-logo-wide.png";

const menuItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: BookOpen, label: "About", href: "#philosophy" },
  { icon: Sparkles, label: "Vibe", href: "#experiences" },
  { icon: UtensilsCrossed, label: "Menu", href: "#menu" },
  { icon: CalendarCheck, label: "Book", href: "#reservation" },
];

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const radius = 90;
  const startAngle = 90; // degrees — starts from bottom
  const spread = 200; // degrees to spread items across

  return (
    <>
      {/* Fixed logo top-left */}
      <a href="#hero" className="fixed top-4 left-4 z-50">
        <img src={aanganLogo} alt="Aangan" className="h-12 md:h-14 w-auto" />
      </a>

      {/* Trigger button top-right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-bold"
        >
          {isOpen ? "✕" : "☰"}
        </motion.div>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Radial items */}
      <AnimatePresence>
        {isOpen &&
          menuItems.map((item, i) => {
            const angle =
              (startAngle + (spread / (menuItems.length - 1)) * i) *
              (Math.PI / 180);
            const x = -Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 20,
                  delay: i * 0.05,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="fixed z-50 flex flex-col items-center gap-1"
                style={{
                  top: "calc(1.25rem + 1.5rem)", // align with trigger center
                  right: "calc(1.25rem + 1.5rem)",
                }}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                    hoveredIndex === i
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-card text-foreground border border-border"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="font-sans text-[10px] font-medium text-foreground bg-card/90 backdrop-blur px-2 py-0.5 rounded shadow-sm whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
      </AnimatePresence>
    </>
  );
};

export default RadialMenu;
