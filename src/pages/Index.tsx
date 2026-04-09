import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/landing/SplashScreen";
import Navbar from "@/components/landing/Navbar";
import CustomCursor from "@/components/landing/CustomCursor";
import Chatbot from "@/components/landing/Chatbot";
import HeroSection from "@/components/landing/HeroSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ExperiencesSection from "@/components/landing/ExperiencesSection";
import MenuSection from "@/components/landing/MenuSection";
import SocialFeedSection from "@/components/landing/SocialFeedSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CommunitySection from "@/components/landing/CommunitySection";
import ReservationSection from "@/components/landing/ReservationSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      </AnimatePresence>
      <Navbar />
      <Chatbot />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PhilosophySection />
        <ExperiencesSection />
        <MenuSection />
        <SocialFeedSection />
        <TestimonialsSection />
        <CommunitySection />
        <ReservationSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
