import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Showcase from "./Showcase";
export default function index() {
  return (
    <>
      <section className="container w-screen mx-auto">
        <Navbar />
        <HeroSection />
      </section>
      <section className="showcase-pattern py-10">
        <Showcase />
      </section>
    </>
  );
}
