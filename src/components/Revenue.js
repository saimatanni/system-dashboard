import React from 'react'
import {Line} from 'react-chartjs-2';

const Revenue = () => {
    const state = {
        labels: ['Sat', 'Sun', 'Mon', 'Tus', 'Wed','Thu','Fri'],
                 
        datasets: [
          {
            label: 'Current Week',
            fill: false,
            lineTension: 0.5,
            backgroundColor: "#727cf5",
			borderColor: "#727cf5",
            borderWidth: 3,
            data: [10, 20,15, 25,20, 30, 20],
            // opacity: 1,
            // width: 2,
            // dasharray: 0,
          },
          {
            label: 'Previous Week',
            fill: false,
            lineTension: 0.5,
            backgroundColor:" rgb(10, 207, 151)",
			borderColor: "rgb(10, 207, 151)",
            borderWidth: 4,
            data: [0, 15, 10,30, 15, 35, 25]
          },
        ]
      }
      
    return (
        <Line
          data={state}
          options={{
            title:{
              display:true,
            //   text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    )
}

export default Revenue
