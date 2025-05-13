import AboutMe from "@/app/components/aboutme";
import HeroSection from "@/app/components/herosection";
import Projects from "@/app/components/workshowcase";
export default function MainPage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
