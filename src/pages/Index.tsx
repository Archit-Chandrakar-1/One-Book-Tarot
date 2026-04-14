import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialSidebar from "@/components/SocialSidebar";
import StarCursor from "@/components/StarCursor";
import TarotCardSpread from "@/components/TarotCardSpread";

const Index = () => {
  return (
    <main className="cursor-none">
      <StarCursor />
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <TarotCardSpread />
    </main>
  );
};

export default Index;
