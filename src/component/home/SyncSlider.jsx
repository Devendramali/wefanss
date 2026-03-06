import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export default function SyncSlider() {

  const thumbRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
    {
      id: 1,
      img: "/celebrities/modi.jpg",
      title: "Modi ji",
      dis: "Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 2,
      img: "/celebrities/akshay.jpg",
      title: "Akshay",
      dis: "Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 3,
      img: "/celebrities/salman.jpg",
      title: "Salman",
      dis: "Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
    {
      id: 4,
      img: "/celebrities/1.png",
      title: "Crids",
      dis: "Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link: "",
    },
  ];

  return (
    <div className="w-full px-5 flex items-center justify-center bg-blue-500 py-16">
      <div className="grid grid-cols-12 gap-8">

        {/* IMAGE SLIDER */}
        <div className="col-span-12 md:col-span-6">

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            speed={800}
            autoplay={{
              delay: 3000,
                 disableOnInteraction: false,
              reverseDirection: true,
            }}
             breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }}
            onSlideChange={(swiper) => {

              const real = swiper.realIndex
              setActiveIndex(real)

              if (thumbRef.current) {
                thumbRef.current.slideToLoop(real)
              }

            }}
          >

            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="rounded-xl h-[550px] overflow-hidden">
                  <img
                    src={slide.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* TEXT */}
        <div className="col-span-12 md:col-span-5">

          <h2 className="text-[48px] text-white mb-[40px]">
            {slides[activeIndex].title}
          </h2>

          <p className="text-[24px] text-white">
            {slides[activeIndex].dis}
          </p>

          <Link
            to="#"
            className="mt-[70px] block py-[10px] rounded-[100px] bg-[#FFFFFF33] text-[16px] text-white border border-white w-fit px-[20px]"
          >
            Know More
          </Link>

        </div>

      </div>
    </div>
  );
}