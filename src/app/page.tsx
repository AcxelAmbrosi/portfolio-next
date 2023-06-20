import { AboutMe } from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WelcomeBack from "@/components/WelcomeBack";
export default function Home() {

  return (
    <div className="w-screen">
      <WelcomeBack />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  );
}
