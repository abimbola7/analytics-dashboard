import React from 'react'
import Searchbar from './searchbar'
import Calendar from './calendar'
import { HiOutlineBell } from "react-icons/hi2";
import User from './user';
import { inter } from '../fonts';

const Header = () => {
  return (
    <header className={`w-full flex items-center px-1 bg-[#FAFAFA] dark:bg-accent sticky top-0 z-[50] ${inter.className}`}>
      <nav className="flex items-center justify-between mx-auto py-4 max-w-[97%] w-full">
        <div className="">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Searchbar />
          <Calendar />
          <div className="rounded-full p-1 border cursor-pointer">
            <HiOutlineBell size={20} className=""/>
          </div>
          <User />
        </div>
      </nav>
    </header>
  )
}

export default Header
