import Intro from "@/components/Intro";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Experience from "@/components/experieces";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <Intro></Intro>
      <SectionDivider />
      <AboutUs />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
