import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const faqData: Record<string, string> = {
  pottery: "🏺 Our Mitti Corner is open daily from 4 PM–10 PM. It's ₹350/hour with all resources provided. Walk-ins welcome, but weekends fill up fast — reserve via our booking section!",
  "mitti corner": "🏺 Mitti Corner is our pottery experience — buy by the hour (₹350/hr), all materials included. Shape clay, unplug, and take home what you create!",
  location: "📍 We're at Shahpur Jat, New Delhi. Look for the terracotta archway with the hanging lantern — you can't miss it!",
  address: "📍 We're at Shahpur Jat, New Delhi. Look for the terracotta archway!",
  timing: "🕓 We're open daily from 4:00 PM to 11:30 PM. Come early for golden-hour vibes, stay late for stargazing!",
  hours: "🕓 Open daily 4:00 PM – 11:30 PM. Kitchen closes at 11:00 PM.",
  time: "🕓 Open daily 4:00 PM – 11:30 PM. Kitchen closes at 11:00 PM.",
  reservation: "📅 You can book directly on our site — scroll down to the 'Book Your Charpai' section. We accept parties of 1–8!",
  book: "📅 Head to the reservation section on this page! Pick a date, time (4 PM–11:30 PM), and party size.",
  menu: "🌯 Our menu features The Remix Lab (main bites), The Side Hustle (snacks), Liquid Chill (drinks), and Sweet Retreats (desserts). All designed to be eaten with one hand!",
  food: "🍽️ We serve remixed Indian street food — Chole Kulche Sliders, Samosa Smash Tacos, Butter Chicken Nachos, and more. Check the Menu section!",
  stargazing: "🌟 Our Stargazing Station runs weekly Dark Sky Moments where lights go out and stars come alive. Bring a blanket, lie on a charpai, and enjoy!",
  picnic: "🧺 Our Rent-a-Picnic kits include a basket, mat, and curated selection of bites. Claim a spot on the grass and enjoy lo-fi playlists!",
  dress: "👟 No dress code at all! Come in your pajamas, favorite hoodie, or whatever makes you comfortable. We even have complimentary slippers!",
  wifi: "📵 We intentionally don't have Wi-Fi. Aangan is about unplugging, connecting with people, and just being present.",
  pet: "🐾 Well-behaved pets are welcome in our courtyard! We even have a water bowl by the entrance.",
  price: "💰 Most items range ₹129–₹329. We believe in affordable comfort — nothing fancy, just good food.",
  parking: "🚗 Limited street parking available. We recommend auto or metro — Hauz Khas is the nearest station.",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(faqData)) {
    if (lower.includes(key)) return response;
  }
  return "🤔 Hmm, I'm not sure about that! You can ask me about our menu, pottery sessions, timings, location, reservations, dress code, or stargazing nights. Or just scroll through the page — it's all there! 🌿";
};

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey! 👋 Welcome to Aangan. Ask me anything — pottery slots, menu, timings, or just say hi!", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getResponse(userMsg), isBot: true }]);
    }, 600);
  };

  const quickQuestions = ["Timings?", "Where are you?", "Pottery slots?", "Menu?"];

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-colors duration-300 ${
          isOpen
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 400 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[480px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-5 py-4">
              <h4 className="font-serif text-lg">Aangan Assistant</h4>
              <p className="font-sans text-xs opacity-80">Ask us anything 🌿</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[280px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl font-sans text-sm leading-relaxed ${
                      msg.isBot
                        ? "bg-muted text-foreground rounded-bl-sm"
                        : "bg-primary text-primary-foreground rounded-br-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setMessages((prev) => [...prev, { text: q, isBot: false }]);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { text: getResponse(q), isBot: true }]);
                      }, 600);
                    }}
                    className="font-sans text-xs bg-background border border-border rounded-full px-3 py-1.5 text-foreground hover:bg-muted transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a question..."
                className="flex-1 bg-background border border-border rounded-full px-4 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
