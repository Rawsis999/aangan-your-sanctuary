import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import stargazingImg from "@/assets/experience-stargazing.jpg";
import picnicImg from "@/assets/experience-picnic.jpg";
import charpaiImg from "@/assets/experience-charpai.jpg";
import mittiImg from "@/assets/experience-mitti.jpg";

const experiences = [
  {
    image: stargazingImg,
    title: "Stargazing Station",
    description: "Nights under the dark sky with our in-house telescopes. Weekly Dark Sky Moments where the lights go out and the stars come alive. Bring a blanket, lie back on a charpai, and let the cosmos put things in perspective.",
  },
  {
    image: picnicImg,
    title: "Rent-a-Picnic",
    description: "Grab our basket kits, claim a mat, and unwind in the grass with Lo-Fi playlists humming through the courtyard. Each kit comes with a curated selection of bites and sips.",
  },
  {
    image: charpaiImg,
    title: "Healing Nooks & Charpais",
    description: "Intimate solo spots for reading, resting, and connecting with silence. Woven cots under the shade of old trees. No Wi-Fi, no rush — just earth beneath your feet.",
  },
  {
    image: mittiImg,
    title: "Mitti Corner",
    description: "A pottery experience — buy by the hour, all resources provided. Shape clay, unplug your mind, and take home what you create. Perfect for dates, solo therapy, or just getting your hands dirty.",
  },
];

const ExperiencesSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const lightboxItems = experiences.map((exp) => ({
    image: exp.image,
    title: exp.title,
    description: exp.description,
  }));

  return (
    <section id="experiences" className="relative py-24 md:py-32 bg-card overflow-hidden">
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
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              style={{ boxShadow: "0 4px 20px hsl(var(--foreground) / 0.04)" }}
              onClick={() => openLightbox(i)}
            >
              <div className="h-52 overflow-hidden relative">
                <motion.img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.span
                    className="text-white font-sans text-sm font-medium bg-primary/80 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details →
                  </motion.span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{exp.title}</h3>
                <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % experiences.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + experiences.length) % experiences.length)}
      />
    </section>
  );
};

export default ExperiencesSection;
