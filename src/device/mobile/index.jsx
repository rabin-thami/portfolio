import Header from "./Header";
import HeroSection from "./HeroSection";
import Aboutme from "./Aboutme";
import WorkShowcase from "./WorkShowcase";
import Contact from "./contact";
export default function index() {
  return (
    <div>
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
