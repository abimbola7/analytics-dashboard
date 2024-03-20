import React from 'react'
import GreenIcon from "../../../public/icons/green-graph.svg"
import RedIcon from "../../../public/icons/red-graph.svg"
import TrendUp from "../../../public/icons/trending-up.svg"
import TrendDown from "../../../public/icons/trending-down.svg"


const Container = ({ amount, trendIcon, title, icon, trendStatus, percentage }) => {
  return (
    <div className="p-3 bg-white dark:bg-accent border rounded-xl space-y-3 dark:border-gray-700">
      <div className="flex items-center justify-between gap-x-4">
        <div className='border p-2 rounded-full'>
          { icon }
        </div>
        {
          trendStatus === "gain" ? <GreenIcon/> : <RedIcon />
        }
      </div>
      <div className='space-y-1'>
        <p className="text-[#898989]">{title}</p>
        <p className='text-lg'>{amount}</p>
      </div>
      <div className="flex items-center">
        <span className={`px-1 rounded-xl ${ trendStatus === "gain" ? 'bg-[#34CAA5]' : 'bg-[#ED544E]' } bg-opacity-15 flex w-fit items-center space-x-1 py-0.5`}>
          {
            trendStatus === "gain" ? <TrendUp/> : <TrendDown />
          }
          <span className={`text-sm  ${ trendStatus === "gain" ? 'text-[#34CAA5]' : 'text-[#ED544E]' } font-medium`}>{percentage}%</span>
        </span>
        <span className='ml-2 text-[11.5px]'>
          vs. previous month
        </span>
      </div>
    </div>
  )
}

export default Container
