import React from 'react'

const Pagination = () => {
  return (
    <>
        <ul className='flex justify-center bg-[#fff] md:gap-2 gap-1 py-[40px]'>
            <li><a href="#!" className='hover:bg-[#4285F4] md:gap-2 gap-1 h-[32px] flex transition-all justify-center items-center primary-font opacity-65 hover:opacity-100 hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6673 7.99992H3.33398M3.33398 7.99992L8.00065 12.6666M3.33398 7.99992L8.00065 3.33325" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className='md:block hidden'>Previous</span></a></li>
            <li><a href="#!" className='bg-[#4285F4] h-[32px] flex justify-center items-center primary-font text-[#fff] text-[16px] min-w-[32px] rounded-[8px]'>1</a></li>
            <li><a href="#!" className='hover:bg-[#4285F4] h-[32px] flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'>2</a></li>
            <li><a href="#!" className='hover:bg-[#4285F4] h-[32px] flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'>...</a></li>
            <li><a href="#!" className='hover:bg-[#4285F4] h-[32px] flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'>67</a></li>
            <li><a href="#!" className='hover:bg-[#4285F4] h-[32px] flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'>68</a></li>
            <li><a href="#!" className='hover:bg-[#4285F4] h-[32px] md:gap-2 gap-1 flex transition-all justify-center items-center primary-font hover:text-[#fff] px-2 text-[16px] min-w-[32px] rounded-[8px]'><span className='md:block hidden'>Next</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33398 7.99992H12.6673M12.6673 7.99992L8.00065 3.33325M12.6673 7.99992L8.00065 12.6666" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a></li>
        </ul>
    </>
  )
}

export default Pagination