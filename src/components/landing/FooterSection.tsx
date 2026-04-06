import { motion } from "framer-motion";
import aanganLogo from "@/assets/aangan-logo.png";

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
          className="max-w-xl mx-auto px-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-4">Find Your Nearest Aangan</h2>
          <p className="font-sans text-cream/60 mb-10 text-base">
            Come sit in the courtyard. We saved you a charpai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-9 py-4 rounded-full text-base hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
            >
              Find Locations
            </a>
            <a
              href="#"
              className="inline-block bg-cream text-mud font-sans font-medium px-9 py-4 rounded-full text-base hover:bg-amber hover:text-mud transition-colors duration-300"
            >
              Join the Newsletter
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="bg-mud py-12 px-6 border-t border-cream/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={aanganLogo} alt="Aangan" className="h-12 w-auto" loading="lazy" />
              <div>
                <h3 className="font-serif text-xl text-cream">Aangan</h3>
                <p className="font-sans text-cream/40 text-sm italic">Proudly un-groomed.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {["Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-cream/50 text-sm hover:text-amber transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {["About", "Menu", "Careers", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="font-sans text-cream/30 text-xs">© 2026 Aangan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
