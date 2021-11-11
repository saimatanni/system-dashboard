import React from "react";
import SideNav from "./SideNav";
import "../Style/dashboard.css";
import ReactDOM from "react-dom";
import ChartistGraph from "react-chartist";
import { Bar } from "react-chartjs-2";
import Revenue from "./Revenue";
import TotalSell from "./TotalSell";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobile, faPlane,faNewspaper,faHospitalSymbol, faHospitalUser, faHome, faCarSide, faTruck, faParachuteBox, faBox, faShoppingBag, faTrophy} from '@fortawesome/free-solid-svg-icons'
import {  faSchool} from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import FoodGraph from "./FoodGraph";
import TruckGraph from "./graph/TruckGraph";
import RideGraph from "./graph/RideGraph";
import InteriorGraph from "./graph/InteriorGraph";
import HealthGraph from "./graph/HealthGraph";
import CareerGraph from "./graph/CareerGraph";
import AppGraph from "./graph/AppGraph";
// import App from "./graph/App";


const Body = () => {
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
        backgroundColor: "rgb(227, 234, 239)",
        borderColor: "rgb(227, 234, 239)",
        borderWidth: 0.2,
        data: [542, 443, 320, 780, 900, 453, 326, 434, 568, 610, 756, 895],
      },
      {
        label: "actual",
        backgroundColor: "#727cf5",
        borderColor: "#727cf5",

        borderWidth: 0.2,
        data: [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
      },
    ],
  };

  return (
    <div className="d-flex">
      <SideNav />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 id="heading" class="h3 mb-3">
            <strong></strong> Dashboard
          </h1>
          {/* //////////////Ghuri-12 service//////////////// */}
          {/* <div class="row"> */}
            {/* <div class="col-xl-12 col-xxl-10 d-flex">
              <div class="w-100"> */}
                <div class="row number">
                  <div class="col-md-3 col-lg-2">
                    
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Bazar</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                             
                              <FontAwesomeIcon icon={faShoppingBag}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Order</span>
                        <h1 class="mt-1 mb-3">2382</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -3.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Parcel</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                              {/* <i class="align-middle" data-feather="truck"></i> */}
                              <FontAwesomeIcon icon={faBox}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Parcel</span>
                        <h1 class="mt-1 mb-3">14212</h1>
                        <div class="mb-0">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i>5.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-2">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Food</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                        
                             <FontAwesomeIcon icon={faHamburger} /> 
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Order</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -6.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Health</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faHospitalUser}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Users</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-2">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Ticket</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                             
                                <FontAwesomeIcon icon={faPlane}/>
                             
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Ticket Purches</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Career</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faSchool}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total job circular</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-2">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">App</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faMobile}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">App Download</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Interior</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faHome}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Client</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-2 ">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Truck</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faTruck}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Booking</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Ride</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faCarSide}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Ride Sharing</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-2 ">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">News</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faNewspaper}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total User</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Top-Up</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                            <FontAwesomeIcon icon={faTrophy}/>
                            </div>
                          </div>
                        </div>
                        <span class="card-text-muted">Total Order</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0">
                          <span class="text-danger">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                          </span>
                          <span class="card-text-muted">Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div>
            </div> */}
<div className="row graph">

            <div class="col-xl-3 col-md-4 col-sm-12 col-xxl-4">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">PROJECT VS ACTUAL <span className="card-text-muted">(Bazar)</span> </h5>
                </div>
                
                <div class="card-body py-3">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Today's Earning: $2,562.30</h5>
                    <span class="">
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper{" "}
                      <br /> ultricies nisi. Nam eget dui. Etiam rhoncus...
                    </span>
                  </div>
                  <div class="chart chart-sm " style={{ maxWidth: "650px" }}>
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
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-sm-12 col-xxl-4 col-xl-3 d-flex order-3 order-xxl-2">
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
                    <Revenue />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-xxl-4 d-flex order-3 order-xxl-3">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">TOTAL SALES<span className="card-text-muted">(Ticket)</span></h5>
                </div>
                
                <div class="card-body p-2 d-flex ">
                  <div class="align-self-center w-100 row ">
                    <div class=" col-sm-8">
                      <div class="chart chart-xs">
                        <TotalSell />
                        {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
                      </div>
                    </div>
                    <div className="d-flex col-md-4 col-sm-3"> 
                     <table class="table mb-0 sales">
                      <tbody>
                        <tr>
                          <td> Direct</td>
                          <td class="text-end">4306</td>
                        </tr>
                        <tr>
                          <td>Affilliate</td>
                          <td class="text-end">3801</td>
                        </tr>
                        <tr>
                          <td>Sponsored</td>
                          <td class="text-end">1689</td>
                        </tr>
                        <tr>
                          <td>E-mail</td>
                          <td class="text-end">1689</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div class="row">
        
          </div>

          <div class="row">
            <div class="col-12 col-md-3 col-lg-3 col-xxl-3 d-flex">
            <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Food Graph</h5>
                </div>
                <div class="card-body d-flex w-100">
                  <div class="align-self-center chart chart-lg">
                  <FoodGraph/>
                  </div>
                </div>
              </div>
            </div>
              
            <div class="col-12 col-lg-4 col-xxl-3 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Truck</h5>
                </div>
                <div class="card-body  w-100">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Today's Earning: $2,562.30</h5>
                    <span class="">
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper{" "}
                      <br /> ultricies nisi. Nam eget dui. Etiam rhoncus...
                    </span>
                  </div>
                  <div class="align-self-center chart chart-lg">
                    <TruckGraph/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-xxl-3 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Ride</h5>
                </div>
                <div class="card-body p-2 d-flex ">
                  <div class="align-self-center w-100 row ">
                  <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Today's Earning: $2,562.30</h5>
                    <span class="">
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper{" "}
                      <br /> ultricies nisi. Nam eget dui. Etiam rhoncus...
                    </span>
                  </div>
                    <div class=" col-sm-8">
                      <div class="chart chart-xs">
                        <TotalSell />
                        {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
                      </div>
                    </div>
                    <div className="d-flex col-md-4 col-sm-3"> 
                     <table class="table mb-0 sales">
                      <tbody>
                        <tr>
                          <td> Direct</td>
                          <td class="text-end">4306</td>
                        </tr>
                        <tr>
                          <td>Affilliate</td>
                          <td class="text-end">3801</td>
                        </tr>
                        <tr>
                          <td>Sponsored</td>
                          <td class="text-end">1689</td>
                        </tr>
                        <tr>
                          <td>E-mail</td>
                          <td class="text-end">1689</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-3 col-xxl-3 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Interior</h5>
                </div>
                <div class="card-body  w-100">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Today's Earning: $2,562.30</h5>
                    <span class="">
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper{" "}
                      <br /> ultricies nisi. Nam eget dui. Etiam rhoncus...
                    </span>
                  </div>
                  <div class="align-self-center chart chart-lg">
                    <InteriorGraph/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ////////3rd row///////////////// */}
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <HealthGraph/>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <CareerGraph/>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              {/* <AppGraph/> */}
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
