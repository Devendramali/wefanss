import React from 'react'
import { Link } from 'react-router-dom'

const Button = (
    {btntext}
) => {
  return (
    <>
        <Link className='bg-[#4285F4] px-[30px] text-[#FFFFFF] rounded-[100px] justify-center items-center w-fit h-[43px] flex'>
            {btntext}
        </Link>
    </>
  )
}

export default Button