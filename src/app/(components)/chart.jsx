"use client"
import React from 'react'
import "./chart.css"
import dynamic from "next/dynamic"
import { theme } from "next-themes"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chartss = () => {

  console.log(theme)
  const [ date, setDate ] = React.useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ])
  const [ data, setData ] = React.useState([
    7500, 18000, 3000, 30000, 10000, 45000, 10000, 23000, 35000, 5000,30000, 25000,
  ])
  const options  = {
    series: [{
      name : "Sales Trend",
      data: data
    }],
    options: {
      tooltip : {
        enabled : true,
      },
      yaxis : {
        stepSize : 10000
      },
      grid: {
        borderColor : "#808080",
        show: true,
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: true,
          },

        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      chart: {
        height: 250,
        type: 'bar',
        toolbar : {
          show : false
        },
        foreColor : '#808080'
        },
        // colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '75%',
            borderRadius : 10,
            borderRadiusApplication : "end",

          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: date,
          labels: {
            style: {
              // colors: colors,
              fontSize: '12px'
            }
          }
        },
      },
  }
  return (
    <div className='sm:p-4'>
      <div className="flex items-center justify-between text-sm p-4">
        <h1 className='font-semibold'>Sales Trends</h1>
        <div className='flex items-center space-x-3'>
          <span>
            Sort by : 
          </span>
          <Select className="">
            <SelectTrigger className="w-[100px] rounded-3xl">
              <SelectValue placeholder="Yearly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
          <ReactApexChart 
          options={
            {
              ...options.options,
              fill: {
                type: "gradient",
                gradient: {
                  type: "vertical",
                  shadeIntensity: 1,
                  opacityFrom: 0.2,
                  opacityTo: 1,
                  colorStops: [
                    [
                      {
                        offset: 0,
                        color: "#34CAA5",
                        opacity: 1,
                      },
                      {
                        offset: 100,
                        color: "#ddf7f0",
                        opacity: 1,
                      },
                    ],
                  ],
                },
              },
            }
          } 
          series={options.series} 
          type="bar" 
          width={"100%"}
          height={270}
          />
    </div>
  );
}

export default Chartss
