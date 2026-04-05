import { motion } from "framer-motion";

const posts = [
  {
    caption: "Tuesday Silent Hour. Zero phones. Just rain on the tin roof. 🌧️",
    likes: 342,
    tag: "#AanganUnfiltered",
    bg: "hsl(var(--primary) / 0.15)",
    emoji: "🤫",
  },
  {
    caption: "Nani's samosa basket hit different at 4pm with cutting chai ☕",
    likes: 891,
    tag: "#SukoonMenu",
    bg: "hsl(var(--secondary) / 0.15)",
    emoji: "🥟",
  },
  {
    caption: "Mitti Corner regulars know — shoes off, feet in the earth, breathe. 🌿",
    likes: 567,
    tag: "#MittiCorner",
    bg: "hsl(var(--foliage) / 0.12)",
    emoji: "🦶",
  },
  {
    caption: "Dark Sky Night. Jupiter was RIGHT THERE. The kids lost it. 🔭✨",
    likes: 1203,
    tag: "#AanganStargazing",
    bg: "hsl(var(--twilight) / 0.15)",
    emoji: "🪐",
  },
  {
    caption: "Came in a hoodie and chappals. Left with a full heart and turmeric milk mustache.",
    likes: 724,
    tag: "#ComeAsYouAre",
    bg: "hsl(var(--primary) / 0.1)",
    emoji: "💛",
  },
  {
    caption: "The Potli for two. Kathi roll, fruit, makhana. Picnic sorted. 🧺",
    likes: 456,
    tag: "#RentAPicnic",
    bg: "hsl(var(--secondary) / 0.12)",
    emoji: "🧺",
  },
];

const SocialFeedSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
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

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border p-6 flex flex-col justify-between min-h-[220px] cursor-pointer hover:border-primary/30 transition-colors duration-300"
              style={{ background: post.bg }}
            >
              <div>
                <span className="text-4xl block mb-4">{post.emoji}</span>
                <p className="font-sans text-foreground text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-sans text-xs text-primary font-medium">
                  {post.tag}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  ♥ {post.likes.toLocaleString()}
                </span>
              </div>
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
