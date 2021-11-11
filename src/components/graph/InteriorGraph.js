import React from 'react'
import { Bar } from "react-chartjs-2";


const InteriorGraph = () => {
    const state = {
        labels: [
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
        ],
        datasets: [
          {
            label: "Projection",
            backgroundColor: "#6C4B6D",
            borderColor: "#6C4B6D",
            borderWidth: 0.2,
            data: [542, 443, 320, 780, 900, 453, 326, 434, 568, 610, 756, 895],
          },
          {
            label: "actual",
            backgroundColor: "#FFF9E3",
            borderColor: "#FFF9E3",
    
            borderWidth: 0.2,
            data: [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
          },
        ],
      };
    return (
        <div>
            <Bar
                      className={"ct-octave"}
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Average ",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                        },
                      }}
                    />
        </div>
    )
}

export default InteriorGraph
