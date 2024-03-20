import React from 'react'
import Table1 from './table'
import Platform from './platform'

const SecondSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-4'>
      <div className="xl:col-span-2 rounded-xl bg-white p-3">
        <Table1 />
      </div>
      <div className="border p-3 rounded-xl">
        <Platform />
      </div>
    </div>
  )
}

export default SecondSection
