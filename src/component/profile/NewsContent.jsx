import React from 'react'

const NewsContent = ({item}) => {
  return (
    <>
    {item.map((items) => (
        <div key={items.id} className="space-y-2 mb-6">


                <p className="text-[12px] text-gray-500">
                  {items.source}
                </p>

                <h4 className="text-[14px] text-[#1E1E1E] leading-snug font-medium">
                  {items.title}
                </h4>
                <p className="text-[12px] text-[#757575] leading-snug font-medium">
                  {items.dis}
                </p>
              </div>
              ))}
    </>
  )
}

export default NewsContent