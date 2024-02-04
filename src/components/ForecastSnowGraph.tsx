import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loading from './Loading'

const options = {
  plugins: { 
    legend: {
      labels: {
        color: "black", 
        font: {
          size: 12 
        }
      }
    }
  },
  scales: {
    y: {
      ticks: {
        color: "black",
        font: {
          size: 12
        },
        stepSize: 1,
        beginaAtZero: true
      }
    },
    x: {
      ticks: {
        color: "black",
        font: {
          size: 12
        },
        stepSize: 1,
        beginaAtZero: true
      }
    }
  }
}





const ForecastSnowGraph = ({snowwitch_location_data}) => {
    if (snowwitch_location_data.length == 0) {
        return (
            <div><Loading/></div>
        )
    }
    else {
        let snow_high = (snowwitch_location_data.map(a => a.snow_accumulation[2])).slice(0, 13).reverse()
        let snow = (snowwitch_location_data.map(a => a.snow_accumulation[1])).slice(0, 13).reverse()
        let snow_low = (snowwitch_location_data.map(a => a.snow_accumulation[0])).slice(0, 13).reverse()
        let dateTimes = (snowwitch_location_data.map(a => a.date_time)).slice(0,13).reverse()
        for (let i = 0; i < dateTimes.length; i += 1) {
          let dateTime = dateTimes[i]
          
          if (dateTime.includes("T18:")) {
            dateTimes[i] = dateTime.slice(8, 10)
            dateTimes[i] += " Night"
          } 
          else {
            dateTimes[i] = dateTime.slice(8, 10)
          }}
      
        let labels = dateTimes
        let data = {
          labels,
          options,
          datasets: [
            {
                type: 'bar' as const,
                label: 'Low',
                backgroundColor: '#ffe4ed',
                color: 'black',
                data: snow_low,
                borderColor: 'black',
                borderWidth: 2,
            },
            {
                type: 'bar' as const,
                label: 'Mean',
                backgroundColor: '#DC7BD0',
                color: 'black',
                data: snow,
                borderColor: 'black',
                borderWidth: 2,
              },
            {
                type: 'bar' as const,
                label: 'High',
                backgroundColor: '#ff00a6',
                color: 'black',
                data: snow_high,
                borderColor: 'black',
                borderWidth: 2,
              },
          ],
        };

        return (
            <Bar className='tile-div-row-center'
            data={data}
            options={options}
            />
        )    
    }
}

export default ForecastSnowGraph