import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aanganLogo from "@/assets/aangan-logo-wide.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#philosophy" },
  { label: "Activities", href: "#experiences" },
  { label: "Menu", href: "#menu" },
  { label: "Reservation", href: "#reservation" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <img
              src={aanganLogo}
              alt="Aangan"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Animated hamburger → X */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`block w-7 h-0.5 origin-center ${menuOpen ? "bg-cream" : scrolled ? "bg-foreground" : "bg-cream"}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className={`block w-7 h-0.5 ${scrolled ? "bg-foreground" : "bg-cream"}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`block w-7 h-0.5 origin-center ${menuOpen ? "bg-cream" : scrolled ? "bg-foreground" : "bg-cream"}`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-mud shadow-2xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-8 mt-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-cream hover:text-amber transition-colors duration-200 py-3 border-b border-cream/10 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Footer links */}
            <div className="mt-auto p-8 space-y-3">
              <div className="flex flex-col gap-2">
                <a href="#privacy" onClick={() => setMenuOpen(false)} className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors">Privacy Policy</a>
                <a href="#terms" onClick={() => setMenuOpen(false)} className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors">Terms & Conditions</a>
              </div>
              <p className="font-sans text-cream/30 text-xs">© 2026 Aangan</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
