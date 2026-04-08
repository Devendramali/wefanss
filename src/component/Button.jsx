import React from 'react'
import { Link } from 'react-router-dom'

const Button = (
    {btntext,btnlink, btnclass}
) => {
  return (
    <>
        <Link to={btnlink}  className={`bg-[#4285F4] px-[30px] font-[500] text-[#FFFFFF] rounded-[100px] justify-center items-center w-fit h-[43px] flex ${btnclass}`}>
            {btntext}
        </Link>
    </>
  )
}

export default Button