import { motion } from "framer-motion";
import communityBg from "@/assets/community-bg.jpg";

const communityFeatures = [
  {
    icon: "📚",
    title: "Community Library",
    desc: "Borrow a book, leave a book. Our shelves are curated by the neighborhood.",
  },
  {
    icon: "🎲",
    title: "Board Game Garden",
    desc: "Ludo, Snakes & Ladders, Carrom — under the trees, the way it used to be.",
  },
  {
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
            Your neighborhood cafe in Tier 1 & 2 cities. We value community over commerce.
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

        {/* Community image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-14"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {communityFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center bg-card border border-border rounded-2xl p-8"
            >
              <span className="text-4xl block mb-4">{feat.icon}</span>
              <h3 className="font-serif text-xl text-foreground mb-2">{feat.title}</h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
