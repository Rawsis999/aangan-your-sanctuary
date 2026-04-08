import { motion } from "framer-motion";

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
              className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-9 py-4 rounded-full text-base hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
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

      {/* Professional Footer */}
      <div className="bg-mud py-12 px-6 border-t border-cream/10">
        <div className="max-w-5xl mx-auto">
          {/* Top row */}
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
                {["Home", "About", "Menu", "Activities", "Reservation"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-cream/50 text-sm hover:text-cream transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-cream/70 text-xs tracking-wider uppercase mb-4">Visit Us</h4>
              <div className="flex flex-col gap-2">
                <p className="font-sans text-cream/50 text-sm">Open Daily: 4 PM – 12 AM</p>
                <p className="font-sans text-cream/50 text-sm">hello@aangan.cafe</p>
                <p className="font-sans text-cream/50 text-sm">+91 98765 43210</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-sans text-cream/70 text-xs tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex flex-col gap-2">
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
          </div>

          {/* Bottom row */}
          <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="#privacy" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Privacy Policy</a>
              <a href="#terms" className="font-sans text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200">Terms & Conditions</a>
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
