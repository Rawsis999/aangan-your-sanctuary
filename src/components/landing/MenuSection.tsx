import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Sips",
    priceRange: "₹80–150",
    icon: "☕",
    items: [
      { name: "Cutting Chai Flask", desc: "Classic kadak chai in a flask — pour and share", price: "₹80" },
      { name: "Moonlight Milk", desc: "Warm turmeric & ashwagandha in moonlit ceramic", price: "₹120" },
      { name: "Kokum Sherbet", desc: "Tangy, cooling Konkan classic with black salt", price: "₹100" },
    ],
  },
  {
    title: "Bites",
    priceRange: "₹120–250",
    icon: "🍽️",
    items: [
      { name: "Kulcha Sliders", desc: "Mini kulchas with aloo or paneer tikka filling", price: "₹180" },
      { name: '"Nani" Samosa Basket', desc: "Crispy pea-potato samosas with chutneys trio", price: "₹120" },
      { name: "Masala Maggi Jar", desc: "Spiced Maggi in a jar with cheese toast dippers", price: "₹150" },
    ],
  },
  {
    title: "The Potli",
    priceRange: "₹350",
    icon: "👝",
    items: [
      { name: "Grab-and-Go Bundle", desc: "Kathi roll, seasonal fruit, masala makhana & a drink — all in a reusable cloth potli. Perfect for picnics.", price: "₹350" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-card text-grain overflow-hidden">
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">The Menu</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">Sukoon</h2>
          <p className="font-sans text-muted-foreground text-base italic">Affordable comfort. Nothing fancy. Just good.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {menuCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
            >
              <div className="text-center mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2">{cat.title}</h3>
                <p className="font-sans text-xs text-muted-foreground tracking-wider">{cat.priceRange}</p>
              </div>

              <div className="space-y-5">
                {cat.items.map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
