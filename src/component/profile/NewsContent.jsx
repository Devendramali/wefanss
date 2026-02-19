import React from 'react'
import Subheading from '../Subheading'

const NewsContent = ({item}) => {
  return (
    <div className="bg-white rounded-xl p-4 space-y-4 border-[#4285F429] border-b ">
     <Subheading data={item?.title} />
    {item?.items?.map((mediaItem) => (
        <div key={mediaItem.id} className="space-y-2 mb-6">


                <p className="text-[12px] text-gray-500">
                  {mediaItem.source}
                </p>

                <h4 className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
                  {mediaItem.title}
                </h4>
                <p className="text-[12px] text-[#757575] leading-snug font-medium">
                  {mediaItem.dis}
                </p>
              </div>
              ))}
    </div>
  )
}

export default NewsContent