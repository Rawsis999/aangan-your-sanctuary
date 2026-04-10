import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/80 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center pt-10 gap-6 animate-in fade-in slide-in-from-top-2 duration-300"
          onClick={() => setMobileOpen(false)}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-lg font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "text-amber border-b-2 border-amber pb-1"
                  : "text-foreground hover:text-amber"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
