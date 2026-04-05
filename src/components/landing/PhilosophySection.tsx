import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background text-grain overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-snug">
            Why <span className="italic text-primary">Aangan</span>?
          </h2>

          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            We designed 'Aangan' as your <strong className="text-foreground">Third Place</strong>. A sanctuary where you are safe, comfortable, and never judged. Forget the complex menus and dressing up. Put on your favorite hoodie, step into our complimentary slippers, and just <em>be</em>.
          </p>

          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
            In a world obsessed with hustle culture, we built a place to <strong className="text-foreground">unplug</strong>. No Wi-Fi passwords on the wall. No "laptop-friendly" tables. Just earth beneath your feet and sky above your head.
          </p>
        </motion.div>

        {/* Silent Hour Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3"
        >
          <span className="text-2xl">🌙</span>
          <div className="text-left">
            <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Introvert Friendly</p>
            <p className="font-serif text-sm text-foreground">Silent Hour — Tuesdays 4–6 PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
