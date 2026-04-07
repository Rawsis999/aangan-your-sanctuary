import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const placeholders = Array.from({ length: 12 });

const SocialFeedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let scrollPos = 0;

    const animate = () => {
      if (!isPaused && el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section id="social" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
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

        {/* Auto-scrolling horizontal carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-3 overflow-x-hidden"
        >
          {/* Duplicate items for infinite scroll */}
          {[...placeholders, ...placeholders].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 bg-muted border border-border rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-muted/80 transition-colors duration-200"
            >
              <Camera className="w-7 h-7 text-muted-foreground/40" />
              <span className="font-sans text-xs text-muted-foreground/50">Image Here</span>
            </div>
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
            className="inline-flex items-center gap-2 font-sans text-sm bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-300 rounded-full px-7 py-3.5"
          >
            Follow the chaos on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
