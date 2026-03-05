import React from 'react'
import CelebritySlider from '../component/catogeries/CelebritySlider'
import FilterCatogeries from '../component/catogeries/FilterCatogeries'
import Pagination from '../component/Pagination'

const Categories = () => {
  return (
    <>
     <div className=''>
            <ul className='flex gap-2 px-6 py-2 bg-[#4285F4]'>
                <li className='text-[#fff] ptimary-font text-[12px]'><a href="#!">Home</a></li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Celebrites</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Actors</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>-</li>
                <li className='text-[#fff] ptimary-font text-[12px]'>Akshay Kumar</li>
            </ul>


        </div>
        <CelebritySlider/>
        <FilterCatogeries/>
        <Pagination/>
    </>
  )
}

export default Categories