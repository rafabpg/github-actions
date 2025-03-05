import { projects } from "../objects/projectMap";
import Card from "./Card";
import Section from "./Section";
import Subtitle from "./Subtitle";
import Carousel from "./Carrousel";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Projects = () => {
  return (
    <Section id="projects" className="sm:px-6 lg:px-8">
      <Subtitle
        className="text-3xl font-bold text-cyan-400 text-center mb-8"
        text="Projects"
      />
      <Carousel
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        navigation
        autoplay
      >
        {projects.map((project: ProjectType) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default Projects;
