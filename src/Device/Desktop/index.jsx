import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TechShowCase from "./TechShowCase";
import ProjectShowCase from "./ProjectShowCase";

export default function index() {
  return (
    <>
      <section className="container w-screen mx-auto">
        <Navbar />
        <HeroSection />
      </section>
      <section className="showcase-pattern">
        <TechShowCase />
      </section>
      <section className="container w-screen mx-auto">
        <ProjectShowCase />
      </section>
    </>
  );
}
