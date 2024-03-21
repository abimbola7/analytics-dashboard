"use client"
import React from 'react'
import { TfiAngleDown } from "react-icons/tfi";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="custom" size="dropdown">
          <div className='flex border dark:border-gray-700 py-0.5 rounded-full space-x-3 cursor-pointer items-center px-2 ring-0 focus:ring-0'>
            <div className='w-10 h-10 flex items-center'>
              <img src='/images/profile.png' className='rounded-full w-9 h-9'/>
            </div>
            <div className='hidden sm:block'>
              <p className='text-md'>Justin Bergson</p>
              <p className='text-sm text-[#787486]'>Justin@gmail.com</p>
            </div>
            <TfiAngleDown size={14}/>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#fafafa] dark:bg-accent max-w-2xl">
        <DropdownMenuLabel>Hello Justin</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        >
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem
        >
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuItem
        className="text-red-500"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default User