"use client"
import React from 'react'
import ReactApexChart from "react-apexcharts"

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
            borderRadius : 17,
            borderRadiusApplication : "end"
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
    <ReactApexChart options={options.options} series={options.series} type="bar" height={350}/>
  );
}

export default Chartss
