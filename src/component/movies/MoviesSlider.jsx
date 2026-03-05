import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const MoviesSlider = ({ data }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState({});

  const handleChange = (id, season) => {
    setSelectedSeason((prev) => ({
      ...prev,
      [id]: season,
    }));
  };

  return (
    <>
      <div className={`py-[60px] md:px-[30px] px-5 ${data?.mainclass}`}>
        <h3 className="berlin text-[36px] text-[#1E1E1E]">{data?.title}</h3>

        <div className="w-full mt-[30px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            centeredSlides={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
                  <div className="transition-all duration-500">

                    {/* Image */}
                    <div className="relative sldieimh rounded-xl overflow-hidden">

                      <img
                        src={movie.img}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-xl"
                      />

                      {/* Play Button */}
                      <button className="absolute inset-0 flex items-center justify-center">

                        <svg width="47" height="45" viewBox="0 0 47 45" fill="none">
                          <rect width="46.4" height="44.8" rx="22.4" fill="white" fillOpacity="0.8"/>
                          <path d="M18.7682 14.7521C17.3282 13.9281 16.1602 14.6001 16.1602 16.2641V28.5361C16.1602 30.2001 17.3282 30.8721 18.7682 30.0481L29.4962 23.8961C30.9362 23.0961 30.9362 21.7281 29.4962 20.9041L18.7682 14.7521Z" fill="#4285F4"/>
                        </svg>

                      </button>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between mt-3">

                      <h3 className="text-[20px] text-[#1E1E1E] font-[400] berlin">
                        {movie.title}
                      </h3>

                      {/* Info Button */}
                      <button
                        onClick={() => {
                          setSelectedItem1(movie);
                          setOpen1(true);
                        }}
                        className="text-gray-500 hover:cursor-pointer"
                      >

                        <svg width="24" height="24" fill="none">
                          <path
                            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#303030"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                      </button>

                    </div>

                    {/* Description */}
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


      {/* Popup */}
      {open1 && selectedItem1 && (

        <div className="fixed inset-0 flex items-center justify-center z-50">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen1(false)}
          ></div>

          {/* Popup Content */}
          <div className="relative w-[95%] h-[95%] overflow-y-auto rounded-[12px] shadow-xl">

            {/* Close */}
            <button
              onClick={() => setOpen1(false)}
              className="absolute top-6 right-6 z-10 text-white text-2xl"
            >
              ✕
            </button>

            {/* Banner */}
            <div className="min-h-[100vh] flex items-end relative overflow-hidden">

              <img
                src={selectedItem1.img}
                alt={selectedItem1.name}
                className="absolute w-full h-full object-cover"
              />

              <div className="relative z-20 max-w-[800px] p-6 md:ml-[50px] md:mb-[40px] bg-[#00000080] backdrop-blur rounded-[16px]">

                <h2 className="berlin text-[48px] text-white">
                  {selectedItem1.name}
                </h2>

                {/* Meta */}
                <div className="text-white flex gap-4 flex-wrap mt-3">

                  <span>{selectedItem1.year}</span>
                  <span>{selectedItem1.status}</span>
                  <span>{selectedItem1.platform}</span>
                  <span>{selectedItem1.category}</span>

                </div>

                {/* Language */}
                <p className="text-white mt-2">
                  {selectedItem1.language?.join(" / ")}
                </p>

                {/* Ratings */}
                <div className="flex gap-4 mt-3">

                  {selectedItem1.rating?.map((r, i) => (

                    <div key={i} className="flex items-center gap-2 text-white">
                      <img src={r.img} alt="" />
                      <span>{r.site}</span>
                      <span>{r.per}/10</span>
                    </div>

                  ))}

                </div>

                {/* Season */}
                {selectedItem1?.season && (

                  <div className="flex items-center gap-3 mt-4">

                    <select
                      value={
                        selectedSeason[selectedItem1.id] ||
                        Object.keys(selectedItem1.season)[0]
                      }
                      onChange={(e) =>
                        handleChange(selectedItem1.id, e.target.value)
                      }
                      className="bg-black/40 text-white px-3 py-2 rounded"
                    >

                      {Object.entries(selectedItem1.season).map(
                        ([key], index) => (

                          <option key={index} value={key}>
                            {key.replace("season", "Season ")}
                          </option>

                        )
                      )}

                    </select>

                    <p className="text-white">

                      {
                        selectedItem1.season[
                          selectedSeason[selectedItem1.id] ||
                            Object.keys(selectedItem1.season)[0]
                        ]?.totalEp
                      }{" "}
                      Episodes

                    </p>

                  </div>

                )}

                {/* Description */}
                <p className="text-white mt-6">
                  {selectedItem1.dis}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <button className="text-white border border-white px-6 h-[48px] rounded">
                    More Details
                  </button>

                  <Link className="text-white bg-[#4285F4] px-6 h-[48px] flex items-center rounded-full">
                    Watch Now
                  </Link>

                </div>

                {/* Cast */}
                <div className="mt-6">

                  <h3 className="text-white text-[24px] berlin">Cast</h3>

                  <p className="text-white mt-2">
                    {selectedItem1.cast}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default MoviesSlider;