import { motion } from "framer-motion";

const experiences = [
  {
    icon: "🔭",
    title: "Stargazing Station",
    description: "Nights under the dark sky with our in-house telescopes. Weekly Dark Sky Moments where the lights go out and the stars come alive.",
  },
  {
    icon: "🧺",
    title: "Rent-a-Picnic",
    description: "Grab our basket kits, claim a mat, and unwind in the grass with Lo-Fi playlists humming through the courtyard.",
  },
  {
    icon: "🛏️",
    title: "Healing Nooks & Charpais",
    description: "Intimate solo spots for reading, resting, and connecting with silence. Woven cots under the shade of old trees.",
  },
  {
    icon: "🌿",
    title: "Mitti Corner",
    description: "A dedicated patch of earth to put your feet down and ground yourself. Earthing, the way our grandparents did it.",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{
      background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)`
    }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">Our Experiences</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">What Awaits You</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
              style={{ boxShadow: "0 4px 20px hsl(var(--foreground) / 0.04)" }}
            >
              <span className="text-4xl block mb-4 group-hover:animate-float">{exp.icon}</span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{exp.title}</h3>
              <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
