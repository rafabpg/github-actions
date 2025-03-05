import { achievements } from "../objects/achievementsMap";
import Card from "./Card";
import Carousel from "./Carrousel";
import Section from "./Section";
import Subtitle from "./Subtitle";

interface AchievementsType {
  title: string;
  description: string;
  image: string;
}

const Achievements = () => {
  return (
    <Section id="achievements" className="sm:px-6 lg:px-8">
      <Subtitle
        className="text-3xl font-bold text-cyan-400 text-center mb-8"
        text="Achievements"
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
        {achievements.map((achieve: AchievementsType) => (
          <Card
            key={achieve.title}
            title={achieve.title}
            description={achieve.description}
            image={achieve.image}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default Achievements;
