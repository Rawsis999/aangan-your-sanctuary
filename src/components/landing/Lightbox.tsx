import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxItem {
  image: string;
  title: string;
  description: string;
  price?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ items, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  const item = items[currentIndex];
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden max-w-4xl w-[90vw] max-h-[85vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left arrow */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors md:left-4"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow */}
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors md:right-4"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
                  {item.price && (
                    <span className="inline-block bg-primary text-primary-foreground font-sans text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                      {item.price}
                    </span>
                  )}
                  <p className="font-sans text-muted-foreground text-base leading-relaxed">{item.description}</p>
                  <p className="font-sans text-muted-foreground/50 text-xs mt-6">
                    {currentIndex + 1} / {items.length}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
