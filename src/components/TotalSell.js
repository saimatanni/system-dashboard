import React from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
const TotalSell = () => {
    const state = {
        labels: [ 'Air', 'Bus',
                 'Launch'],
        datasets: [
          {
            // label: 'Rainfall',
            backgroundColor: [
              'rgb(255, 188, 0)',
              'rgb(114, 124, 245)',
         
              'rgb(250, 92, 124)',
     
            ],
            borderWidth:7,
        
            hoverBackgroundColor: [
            'rgb(255, 188, 3)',
            'rgb(114, 124, 244)',
            'rgb(250, 92, 123)',
           
            ],
            data: [65, 59,  81]
          }
        ]
      }
    return (
        <div>
              <Doughnut
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

export default TotalSell
