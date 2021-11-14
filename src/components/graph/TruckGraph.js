import React from 'react'
import { Bar } from "react-chartjs-2";

const TruckGraph = () => {
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
            label: "cost",
            backgroundColor: "#E0B0FF",
            borderColor: "#E0B0FF",
           Width:1,
           body:1,
            borderWidth: 0,
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

export default TruckGraph
