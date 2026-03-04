import React from 'react'

const Gallery = () => {
    const gallery=[
        {
            id:1,
            img:"/public/gallery/1.png"
        },
        {
            id:2,
            img:"/public/gallery/2.png"
        },
        {
            id:3,
            img:"/public/gallery/3.png"
        },
        {
            id:4,
            img:"/public/gallery/4.png"
        },
        {
            id:5,
            img:"/public/gallery/5.png"
        },
        {
            id:6,
            img:"/public/gallery/6.png"
        },
        {
            id:7,
            img:"/public/gallery/7.png"
        },
        {
            id:9,
            img:"/public/gallery/4.png"
        },
        
        {
            id:8,
            img:"/public/gallery/8.png"
        },
        
        {
            id:10,
            img:"/public/gallery/1.png"
        },
          {
            id:6,
            img:"/public/gallery/6.png"
        },
        {
            id:9,
            img:"/public/gallery/9.png"
        },
    ]
  return (
    <>
         <div className=''>
            <ul className='flex gap-3 px-6 py-2 bg-[#4285F4]'>
                <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Celebrites</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Actors</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Akshay Kumar</li>
            </ul>


        </div>
        <div className="py-[60px]">
            <h1 className='text-[64px] berlin text-[#1E1E1E] text-center'>Akshaye Kumar Gallery</h1>

            <div className='flex flex-wrap gap-3 mt-12  max-w-[1210px] m-auto px-6' >
                {
                    gallery.map((item)=>(
                        <figure key={item.id} className='md:w-auto w-[100%]'>
                            <img src={item.img} className='w-[100%]' alt="" />
                        </figure>
                    ))
                }
                
            </div>
        </div>
    
    </>
  )
}

export default Gallery