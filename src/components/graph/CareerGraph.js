import React from 'react'
import { Bar } from "react-chartjs-2";
const CareerGraph = () => {
    const state = {
        labels: ["FED", "BED", "UI/UX", "SQA", "CTO", "PM"],
        datasets: [
          {
            label: "This Month",
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          
        ]
      };
    return (
        <div>
            <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Career<span className="card-text-muted">  </span>  </h5>
                </div>
                <div class="card-body px-4 chart">
                  <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total job Post: 157</h5>
                    
                  </div>
                  <div
                  // id="world_map"
                  // style="height:350px;"
                  >
                   <Bar
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
