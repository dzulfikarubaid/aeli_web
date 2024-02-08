import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Spotlight = ({ slides }: any) => {
  function ChildSpotlight({ img, judul, deskripsi }: any) {
    return (
      <div className='flex flex-row gap-10 justify-center'>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='text-4xl font-extrabold'>{judul}</h1>
          <h1>{deskripsi}</h1>
        </div>
        <img className='w-[400px] h-auto' src={img} alt='' />
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center p-10 mt-10  bg-[#FED24D]'>
      <h1 className='mb-10 text-xl'>Spotlight</h1>
      {slides && slides.length > 0 ? ( // Check if slides is defined and not an empty array
        <Swiper
          pagination={{ clickable: true }}  // Enable clickable pagination
          className='h-full w-full'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 8000,
          }}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => isNaN(swiper.realIndex) && swiper.slideTo(0)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide: any, index: any) => (
            <SwiperSlide key={index} className='mb-20'>
              <ChildSpotlight {...slide} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div> {/* Add pagination element here */}
        </Swiper>
      ) : (
        <p>No slides available</p>
      )}
    </div>
  );
};

export default Spotlight;
