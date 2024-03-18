import React from 'react'
import Chartss from './chart'

const FirstSection = () => {
  return (
    <div className='grid grid-cols-2 p-4 gap-5'>
      <div className="border bg-white rounded-xl">
        <Chartss />
      </div>
      <div className="border rounded-xl bg-white grid grid-rows-2 gap-3"></div>
    </div>
  )
}

export default FirstSection
