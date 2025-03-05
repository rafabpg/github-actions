import { motion } from "framer-motion";
import Section from "./Section";
import Subtitle from "./Subtitle";

const About = () => {
  return (
    <Section
      id="about"
      className="py-16 px-4 sm:px-8 flex flex-col justify-center lg:flex-row items-center gap-12 text-center lg:text-left bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <motion.img
        src="minha-foto.jpg"
        alt="Minha Foto"
        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full border-4 border-pink-500 shadow-3d hover:shadow-3d-hover transition-shadow duration-500"
        whileHover={{ scale: 1.1, rotate: 3 }}
      />

      <div className="max-w-lg sm:max-w-xl">
        <Subtitle
          className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold lg:text-left bg-gradient-to-r from-pink-500 via-purple-900 to-blue-500 text-transparent bg-clip-text mb-4"
          text="About"
        />
        <p className="text-gray-200 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          Sou um{" "}
          <strong className="text-cyan-400">desenvolvedor Full Stack</strong>,
          apaixonado por criar interfaces modernas e experiências digitais
          fluidas. Minha missão é usar tecnologias como{" "}
          <strong className="text-green-400">React</strong> e
          <strong className="text-pink-500"> Node.js</strong> para construir
          soluções elegantes, inovadoras e de alto desempenho.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-gradient-to-r from-cyan-400 via-green-400 to-pink-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-3d"
        >
          Meus Projetos
        </a>
      </div>
    </Section>
  );
};

export default About;
