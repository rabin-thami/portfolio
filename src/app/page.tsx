import AboutMe from "@/app/components/aboutme";
import HeroSection from "@/app/components/herosection";
import Projects from "@/app/components/workshowcase";
import Blog from "@/app/components/blog";
export default function MainPage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
