import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const HealthGraph = () => {
  const state = {
    labels: ["Doctor", "Patient", "Packeg"],
    datasets: [
      {
        // label: 'Rainfall',
        backgroundColor: [
        //   "#72A5ED",
          "#FFAF90",
          "#3ED0C8",
          "#92001B",
          //   '#6800B4'
        ],
        borderWidth: 7,
        borderHeight: 7,
        hoverBackgroundColor: [
        //   "#86B9FF",
          "#ED9172",
          "#20B2AA",
          "#A6002F",
          // '#35014F'
        ],
        data: [65, 59, 81],
      },
    ],
  };
  return (
    <div>
      <div class="card flex-fill w-100">
        <div class="card-header-new">
          <h5 class="card-title mb-0">Health</h5>
        </div>
        <div class="card-body p-2  ">
          <div class="align-self-center w-100 row ">
           
            <div class=" col-sm-8">
              <div class="chart chart-xs">
                <div>
                  <Doughnut
                    data={state}
                    options={{
                      title: {
                        display: true,
                        //   text:'Average Rainfall per month',
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        // position:'right'
                      },
                    }}
                  />
                </div>
                {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
              </div>
            </div>
            
            <div className="d-flex col-md-4 col-sm-3">
              <table class="table mb-0 sales">
                <tbody>
                  <tr>
                    <td> Doctor</td>
                    <td class="text-end">4306</td>
                  </tr>
                  <tr>
                    <td>Patient</td>
                    <td class="text-end">3801</td>
                  </tr>
                  <tr>
                    <td>Packeg</td>
                    <td class="text-end">1689</td>
                  </tr>
                  {/* <tr>
                    <td></td>
                    <td class="text-end">1689</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthGraph;
