"use client"
import { Progress } from "@/components/ui/progress"
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


const Platform = () => {
  const [progress, setProgress] = React.useState(0)  
  const progressBar = (number) => (number / 5000000) * 100;
  const [ showProgress, setShowProgress ] = React.useState(false);
  const platform = [
    { platform  : "Book Bazaar",  progress : progressBar(2500000), price : 2500000, rate : 15},
    { platform  : "Artisan Aisle",  progress : progressBar(1800000), price : 1800000, rate : 10},
    { platform  : "Toy Troop",  progress : progressBar(1200000), price : 1200000, rate : 8},
    { platform  : "X Store",  progress : progressBar(600000), price: 600000, rate : 5},
    { platform  : "Book Bazaar",  progress : progressBar(2500000), price : 2500000, rate : 15},
    { platform  : "Artisan Aisle",  progress : progressBar(1800000), price : 1800000, rate : 10},
    { platform  : "Toy Troop",  progress : progressBar(1200000), price : 1200000, rate : 8},
    { platform  : "X Store",  progress : progressBar(600000), price: 600000, rate : 5},
  ] 


  return (
    <div className={`grid grid-flow-row w-full gap-5`}>
      <div className="flex items-center justify-between px-2">
        <h2 className="font-semibold text-md">Top Platform</h2>
        <button 
        className='px-2 py-1 text-[#34CAA5] focus:outline-none'
        onClick={()=>setShowProgress(prev=>!prev)}
        >
          { showProgress ? "Hide" : "See All" }
        </button>
      </div>
      {
        platform.slice(0,showProgress ? progress.length : 4).map((item, i)=>(
          <div key={i} className="w-full space-y-3">
            <h2 className="font-semibold text-xl">{item.platform}</h2>
            <Progress 
            value={item.progress || progress} 
            className="w-full transition-all duration-1000" 
            color={`${
              item.progress >= 50 ? "bg-[#6160DC]" : 
              item.progress >= 30 ? "bg-[#54C5EB]" : 
              item.progress >= 20 ? "bg-[#FFB74A]" : 
              "bg-[#FF4A55]"
            }`}/>
            <div className="text-[#525252] tracking-wide flex justify-between items-center">
              <p className="">${item.price.toLocaleString()}</p>
              <p>+{item.rate}%</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Platform
