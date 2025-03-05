import About from "../components/About";
import Achievements from "../components/Achivements";
import Projects from "../components/Projects";
import Section from "../components/Section";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <Section className="px-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
      <About />
      <Achievements />
      <Projects />
      <Skills />
    </Section>
  );
};

export default Home;
