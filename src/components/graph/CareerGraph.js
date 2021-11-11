import React from 'react'
import { Line } from "react-chartjs-2";
const CareerGraph = () => {
    const state = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Current Month",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Last Month",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
    return (
        <div>
            <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">REVENUE<span className="card-text-muted">  (Parcel)</span>  </h5>
                </div>
                <div class="card-body px-4">
                  <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Today's Earning: $2,562.30</h5>
                    <span class="">
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper{" "}
                      <br /> ultricies nisi. Nam eget dui. Etiam rhoncus...
                    </span>
                  </div>
                  <div
                  // id="world_map"
                  // style="height:350px;"
                  >
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
                </div>
              </div>
        </div>
    )
}

export default CareerGraph
