import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const MySwiper = () => {
  return (
    <Swiper
  
      className='h-full w-full'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: false,
      }}
      effect='fade'
      fadeEffect={{crossFade: true}}
      onSlideChange={(swiper) =>
        isNaN(swiper.realIndex) && swiper.slideTo(0)
      }
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <div className=''>
          <img className='max-w-full relative min-w-full brightness-50' src="/Foto Pengurus/home2.JPG" alt="" />
          <h1 className='absolute text-4xl font-extrabold w-[400px] text-white left-10 top-1/2'>Bangun Pondasi Dengan Peningkatan Kapasitas Terbaik</h1>
        
          </div>
          
      </SwiperSlide>
      <SwiperSlide>
       <img  className='max-w-full min-w-full brightness-50' src="/Foto Pengurus/home1.JPG" alt="" />
       <h1 className='absolute text-4xl font-extrabold w-[400px] text-white left-10 top-1/2'>AELI Untuk Negeri Bersatu Berjaya</h1>
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default MySwiper;
