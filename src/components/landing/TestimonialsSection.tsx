import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I came for chai. I stayed for the silence. This is my therapy now.",
    name: "Priya M.",
    detail: "Regular since Day 1",
  },
  {
    quote: "Finally a place where nobody judges you for sitting alone with a book for 3 hours.",
    name: "Arjun K.",
    detail: "Self-proclaimed introvert",
  },
  {
    quote: "My kids play in the mud, I read on the charpai. We all leave happy.",
    name: "Sneha R.",
    detail: "Weekend regular",
  },
  {
    quote: "The pottery hour is meditative. Best ₹ I've ever spent on mental health.",
    name: "Vikram S.",
    detail: "Mitti Corner enthusiast",
  },
  {
    quote: "No Wi-Fi, no pretense. Just warm chai and warmer people. Pure sukoon.",
    name: "Meera T.",
    detail: "Neighborhood resident",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Voices from the Courtyard
          </h2>
        </motion.div>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-serif italic text-foreground text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[current].quote}"
              </p>
              <p className="font-sans text-foreground font-semibold text-base">
                {testimonials[current].name}
              </p>
              <p className="font-sans text-muted-foreground text-sm">
                {testimonials[current].detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
