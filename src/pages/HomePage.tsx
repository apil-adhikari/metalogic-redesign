import Hero from "../components/Hero";
import HoverVisonCard from "../components/HoverVisonCard";
import LogoTicker from "../components/LogoTicker";
import Navbar from "../components/Navbar";
import WhyMeta from "../components/WhyMeta";
import Projects from "../components/Projects";
import { TechStacks } from "../utils/ClipPathLinks";
import { SupportCard } from "../utils/SupportCard";

const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero />
      <LogoTicker />
      <HoverVisonCard />
      <WhyMeta />
      <Projects />
      <TechStacks />
      <SupportCard />
    </div>
  );
};

export default HomePage;
