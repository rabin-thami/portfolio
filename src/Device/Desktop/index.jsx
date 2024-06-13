import Navbar from "./Navbar";
import HeroSection from "./Hero";
export default function DesktopComponents() {
  return (
    <section className="container mx-auto my-2">
      <Navbar />
      <section className="container max-w-5xl mx-auto">
        <HeroSection />
      </section>
    </section>
  );
}
