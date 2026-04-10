import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
  "11:00 PM", "11:30 PM",
];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];
const activityAddons = [
  { id: "none", label: "No Activity", price: "Free" },
  { id: "pottery", label: "Pottery Session (Mitti Corner)", price: "₹350/hr" },
  { id: "stargazing", label: "Stargazing Experience", price: "Included" },
  { id: "picnic", label: "Rent-a-Picnic Kit", price: "₹599" },
];

const ReservationSection = () => {
  const [date, setDate] = useState<Date>();
  const [partySize, setPartySize] = useState(2);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [activityAddon, setActivityAddon] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && timeSlot && name && phone) {
      const activity = activityAddon !== "none" ? activityAddons.find((a) => a.id === activityAddon)?.label : "None";
      const message = `Hi Aangan! I'd like to book a table.\n\n` +
        `👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${format(date, "PPP")}\n⏰ Time: ${timeSlot}\n👥 Party Size: ${partySize}\n🎨 Activity: ${activity}`;
      const whatsappUrl = `https://wa.me/917060064385?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitted(true);
    }
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-primary mb-4">Reserve a Spot</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-3">Book Your Charpai</h2>
          <p className="font-sans text-muted-foreground text-base">
            Come sit in the courtyard. We saved you a spot. <span className="font-handwritten text-lg text-primary">Open 11 AM – 11:30 PM · Closed Mondays</span>
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-background border border-border rounded-2xl p-10"
          >
            <span className="text-5xl block mb-4">🎉</span>
            <h3 className="font-serif text-2xl text-foreground mb-2">You're In!</h3>
            <p className="font-sans text-muted-foreground">
              {format(date!, "PPP")} at {timeSlot} • Party of {partySize}
            </p>
            {activityAddon !== "none" && (
              <p className="font-sans text-muted-foreground text-sm">
                Activity: {activityAddons.find((a) => a.id === activityAddon)?.label}
              </p>
            )}
            <p className="font-sans text-muted-foreground text-sm mt-2">We'll send a confirmation to {phone}</p>
            <Button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 py-3 text-base"
            >
              Book Another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-background border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-sm text-foreground mb-2 block">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What should we call you?"
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="font-sans text-sm text-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 7060064385"
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-sm text-foreground mb-2 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" /> Pick a Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full bg-card border border-border rounded-lg px-4 py-3 font-sans text-sm text-left focus:outline-none focus:ring-2 focus:ring-primary/30",
                      !date && "text-muted-foreground/50"
                    )}
                  >
                    {date ? format(date, "PPP") : "Select a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="font-sans text-sm text-foreground mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Party Size
              </label>
              <div className="flex flex-wrap gap-2">
                {partySizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPartySize(size)}
                    className={cn(
                      "w-11 h-11 rounded-full font-sans text-sm font-medium transition-colors duration-200",
                      partySize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:bg-muted"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-sans text-sm text-foreground mb-3 block">
                🎨 Add Optional Activity (Optional)
              </label>
              <select
                value={activityAddon}
                onChange={(e) => setActivityAddon(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              >
                {activityAddons.map((addon) => (
                  <option key={addon.id} value={addon.id}>
                    {addon.label} — {addon.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-sans text-sm text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Preferred Time
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeSlot(time)}
                    className={cn(
                      "px-4 py-2 rounded-full font-sans text-xs font-medium transition-colors duration-200",
                      timeSlot === time
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:bg-muted"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={!date || !timeSlot || !name || !phone}
              className="w-full bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full py-4 text-base font-semibold transition-colors duration-300 disabled:opacity-50"
            >
              Reserve My Spot 🪑
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ReservationSection;
