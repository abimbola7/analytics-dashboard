"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CgMenuRight } from "react-icons/cg";
import { useTheme } from "next-themes";

export function Hamburger() {
  const { theme, setTheme } = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="custom" size="icon" className="border-none">
          {/* <HamburgerMenuIcon width={16} height={16} className=""/> */}
          <CgMenuRight size={20}/>
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-card" variants={"left"}>
        <div className="flex flex-col justify-between h-full">
          <div className='justify-items-center flex flex-col items-center'>
          <div className="py-3">
            <img src='images/Vector.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/category.png' className='w-7 cursor-pointer dark:brightness-150'/>
          </div>
          <div className="py-3">
            <img src='images/trend-up.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/profile-2user.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/box.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/discount-shape.png' className='w-7 cursor-pointer'/>
          </div>
          <div className="py-3">
            <img src='images/info-circle.png' className='w-7 cursor-pointer'/>
          </div>

          <div className="py-2 row-span-2 border rounded-full flex flex-col w-[80%] h-[4.7rem] relative items-center justify-between">
            <div 
            className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center bg-[#34CAA5] dark:bg-[#4d8f7e] z-[1] duration-200 transition-transform  ${theme === 'dark' ? 'translate-y-[2.5rem]' : 'translate-y-[0%]'}`}
            />
            <div className='relative z-[2]'>
              <img src="images/brightness 1.png" onClick={()=>setTheme("light")} className='w-4 cursor-pointer'/>
            </div>
            <div className='relative z-[2]'>
              <img src="images/moon 1.png" onClick={()=>setTheme("dark")}  className='w-4 cursor-pointer dark:brightness-200'/>
            </div>
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center">
          <div className="py-3">
              <img src='images/box.png' className='w-7 cursor-pointer'/>
            </div>
            <div className="py-3">
              <img src='images/discount-shape.png' className='w-7 cursor-pointer'/>
            </div>
            <div className="py-3">
              <img src='images/info-circle.png' className='w-7 cursor-pointer'/>
            </div>
          </div>
      </div>
      </SheetContent>
    </Sheet>
  )
}
