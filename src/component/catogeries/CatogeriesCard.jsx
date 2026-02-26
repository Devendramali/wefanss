import React from "react";
import { Bookmark, Share2, Plus, Share } from "lucide-react";
import { Link } from "react-router-dom";

const CatogeriesCard = ({ data }) => {
  return (
    <div className={`w-[100%] bg-[#F4FBFF]   rounded-[8px] p-3 space-y-3 ${data.cardcalss}`}>

      {/* Image */}
      <div className="w-full h-[340px] overflow-hidden rounded-lg">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-[340px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-1 space-y-2">

        {/* Name */}
        <h2 className="text-[16px] font-[700] leading-tight text-[#1E1E1E]">
          {data.name}
        </h2>

        {/* Movies & Awards */}
        <p className="text-[#757575] text-[16px] primary-font flex justify-between">
         <span>{data.totalMovies}+ Movies</span>  <span>{data.totalAwards}+ Awards</span> 
        </p>

        {/* Buttons */}
                <div className="mt-6 flex justify-start items-center gap-[10px]">
                  <Link className="px-5 py-2 w-[172px] flex justify-center  rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#4285F4]">follow <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Bookmark color="#4285F4" /></Link>
                  <Link className="px-4 h-[42px] py-2 flex w-fit rounded-[24px] primary-font text-[16px] text-[#fff] items-center gap-2 bg-[#fff]"> <Share color="#4285F4" /></Link>
                </div>

      </div>
    </div>
  );
};

export default CatogeriesCard;
