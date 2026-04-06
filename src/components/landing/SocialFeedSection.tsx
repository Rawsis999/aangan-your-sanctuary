import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const placeholders = Array.from({ length: 9 });

const SocialFeedSection = () => {
  return (
    <section id="social" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">
            @aangan.official
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
            Raw & Unfiltered
          </h2>
          <p className="font-sans text-muted-foreground text-base max-w-md mx-auto">
            No ring lights. No filters. Just real moments from the courtyard.
          </p>
        </motion.div>

        {/* 3-column Instagram-style grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square bg-muted border border-border rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-muted/80 transition-colors duration-200"
            >
              <Camera className="w-6 h-6 text-muted-foreground/40" />
              <span className="font-sans text-xs text-muted-foreground/50">Image Here</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-foreground transition-colors duration-200 border border-primary/30 rounded-full px-6 py-3 hover:bg-primary/5"
          >
            Follow the chaos on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
