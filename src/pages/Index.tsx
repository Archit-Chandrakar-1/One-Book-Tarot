import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialSidebar from "@/components/SocialSidebar";
import StarCursor from "@/components/StarCursor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="cursor-none">
      <StarCursor />
      <Navbar />
      <SocialSidebar />
      <HeroSection />


    </main>
  );
};

export default Index;
