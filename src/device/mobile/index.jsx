import Header from "./Header";
import HeroSection from "./HeroSection";
import Aboutme from "./Aboutme";
import WorkShowcase from "./WorkShowcase";
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
    </div>
  );
}
