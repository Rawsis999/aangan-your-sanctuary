import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";

import menuCholeKulche from "@/assets/menu-chole-kulche.jpg";
import menuButterChickenNachos from "@/assets/menu-butter-chicken-nachos.jpg";
import menuSamosaTacos from "@/assets/menu-samosa-tacos.jpg";
import menuPaneerWrap from "@/assets/menu-paneer-wrap.jpg";
import menuVadaPav from "@/assets/menu-vada-pav.jpg";
import menuMakhana from "@/assets/menu-makhana.jpg";
import menuCheeseFries from "@/assets/menu-cheese-fries.jpg";
import menuCornRibs from "@/assets/menu-corn-ribs.jpg";
import menuGuavaFizz from "@/assets/menu-guava-fizz.jpg";
import menuBanta from "@/assets/menu-banta.jpg";
import menuRoseMilk from "@/assets/menu-rose-milk.jpg";
import menuColdBrew from "@/assets/menu-cold-brew.jpg";
import menuNutellaParatha from "@/assets/menu-nutella-paratha.jpg";
import menuGulabCheesecake from "@/assets/menu-gulab-cheesecake.jpg";
import experiencePicnic from "@/assets/experience-picnic.jpg";
import potliPotters from "@/assets/potli-potters.jpg";
import potliDeeptalk from "@/assets/potli-deeptalk.jpg";
import potliGroup from "@/assets/potli-group.jpg";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image: string;
}

const menuCategories: { key: string; title: string; icon: string; tagline: string; items: MenuItem[] }[] = [
  {
    key: "remix",
    title: "The Remix Lab",
    icon: "🌯",
    tagline: "Indian street soul meets modern handheld comfort.",
    items: [
      { name: "Chole Kulche Sliders", desc: "Our signature \"must-try.\" Two mini, butter-toasted kulcha buns stuffed with spicy Amritsari chole, pickled beetroots, and a drizzle of mint-yogurt foam.", price: "₹249", image: menuCholeKulche },
      { name: "Butter Chicken \"Nachos\"", desc: "Crispy, hand-broken khakra chips topped with smoky shredded butter chicken, melted mozzarella, and a heavy drizzle of makhani gravy.", price: "₹329", image: menuButterChickenNachos },
      { name: "Samosa Smash Tacos", desc: "A mini paratha \"taco\" shell filled with a smashed potato samosa, sweet tamarind chutney, pomegranate pearls, and crunchy sev.", price: "₹199", image: menuSamosaTacos },
      { name: "Paneer Pesto Wrap", desc: "Charred paneer tikka tossed in a fresh basil-coriander pesto, wrapped in a whole-wheat tortilla with crunchy bell peppers.", price: "₹279", image: menuPaneerWrap },
      { name: "Vada Pav Poppers", desc: "Bite-sized potato vada balls with a molten cheese center, served with a spicy garlic-peanut dry chutney and soft slider buns.", price: "₹199", image: menuVadaPav },
    ],
  },
  {
    key: "sides",
    title: "The Side Hustle",
    icon: "🍟",
    tagline: "Small plates for long conversations.",
    items: [
      { name: "Peri-Peri Makhana", desc: "Large, popped lotus seeds tossed in a fiery peri-peri and dry mango powder mix. The \"Unbothered\" healthy snack.", price: "₹149", image: menuMakhana },
      { name: "Masala Cheese Fries", desc: "Skin-on fries dusted with a secret \"Chaat-Masala\" blend and smothered in a warm, spicy cheese sauce.", price: "₹199", image: menuCheeseFries },
      { name: "Gunpowder Corn Ribs", desc: "Char-grilled corn ribs rubbed with South Indian \"podi\" (gunpowder) spice and lime butter.", price: "₹229", image: menuCornRibs },
    ],
  },
  {
    key: "sips",
    title: "Liquid Chill",
    icon: "🥤",
    tagline: "Aesthetic, refreshing, and highly \"post-able.\"",
    items: [
      { name: "Pink Guava Chilli Fizz", desc: "A vibrant pink guava nectar spiked with black salt and green chili, topped with sparkling soda and a tajin rim.", price: "₹199", image: menuGuavaFizz },
      { name: "The OG Banta (Remix)", desc: "Lemon-ginger soda served in a vintage bottle, spiked with a dash of roasted cumin and fresh mint leaves.", price: "₹129", image: menuBanta },
      { name: "Rose Milk Cloud", desc: "A nostalgic rose-syrup milkshake topped with a light vanilla cold foam and dried edible rose petals.", price: "₹169", image: menuRoseMilk },
      { name: "Desi Cold Brew", desc: "16-hour steeped coffee concentrate with a hint of dark jaggery and a cardamom finish.", price: "₹199", image: menuColdBrew },
    ],
  },
  {
    key: "desserts",
    title: "Sweet Retreats",
    icon: "🍰",
    tagline: "The perfect end to the vibe.",
    items: [
      { name: "Nutella Paratha Roll", desc: "A hot, flaky, multi-layered paratha rolled around warm Nutella and topped with crushed toasted hazelnuts.", price: "₹199", image: menuNutellaParatha },
      { name: "Gulab Jamun Cheesecake", desc: "Individual cheesecake jars with a base of crushed Graham crackers and a heart of warm, syrup-soaked gulab jamun.", price: "₹279", image: menuGulabCheesecake },
    ],
  },
  {
    key: "potli",
    title: "Picnic Potli",
    icon: "🧺",
    tagline: "Eco-friendly baskets packed with memories and moments.",
    items: [
      { name: "The Potter's Palette", desc: "Designed for those hitting the wheel or looking for a solo creative escape. Vada Pav Poppers + Peri-Peri Makhana. Aangan Shikanji in a chilled glass bottle. The \"Mud-Mitt\" Pack with biodegradable wipes, hand cream, mini A6 kraft sketchbook and charcoal pencil.", price: "Custom", image: potliPotters },
      { name: "The Deep Talk Basket", desc: "Focused on deep connection and unhurried conversation. Amritsari Kulcha Sliders + Deconstructed Butter Chicken Dips with sourdough crostinis. A sharing carafe of Peach & Lemongrass Iced Tea. Aangan Unplugged conversation cards + borrowed Instax camera with 5 films.", price: "Custom", image: potliDeeptalk },
      { name: "The Group Unwind", desc: "The ultimate social kit for 3-4 friends. The \"Remix Board\" (massive platter of all snacks and sliders). 1-liter \"Bucket\" of Pink Guava Chilli Fizz with tajin-rimmed glass set. Unconventional playing cards + premium heavy-knit Aangan blanket for evening stargazing.", price: "Custom", image: potliGroup },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("remix");
  const activeCategory = menuCategories.find((c) => c.key === activeTab)!;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const lightboxItems = activeCategory.items.map((item) => ({
    image: item.image,
    title: item.name,
    description: item.desc,
    price: item.price,
  }));

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`font-sans text-sm font-medium px-5 py-3 rounded-full transition-colors duration-300 ${
                activeTab === cat.key
                  ? "bg-primary text-primary-foreground"
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
          >
            <p className="text-center font-sans text-muted-foreground text-sm italic mb-6">{activeCategory.tagline}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4, boxShadow: "0 8px 30px hsl(var(--foreground) / 0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <div className="h-40 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      width={640}
                      height={640}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-1.5">
                      <h4 className="font-sans font-semibold text-foreground text-base">{item.name}</h4>
                      <span className="font-sans text-primary font-medium text-sm ml-2 shrink-0">{item.price}</span>
                    </div>
                    <p className="font-sans text-muted-foreground text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center font-sans text-muted-foreground/50 text-xs mt-8 italic">
              Everything is designed to be eaten with one hand while the other holds your phone — because the vibe is too good not to share.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % activeCategory.items.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + activeCategory.items.length) % activeCategory.items.length)}
      />
    </section>
  );
};

export default MenuSection;
