import Hero from "../components/Hero";
import HoverVisonCard from "../components/HoverVisonCard";
import LogoTicker from "../components/LogoTicker";
import Navbar from "../components/Navbar";
import WhyMeta from "../components/WhyMeta";
const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero />
      <LogoTicker />
      <HoverVisonCard />
      <WhyMeta />
    </div>
  );
};

export default HomePage;
