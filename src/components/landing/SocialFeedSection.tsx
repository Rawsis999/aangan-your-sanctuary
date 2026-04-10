import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import communityBg from "@/assets/community-bg.jpg";
import communityGames from "@/assets/community-games.jpg";
import communityHerbs from "@/assets/community-herbs.jpg";
import communityLibrary from "@/assets/community-library.jpg";

const instagramFeed = [
  { image: communityBg, alt: "Courtyard overview" },
  { image: communityGames, alt: "Friends playing board games" },
  { image: communityLibrary, alt: "Cozy community library" },
  { image: communityHerbs, alt: "Herb garden picking" },
  { image: communityBg, alt: "Evening at the courtyard" },
  { image: communityGames, alt: "Board game night" },
  { image: communityLibrary, alt: "Reading together" },
  { image: communityHerbs, alt: "Fresh herbs from the garden" },
];

const SocialFeedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let scrollPos = 0;
    let frameCount = 0;

    const animate = () => {
      if (!isPaused && el) {
        // Only update every 2 frames to reduce repaints
        frameCount++;
        if (frameCount >= 2) {
          scrollPos += 0.5;
          if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
          el.scrollLeft = scrollPos;
          frameCount = 0;
        }
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
            The Courtyard Chronicles
          </h2>
          <p className="font-sans text-muted-foreground text-base max-w-md mx-auto">
            No ring lights. No filters. Just real moments from the courtyard.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-3 overflow-x-hidden"
        >
          {[...instagramFeed, ...instagramFeed].map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden border border-border cursor-pointer group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={320}
                height={320}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
            href="https://instagram.com/aangan.official"
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
