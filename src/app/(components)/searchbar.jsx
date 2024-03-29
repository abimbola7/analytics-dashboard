"use client"

import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ className }) => {
  const [ search, setSearch ] = React.useState('')
  return (
    <form className={`relative p-2 border rounded-full shadow text-gray-600 bg-white dark:bg-accent ${className} dark:border-gray-700`}>
      <div className="absolute">
        <CiSearch 
        size={20}
        className="text-lightgray"
        />
      </div>
      <input 
      type="text" 
      className="focus:outline-none ml-7 bg-white dark:bg-accent text-gray-400" 
      value={search}
      placeholder='Search'
      onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  )
}

export default Searchbar
