"use client"
import React from 'react'
import { TfiAngleDown } from "react-icons/tfi";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const User = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className='flex border py-0.5 rounded-full space-x-3 cursor-pointer items-center px-2'>
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
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          // checked={showStatusBar}
          // onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          // checked={showActivityBar}
          // onCheckedChange={setShowActivityBar}
          // disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          // checked={showPanel}
          // onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default User