"use client"
import React from 'react'
import Chartss from './chart'
import Container from './container'
import Box from "../../../public/icons/box-tick.svg"
import Rotate from "../../../public/icons/3d-rotate.svg"
import Shopping from "../../../public/icons/shopping-cart.svg"
import Coin from "../../../public/icons/coin.svg"

const FirstSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
      <div className="bg-white dark:bg-accent border dark:border-gray-700 rounded-xl xl:col-span-2">
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
        icon={<Rotate/>} 
        amount={270}
        trendStatus={"loss"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        <Container 
        icon={<Shopping/>} 
        amount={350000}
        trendStatus={"loss"}
        percentage={23.5}
        title={"Total Order"}
        key={1}
        />
        <Container 
        icon={<Coin />} 
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
