import React from 'react'
import { BiCalendar } from "react-icons/bi";
import moment from 'moment';

const Calendar = () => {
  return (
    <div className='w-full flex items-center space-x-2'>
      <BiCalendar size={20}/>
      <span className="text-sm">
        { moment().format("LL") }
      </span>
    </div>
  )
}

export default Calendar
