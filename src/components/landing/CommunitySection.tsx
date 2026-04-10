import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import communityBg from "@/assets/community-bg.jpg";
import communityGames from "@/assets/community-games.jpg";
import communityHerbs from "@/assets/community-herbs.jpg";
import communityLibrary from "@/assets/community-library.jpg";
import communitySelfeesh from "@/assets/community-selfeesh.jpg";
import communityCafe from "@/assets/community-cafe.jpg";

const communityFeatures = [
  {
    image: communityLibrary,
    icon: "📚",
    title: "Community Library",
    desc: "Borrow a book, leave a book. Our shelves are curated by the neighborhood. From bestsellers to forgotten gems — take one, leave one.",
  },
  {
    image: communityGames,
    icon: "🎲",
    title: "Board Game Garden",
    desc: "Ludo, Snakes & Ladders, Carrom — under the trees, the way it used to be. Challenge a stranger, make a friend.",
  },
  {
    image: communityHerbs,
    icon: "🌱",
    title: "Community Herb Garden",
    desc: "Pick your own tulsi, mint, or curry leaves. Take some home for your dal. Grown with love by the neighborhood.",
  },
];

const galleryImages = [
  { src: communityGames, alt: "Friends playing board games" },
  { src: communityLibrary, alt: "Cozy community library" },
  { src: communityHerbs, alt: "Herb garden picking" },
  { src: communityBg, alt: "Courtyard overview" },
  { src: communitySelfeesh, alt: "Friends enjoying food together" },
  { src: communityCafe, alt: "Friends relaxing at the courtyard cafe" },
];

const CommunitySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openFeatureLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const lightboxItems = communityFeatures.map((feat) => ({
    image: feat.image,
    title: feat.title,
    description: feat.desc,
  }));

  return (
    <section id="community" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">The Hood</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Community Over Commerce</h2>
          <p className="font-sans text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Your neighborhood cafe. We value community over commerce.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-serif italic text-foreground/70 text-lg md:text-xl mb-10"
        >
          "A place where you are allowed to look your worst and feel your best."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-10"
        >
          <img
            src={communityBg}
            alt="Community courtyard with board games and bookshelves"
            className="w-full h-[260px] md:h-[380px] object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {communityFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openFeatureLightbox(i)}
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-sans text-sm font-medium bg-primary/80 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details →
                  </span>
                </div>
              </div>
              <div className="text-center p-6">
                <span className="text-3xl block mb-3">{feat.icon}</span>
                <h3 className="font-serif text-xl text-foreground mb-2">{feat.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed line-clamp-2">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reduced gallery - 6 images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-3"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % communityFeatures.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + communityFeatures.length) % communityFeatures.length)}
      />
    </section>
  );
};

export default CommunitySection;
