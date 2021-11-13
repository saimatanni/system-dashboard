import React from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
const RideGraph = () => {
    const state = {
        labels: ['User', 'Ride', 'cng',
                 'Bike', 'Micro'],
        datasets: [
          {
            // label: 'Rainfall',
            backgroundColor: [
              'rgb(255, 188, 0)',
              '#E0B0FF',
              'rgb(10, 207, 151)',
              '#92001B',
              '#6800B4'
            ],
            // borderWidth:7,
            borderHeight:7,
            hoverBackgroundColor: [
            'rgb(255, 188, 3)',
            '#E0B0FF',
            'rgb(10, 207, 151)',
            // '#6800B4',
            '#A6002F',
            '#35014F'
            ],
            data: [65, 59, 30,  81, 56]
          }
        ]
      }
    return (
        <div>
              <Pie
          data={state}
          options={{
            title:{
              display:true,
            //   text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              // position:'right'
            }
          }}
        />
        </div>
    )
}

export default RideGraph
