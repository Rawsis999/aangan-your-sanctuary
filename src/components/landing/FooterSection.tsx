import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 md:py-28 text-center bg-mud">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-4">Find Your Nearest Aangan</h2>
          <p className="font-sans text-cream/60 mb-10 text-base">
            Come sit in the courtyard. We saved you a charpai.
          </p>

          {/* Google Map Embed */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3503.5641903648336!2d77.22346!3d28.531731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservation"
              className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-9 py-4 rounded-full text-base hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Book a Table
            </a>
            <a
              href="https://maps.google.com/?q=28.531731,77.223460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cream text-foreground font-sans font-medium px-9 py-4 rounded-full text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Professional Footer */}
      <div className="bg-mud py-12 px-6 border-t border-cream/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-serif text-xl text-cream mb-2">Aangan</h3>
              <p className="font-sans text-cream/40 text-sm leading-relaxed">
                Your backyard retreat. Eat well, stay unbothered.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans text-cream/70 text-xs tracking-wider uppercase mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About", href: "#philosophy" },
                  { label: "Menu", href: "#menu" },
                  { label: "Activities", href: "#experiences" },
                  { label: "Reservation", href: "#reservation" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-cream/70 text-xs tracking-wider uppercase mb-4">Visit Us</h4>
              <div className="flex flex-col gap-2">
                <p className="font-sans text-cream/50 text-sm">Shahpur Jat, New Delhi</p>
                <p className="font-sans text-cream/50 text-sm">Open Daily: 4 PM – 11:30 PM</p>
                <p className="font-sans text-cream/50 text-sm">hello@aangan.cafe</p>
                <p className="font-sans text-cream/50 text-sm">+91 98765 43210</p>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-sans text-cream/70 text-xs tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/aangan.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-primary hover:border-primary transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-primary hover:border-primary transition-all duration-200"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-primary hover:border-primary transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Terms & Conditions</a>
              <a href="#" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Careers</a>
              <a href="#" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Contact</a>
            </div>
            <p className="font-sans text-cream/30 text-xs">© 2026 Aangan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
