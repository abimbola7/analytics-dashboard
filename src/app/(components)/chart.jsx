"use client"
import React from 'react'
// import ReactApexChart from "react-apexcharts"
import dynamic from "next/dynamic"

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chartss = () => {
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
      data: data
    }],
    options: {
      yaxis : {
        stepSize : 10000
      },
      grid: {
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
        }
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
          show: false
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
          <div className="">

          </div>
        </div>
      </div>
          <ReactApexChart 
          className=""
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
