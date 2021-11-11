import React from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
const RideGraph = () => {
    const state = {
        // labels: ['E-mail', 'Direct', 'Affiliate',
        //          'Sponsored'],
        datasets: [
          {
            // label: 'Rainfall',
            backgroundColor: [
              'rgb(255, 188, 0)',
              'rgb(114, 124, 245)',
              // 'rgb(10, 207, 151)',
              // 'rgb(250, 92, 124)',
              '#6800B4'
            ],
            borderWidth:7,
            borderHeight:7,
            hoverBackgroundColor: [
            'rgb(255, 188, 3)',
            'rgb(114, 124, 244)',
            '#6800B4',
            'rgb(250, 92, 123)',
            '#35014F'
            ],
            data: [65, 59, 10,  81, 56]
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
