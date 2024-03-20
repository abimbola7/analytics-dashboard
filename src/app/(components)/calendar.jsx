import React from 'react'
import { BiCalendar } from "react-icons/bi";
import moment from 'moment';

const Calendar = ({ className }) => {
  return (
    <>
      <div className={`w-full items-center space-x-2 hidden md:flex`}>
        <BiCalendar size={20}/>
        <span className="text-sm">
          { moment().format("LL") }
        </span>
      </div>
    </>
  )
}

export default Calendar
