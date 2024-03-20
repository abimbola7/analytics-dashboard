"use client"
import React from 'react'
import Chartss from './chart'
import Container from './container'
import Box from "../../../public/icons/box-tick.svg"

const FirstSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
      <div className="bg-white border rounded-xl xl:col-span-2">
        <Chartss />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl">
        <Container 
        icon={<Box/>} 
        amount={350}
        trendStatus={"gain"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        <Container 
        icon={<Box/>} 
        amount={270}
        trendStatus={"loss"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        <Container 
        icon={<Box/>} 
        amount={350000}
        trendStatus={"loss"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        <Container 
        icon={<Box/>} 
        amount={350}
        trendStatus={"gain"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        
      </div>
    </div>
  )
}

export default FirstSection
