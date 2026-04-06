import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aanganLogo from "@/assets/aangan-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#philosophy" },
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
              className="h-12 md:h-14 w-auto"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-cream"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block w-7 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block w-7 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-cream"
                  : scrolled
                  ? "bg-foreground"
                  : "bg-cream"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-mud/95 backdrop-blur-lg flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl md:text-5xl text-cream hover:text-amber transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
