import React from 'react'
import {Line} from 'react-chartjs-2';

const FoodGraph = () => {
    const state = {
        labels: ['Sat', 'Sun', 'Mon', 'Tus', 'Wed','Thu','Fri'],
                 
        datasets: [
          {
            label: 'This Week',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#B97465',
			borderColor: 'rgb(250, 92, 124)',
            borderWidth: 1,
            data: [0, 20,15, 25,25, 10, 40],
            // opacity: 1,
            // width: 2,
            // dasharray: 0,
          },
        //   {
        //     label: 'Previous Week',
        //     fill: false,
        //     lineTension: 0.5,
        //     backgroundColor:" rgb(10, 207, 151)",
		// 	borderColor: "rgb(10, 207, 151)",
        //     borderWidth: 4,
        //     data: [0, 15, 10,30, 15, 35, 25]
        //   },
        ]
      }
    return (
        <div>
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
        </div>
    )
}

export default FoodGraph
