import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  {
    key: "sips",
    title: "Sips",
    icon: "☕",
    items: [
      { name: "Cutting Chai Flask", desc: "Classic kadak chai in a flask — pour and share", price: "₹80" },
      { name: "Moonlight Milk", desc: "Warm turmeric & ashwagandha in moonlit ceramic", price: "₹120" },
      { name: "Kokum Sherbet", desc: "Tangy, cooling Konkan classic with black salt", price: "₹100" },
    ],
  },
  {
    key: "bites",
    title: "Bites",
    icon: "🍽️",
    items: [
      { name: "Kulcha Sliders", desc: "Mini kulchas with aloo or paneer tikka filling", price: "₹180" },
      { name: '"Nani" Samosa Basket', desc: "Crispy pea-potato samosas with chutneys trio", price: "₹120" },
      { name: "Masala Maggi Jar", desc: "Spiced Maggi in a jar with cheese toast dippers", price: "₹150" },
    ],
  },
  {
    key: "potli",
    title: "The Potli",
    icon: "👝",
    items: [
      { name: "Grab-and-Go Bundle", desc: "Kathi roll, seasonal fruit, masala makhana & a drink — all in a reusable cloth potli. Perfect for picnics.", price: "₹350" },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("sips");

  const activeCategory = menuCategories.find((c) => c.key === activeTab)!;

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">The Menu</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">Sukoon</h2>
          <p className="font-sans text-muted-foreground text-base italic">Affordable comfort. Nothing fancy. Just good.</p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex justify-center gap-3 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === cat.key
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <div className="text-center mb-6">
              <span className="text-3xl">{activeCategory.icon}</span>
              <h3 className="font-serif text-2xl text-foreground mt-2">{activeCategory.title}</h3>
            </div>

            <div className="space-y-5">
              {activeCategory.items.map((item) => (
                <div key={item.name} className="border-b border-border/50 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-sans font-semibold text-foreground text-sm">{item.name}</h4>
                    <span className="font-sans text-primary font-medium text-sm ml-3 shrink-0">{item.price}</span>
                  </div>
                  <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
