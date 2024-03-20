"use client"
import React from 'react'
import Table1 from './table'
import Platform from './platform'

const SecondSection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 mt-4'>
      <div className="rounded-xl bg-white p-3 flex flex-col h-fit w-full sm:w-1/2 xl:w-[67%] border">
        <Table1 />
      </div>
      <div className="p-3 rounded-xl bg-white h-fit w-full sm:w-1/2 xl:w-[33%] border">
        <Platform />
      </div>
    </div>
  )
}

export default SecondSection
