import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import philosophyBg from "@/assets/philosophy-bg.jpg";

const PhilosophySection = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="philosophy" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Centered intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-snug">
            Why <span className="italic text-primary">Aangan</span>?
          </h2>
          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            We designed 'Aangan' as your <strong className="text-foreground">Third Place</strong>. A sanctuary where you are safe, comfortable, and never judged. Forget the complex menus and dressing up. Put on your favorite hoodie, step into our complimentary slippers, and just <em>be</em>.
          </p>
          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Our policy is simple — <strong className="text-foreground">you should be comfortable</strong>. That's it. No dress code, no pretense, no rush.
          </p>
          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            In a world obsessed with hustle culture, we built a place to <strong className="text-foreground">unplug</strong>. No Wi-Fi passwords on the wall. No "laptop-friendly" tables. Just earth beneath your feet and sky above your head.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-2xl overflow-hidden mb-10"
        >
          <motion.img
            src={philosophyBg}
            alt="People relaxing in a warm courtyard"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            loading="lazy"
            width={1280}
            height={720}
          />
        </motion.div>

        {/* Centered Introvert Friendly badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <span className="text-2xl">🌙</span>
            <div className="text-center">
              <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Introvert Friendly</p>
              <p className="font-serif text-sm text-foreground">Silent Hour — Tuesdays 4–6 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
