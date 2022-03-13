import { FC, ReactElement } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface SliderProps
  extends Omit<SwiperProps, 'breakpoints' | 'slidesPerView' | 'modules'> {
  slides: ReactElement[];
}

const Slider: FC<SliderProps> = ({ slides, spaceBetween = 30, ...props }) => {
  const getSlidesPerView = (max: number): number => {
    return slides.length > max ? max : slides.length;
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: getSlidesPerView(2),
          },
          768: {
            slidesPerView: getSlidesPerView(3),
          },
          1024: {
            slidesPerView: getSlidesPerView(4),
          },
          1280: {
            slidesPerView: getSlidesPerView(5),
          },
          1536: {
            slidesPerView: getSlidesPerView(6),
          },
        }}
        {...props}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`slide-${slide.key || Math.random()}`}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
