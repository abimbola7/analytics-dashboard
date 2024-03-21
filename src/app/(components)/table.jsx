"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DocumentDownload from "../../../public/icons/document-download.svg"


const Table1 = () => {
  const [ hide, setHide ] = React.useState(false);
  const orders = [
    { id :1, name : "Marcus Bergson", date : "Nov 15 2023", amount : 80000, status : "Paid"  },
    { id :2, name : "Jaydon Vaccaro", date : "Nov 15 2023", amount : 150000, status : "Refund"  },
    { id :3, name : "Corey Schleifer", date : "Nov 14 2023", amount : 87000, status : "Paid"  },
    { id :4, name : "Cooper Press", date : "Nov 14 2023", amount : 100000, status : "Refund"  },
    { id :5, name : "Phillip Lubin", date : "Nov 13 2023", amount : 78000, status : "Paid"  },
    { id :6, name : "Lucas Montgomery", date : "Nov 13 2023", amount : 90000, status : "Refund"  },
    { id :7, name : "Isabella Patel", date : "Nov 12 2023", amount : 180000, status : "Paid"  },
    { id :8, name : "Ethan Santiago", date : "Nov 12 2023", amount : 10000, status : "Paid"  },
    { id :9, name : "Ava Thompson", date : "Nov 12 2023", amount : 380000, status : "Refund"  },
    { id :10, name : "Benjamin Foster", date : "Nov 11 2023", amount : 4000, status : "Paid"  },

  ]
  console.log(hide)
  return (
    <div className='flex-grow transition-transform duration-200'>
      <div className="flex items-center justify-between px-2 transition-transform duration-200">
        <h2 className="font-semibold text-md">Last Orders</h2>
        <button 
        className='px-2 py-1 text-[#34CAA5] focus:outline-none'
        onClick={()=>setHide(prev=>!prev)}
        >
          { hide ? "Hide" : "See All" }
        </button>
      </div>
      <Table className="border-none">
        <TableHeader className="">
          <TableRow className="">
            <TableHead className="">Name</TableHead>
            <TableHead className="border-none  ">Date</TableHead>
            <TableHead className="border-none  ">Amount</TableHead>
            <TableHead className="border-none  ">Status</TableHead>
            <TableHead className="border-none  ">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            orders && orders.slice(0, hide ? orders.length : 5).map(item=>(
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className=" ">{item.date}</TableCell>
                <TableCell className=" ">${item.amount.toLocaleString()}</TableCell>
                <TableCell className={` ${ item.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]" }`}>{item.status}</TableCell>
                <TableCell className="flex items-center cursor-pointer">
                  <DocumentDownload />
                  <span className='ml-2'>View</span>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default Table1
