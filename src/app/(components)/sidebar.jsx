"use client"

import React from 'react'
import { useTheme } from "next-themes"

const SideBar = ({ className }) => {
  // const [ theme, setTheme ] = React.useState('light')
  const { theme, setTheme } = useTheme()
  console.log(theme)
  return (
    <div className={`w-16 flex-col justify-between h-screen bg-[#F7F8FA] dark:bg-accent py-2 sticky top-0 left-0 ${ className }`}>
      <div className='justify-items-center flex flex-col items-center'>
        <div className="py-3">
          <img src='images/Vector.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/category.png' className='w-7 cursor-pointer dark:brightness-150'/>
        </div>
        <div className="py-3">
          <img src='images/trend-up.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/profile-2user.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/box.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/discount-shape.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/info-circle.png' className='w-7 cursor-pointer'/>
        </div>

        <div className="py-2 row-span-2 border rounded-full flex flex-col w-[55%] h-[4.7rem] relative items-center justify-between">
          <div 
          className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center bg-[#34CAA5] dark:bg-[#4d8f7e] z-[1] duration-200 transition-transform  ${theme === 'light' ? 'translate-y-[0%]' : 'translate-y-[2.5rem]'}`}
          />
          <div className='relative z-[2]'>
            <img src="images/brightness 1.png" onClick={()=>setTheme("light")} className='w-4 cursor-pointer'/>
          </div>
          <div className='relative z-[2]'>
            <img src="images/moon 1.png" onClick={()=>setTheme("dark")}  className='w-4 cursor-pointer dark:brightness-200'/>
          </div>
        </div>
      </div>
    
      <div className="flex flex-col items-center justify-center">
        <div className="py-3">
            <img src='images/box.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/discount-shape.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/info-circle.png' className='w-7 cursor-pointer'/>
          </div>
        </div>
    </div>
  )
}

export default SideBar