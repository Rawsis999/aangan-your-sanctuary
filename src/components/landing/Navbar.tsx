import { useState, useEffect } from "react";
import aanganLogo from "@/assets/aangan-logo-wide.png";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#philosophy", id: "philosophy" },
  { label: "Activities", href: "#experiences", id: "experiences" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Reservation", href: "#reservation", id: "reservation" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Use IntersectionObserver for section tracking (more performant)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -66%" }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
            className="h-10 md:h-12 w-auto self-stretch"
            style={{ maxWidth: "210%", minHeight: "93px" }}
          />
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "text-amber border-b-2 border-amber pb-1"
                  : `hover:text-amber ${scrolled ? "text-foreground" : "text-cream"}`
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
