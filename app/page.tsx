import ReactLenis from "lenis/react";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Introduction from "./sections/Introduction";
import LogoTicker from "./sections/LogoTicker";
import Navbar from "./sections/Navbar";
import Faqs from "./sections/Faqs";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <ReactLenis root options={{ duration: 1.5, smoothWheel: true }}>
      <div>
        <Navbar />
        <Hero />
        <LogoTicker />
        <Introduction />
        <Features />
        <Integrations />
        <Faqs />
        <CallToAction />
        <Footer />
      </div>
    </ReactLenis>
  );
}
