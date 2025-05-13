import Hero from "../components/Hero";
import LogoTicker from "../components/LogoTicker";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero />
      <LogoTicker />
    </div>
  );
};

export default HomePage;
