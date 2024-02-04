import React, { MouseEvent, useRef } from 'react';
import type { InteractionItem } from 'chart.js';
import Loading from './Loading'

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
} from 'chart.js';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
);

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




const HourlyTempGraph = ({nws_location_hourly_data}) => {
    if (Object.keys(nws_location_hourly_data).length == 0) {
        return (
            <div><Loading/></div>
        )
    }
    else {
        let periodTemps = nws_location_hourly_data.properties.periods
        let result = periodTemps.map(a => a.temperature);
        const slicedresult = result.slice(0, 24);
        const temps = slicedresult
    
        let times = periodTemps.map(a => a.startTime);
        for (let i = 0; i < times.length; i++) {
        times[i] = times[i].substring(11, 16);
        }
    
        let labels = times.slice(0, 24)
    
        let data = {
        labels,
        datasets: [
            {
            type: 'line' as const,
            label: 'Temperature (F)',
            borderColor: '#DC7BD0',
            borderWidth: 2,
            fill: false,
            data: temps,
            },
        ],
        };
    
        return (
            <Chart className='tile-div-row-center'
            type='line'
            data={data}
            options={options}
            />
        )

    }
  
}

export default HourlyTempGraph