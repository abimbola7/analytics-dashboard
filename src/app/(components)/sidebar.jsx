"use client"

import React from 'react'

const SideBar = ({ className }) => {
  const [ theme, setTheme ] = React.useState('light')
  console.log(theme)
  return (
    <div className={`w-16 flex-col justify-between h-[95vh] bg-[#F7F8FA] py-2 ${ className }`}>
      <div className='justify-items-center flex flex-col items-center'>
        <div className="py-3">
          <img src='images/Vector.png' className='w-7 cursor-pointer'/>
        </div>
        <div className="py-3">
          <img src='images/category.png' className='w-7 cursor-pointer'/>
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
          className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center bg-[#34CAA5] z-[1] duration-200 transition-transform  ${theme === 'dark' ? 'translate-y-[2.5rem]' : 'translate-y-[0%]'}`}
          />
          <div className='relative z-[2]'>
            <img src="images/brightness 1.png" onClick={()=>setTheme("light")} className='w-4 cursor-pointer'/>
          </div>
          <div className='relative z-[2]'>
            <img src="images/moon 1.png" onClick={()=>setTheme("dark")}  className='w-4 cursor-pointer'/>
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