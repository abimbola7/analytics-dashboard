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
    <div className=''>
      <div className="flex items-center justify-between px-2">
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
            <TableHead className="border-none w-[300px]">Name</TableHead>
            <TableHead className="border-none text-center ">Date</TableHead>
            <TableHead className="border-none text-center ">Amount</TableHead>
            <TableHead className="border-none text-center ">Status</TableHead>
            <TableHead className="border-none text-center ">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
              hide ? (
                <>
                  {
                    orders && orders.map(item=>(
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-center ">{item.date}</TableCell>
                        <TableCell className="text-center ">{item.amount}</TableCell>
                        <TableCell className={`text-center ${ item.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]" }`}>{item.status}</TableCell>
                        <TableCell className="text-center ">$250.00</TableCell>
                      </TableRow>
                    ))
                  }
                </>
              ) : (
                <>
                  {
                    orders && orders.slice(0, 5).map(item=>(
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-center ">{item.date}</TableCell>
                        <TableCell className="text-center ">{item.amount}</TableCell>
                        <TableCell className={`text-center ${ item.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]" }`}>{item.status}</TableCell>
                        <TableCell className="text-center ">$250.00</TableCell>
                      </TableRow>
                    ))
                  }
                </>
              )
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default Table1
