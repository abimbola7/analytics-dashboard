"use client"
import React from 'react'
import { TfiAngleDown } from "react-icons/tfi";

const User = () => {
  return (
    <div className='flex border py-1 rounded-full space-x-3 cursor-pointer items-center px-2'>
      <div className='w-10 h-10'>
        <img src='/images/profile.png' className='rounded-full w-10 h-10'/>
      </div>
      <div className=''>
        <p className='text-md'>Justin Bergson</p>
        <p className='text-sm text-[#787486]'>Justin@gmail.com</p>
      </div>
      <TfiAngleDown size={16}/>
    </div>
  )
}

export default User