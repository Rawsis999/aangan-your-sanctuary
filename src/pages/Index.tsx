import HeroSection from "@/components/landing/HeroSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ExperiencesSection from "@/components/landing/ExperiencesSection";
import MenuSection from "@/components/landing/MenuSection";
import SocialFeedSection from "@/components/landing/SocialFeedSection";
import CommunitySection from "@/components/landing/CommunitySection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <ExperiencesSection />
      <MenuSection />
      <SocialFeedSection />
      <CommunitySection />
      <FooterSection />
    </main>
  );
};

export default Index;
