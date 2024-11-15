import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from "../../assets/images/user.png"

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div></div>
        <div className='text-[#706F6F] font-normal text-[18px] space-x-5'>
            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/about">About</Link>
        </div>
        <div className='flex items-center gap-2'>
            <div>
            <img src={userIcon} alt="" />
            </div>
            <button className='btn btn-neutral rounded-none text-[#FFFFFF] font-semibold text-xl'>Login</button>
        </div>

    </div>
  )
}

export default Navbar