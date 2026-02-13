import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";

export default function SyncSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    { 
      id: 1,
      img: "/celebrities/1.jpg",
      title:"Trivia",
      dis:"Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link:""
     },
    { id: 2, img: "/celebrities/2.jpg" ,
        title:"Trivia",
      dis:"Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link:""
    },
    { id: 3, img: "/celebrities/3.jpg",
        title:"Trivia",
      dis:"Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link:""
     },
    { id: 4, img: "/celebrities/1.jpg",  title:"Trivia",
      dis:"Jennifer Lopez's iconic green Versace dress from the 2000 Grammy Awards was so popular that it led to the creation of Google Images because people couldn't find photos of it online",
      link:"" },
  ];

  return (
    <div className="w-full  px-5 flex items-center justify-center bg-blue-500 py-16">
      <div className=" grid grid-cols-12 gap-8">
      {/* THUMB SLIDER (LEFT TO RIGHT LOOP) */}
        <div className="col-span-12 md:col-span-6">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={15}
            watchSlidesProgress
            slideToClickedSlide
            loop={true}
            centeredSlides={true}
            initialSlide={0}
            className="mt-6 slider1"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={`${slide.img}?auto=format&fit=crop&w=300&q=80`}
                    className="w-full h-full object-cover img12"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MAIN SLIDER */}
        <div className="col-span-12 md:col-span-5">
          <Swiper
            modules={[Thumbs, Autoplay, EffectFade, Pagination, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className=""
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="textim">
                  <h2 className="berlin text-[48px] text-[#fff] mb-[60px]">{slide.title}</h2>
                  <p className="primary-font text-[24px] text-[#fff]">{slide.dis}</p>
                  <Link className="mt-[70px] block py-[10px] rounded-[100px] bg-[#FFFFFF33] text-[16px] text-[#fff] border-[1px] border border-[#fff] w-fit px-[20px]">Know More</Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        

      </div>
    </div>
  );
}
