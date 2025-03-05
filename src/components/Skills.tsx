import Carousel from "./Carrousel";
import SkillCard from "./SkillCard";
import Section from "./Section";
import Subtitle from "./Subtitle";
import { skillsMap } from "../objects/skillMap";

interface SkillType {
  name: string;
  icon: any;
}

const Skills = () => {
  return (
    <Section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
      <Subtitle
        className="text-2xl sm:text-3xl font-bold text-cyan-400 text-center mb-8"
        text="Skills"
      />
      <Carousel
        slidesPerView={1}
        spaceBetween={10}
        autoplay
        breakpoints={{
          360: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1200: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {skillsMap.map((skill: SkillType) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </Carousel>
    </Section>
  );
};

export default Skills;
