import { motion } from "framer-motion";
import philosophyBg from "@/assets/philosophy-bg.jpg";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={philosophyBg}
              alt="People relaxing in a warm courtyard"
              className="w-full h-[300px] md:h-[420px] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-snug">
              Why <span className="italic text-primary">Aangan</span>?
            </h2>

            <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              We designed 'Aangan' as your <strong className="text-foreground">Third Place</strong>. A sanctuary where you are safe, comfortable, and never judged. Forget the complex menus and dressing up. Put on your favorite hoodie, step into our complimentary slippers, and just <em>be</em>.
            </p>

            <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              In a world obsessed with hustle culture, we built a place to <strong className="text-foreground">unplug</strong>. No Wi-Fi passwords on the wall. No "laptop-friendly" tables. Just earth beneath your feet and sky above your head.
            </p>

            {/* Silent Hour Badge */}
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
              <span className="text-2xl">🌙</span>
              <div className="text-left">
                <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Introvert Friendly</p>
                <p className="font-serif text-sm text-foreground">Silent Hour — Tuesdays 4–6 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
