import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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

        {/* Navigation links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-serif text-sm transition-colors duration-200 hover:text-amber ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
