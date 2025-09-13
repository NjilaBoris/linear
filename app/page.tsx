import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import LogoTicker from "./sections/LogoTicker";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
    </div>
  );
}
