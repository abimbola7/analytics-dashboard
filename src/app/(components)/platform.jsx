"use client"
import { Progress } from "@/components/ui/progress"
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


const Platform = () => {
  const progressBar = (number) => (number / 5000000) * 100 
  const platform = [
    { platform  : "Book Bazaar",  progress : progressBar(2500000), price : 2500000},
    { platform  : "Artisan Aisle",  progress : progressBar(1800000), price : 1800000},
    { platform  : "Toy Troop",  progress : progressBar(1200000), price : 1200000},
    { platform  : "X Store",  progress : progressBar(600000), price: 600000},
  ] 

  console.log(platform)

  const [progress, setProgress] = React.useState(13)
  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])
  
  const calculateProgress = () => (2500000 / 5000000) * 100;

  return (
    <div className={`grid grid-cols-${platform.length} gap-5`}>
      {
        platform.map((item, i)=>(
          <div key={i} className="w-full space-y-3">
            <h2 className="font-semibold text-xl">{item.platform}</h2>
            <Progress value={item.progress} className="w-full" color={"bg-blue-500"}/>
            <p>${item.price.toLocaleString()}</p>
            {/* <ProgressBar completed={calculateProgress} /> */}
          </div>
        ))
      }
    </div>
  )
}

export default Platform
