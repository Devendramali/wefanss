import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



const MoviesSlider = ({data}) => {
   const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className={`py-[60px] md:px-[30px] px-5 ${data.mainclass}`}>
        <h3 className="berlin text-[36px] text-[#1E1E1E]">{data?.title}</h3>

         <div className="w-full  mt-[30px] ">
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data?.movies?.map((movie, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={movie.id}>
              <div
                className={`transition-all duration-500`}
              >
                <div className="relative sldieimh rounded-xl overflow-hidden">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-full   object-cover rounded-xl"
                  />

               
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="46.4" height="44.8" rx="22.4" fill="white" fill-opacity="0.8"/>
                        <g clip-path="url(#clip0_1130_1498)">
                        <path d="M18.7682 14.7521C17.3282 13.9281 16.1602 14.6001 16.1602 16.2641V28.5361C16.1602 30.2001 17.3282 30.8721 18.7682 30.0481L29.4962 23.8961C30.9362 23.0961 30.9362 21.7281 29.4962 20.9041L18.7682 14.7521Z" fill="#4285F4"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1130_1498">
                        <rect width="16" height="16" fill="white" transform="translate(15.1992 14.3999)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                 
                </div>

                <div className="flex items-center justify-between mt-3">
                  <h3 className="text-[20px] text-[#1E1E1E] font-[400] berlin">
                    {movie.title}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>

                {isActive && (
                  <p className="text-[#757575] text-[16px] primary-font mt-2">
                    {movie.desc}
                  </p>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>


    </div>
    </>
  )
}

export default MoviesSlider