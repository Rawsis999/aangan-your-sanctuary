import { motion } from "framer-motion";
import communityBg from "@/assets/community-bg.jpg";
import communityGames from "@/assets/community-games.jpg";
import communityHerbs from "@/assets/community-herbs.jpg";
import communityLibrary from "@/assets/community-library.jpg";

const communityFeatures = [
  {
    image: communityLibrary,
    icon: "📚",
    title: "Community Library",
    desc: "Borrow a book, leave a book. Our shelves are curated by the neighborhood.",
  },
  {
    image: communityGames,
    icon: "🎲",
    title: "Board Game Garden",
    desc: "Ludo, Snakes & Ladders, Carrom — under the trees, the way it used to be.",
  },
  {
    image: communityHerbs,
    icon: "🌱",
    title: "Community Herb Garden",
    desc: "Pick your own tulsi, mint, or curry leaves. Take some home for your dal.",
  },
];

const CommunitySection = () => {
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

        {/* Main community image */}
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
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="text-center p-6">
                <span className="text-3xl block mb-3">{feat.icon}</span>
                <h3 className="font-serif text-xl text-foreground mb-2">{feat.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional community images grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {[communityGames, communityLibrary, communityHerbs, communityBg, communityGames, communityLibrary].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt={`Community moment ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
