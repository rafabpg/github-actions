import { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

interface CarouselProps {
  children: ReactNode;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };
  navigation?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
}

const Carousel = ({
  children,
  slidesPerView = 2,
  spaceBetween = 20,
  breakpoints,
  navigation = true,
  pagination = false,
  autoplay = true,
}: CarouselProps) => {
  const showNavigation = window.innerWidth >= 1024 && navigation;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={showNavigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000 } : false}
      breakpoints={breakpoints}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="py-1 lg:py-3 lg:px-3">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
