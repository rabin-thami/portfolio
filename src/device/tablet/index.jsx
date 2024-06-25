import Header from "./Header";
import HeroSection from "./HeroSection";
import Aboutme from "./Aboutme";
import WorkShowcase from "./WorkShowcase";
import Contact from "./Contact";
export default function TabletComponents() {
  return (
    <div className="">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about-me">
        <Aboutme />
      </div>
      <div id="work">
        <WorkShowcase />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
