import React from 'react'
import Authbtn from '../component/authcomponent/Authbtn'

const Error = () => {
  return (
      <div className="min-h-screen flex  justify-center items-center p-4 bg-white relative">
            <img src="/authbg.jpg" className='absolute z-0 top-0 w-full left-0 h-full object-cover ' alt="" />
           <div className='relative max-w-[950px] m-auto z-20'>
            <p className='text-[16px] text-[#000000] primary-font text-center md:text-left'>Page 404</p>
              <h1 className='text-[#4285F4] berlin font-[700] md:!leading-[160px] md:text-[200px] text-[64px] text-center md:text-left'>Not Found </h1>
              <div className='mt-6 flex justify-between md:flex-row flex-col gap-3'>
                <input type="text" placeholder='search' className='border-[#D9D9D9] border min-w-[255px] bg-[#F9FAFB] rounded-[8px] p-3 focus:outline-none'/>
                <Authbtn btntext='Return Home' className='!h-[56px] px-5 !text-[20px]' href="/"/>
              </div>
            </div>      
        </div>

  )
}

export default Error