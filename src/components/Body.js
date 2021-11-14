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
import RiderGraph from "./graph/RiderGrapg";
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
        label: "cost",
        backgroundColor: "rgb(227, 234, 239)",
        borderColor: "rgb(227, 234, 239)",
        borderWidth: 0.2,
        data: [542, 443, 320, 780, 900, 453, 326, 434, 568, 610, 756, 895],
      },
      {
        label: "sell",
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
                        <div class="mb-0 text">
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
                        <div class="mb-0 text">
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
                        <div class="mb-0 text">
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
                        <div class="mb-0 text">
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
                        <div class="mb-0 text">
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
                        <span class="card-text-muted"> Live Job</span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0 text">
                          <span class="text-success">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 2.25%{" "}
                          </span>
                          <span class="card-text-muted">Applied Job</span>
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
                        <div class="mb-0 text">
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
                        <span class="card-text-muted"> Live Project </span>
                        <h1 class="mt-1 mb-3">64</h1>
                        <div class="mb-0 text">
                          <span class="text-success ">
                            {" "}
                            <i class="mdi mdi-arrow-bottom-right"></i> 2.25%{" "}
                          </span>
                          <span class="card-text-muted">Project Completed</span>
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
                        <div class="mb-0 text">
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
                        <div class="mb-0 text">
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
                        <span class="card-text-muted">Total Reader</span>
                        <h1 class="mt-1 mb-3">$21.300</h1>
                        <div class="mb-0 text">
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
                        <span class="card-text-muted">Total Recharge</span>
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
            {/* //////////////////1st row///////////////// */}
<div className="row ">

            <div class="col-12 col-md-4 col-sm-12 col-xxl-4 col-xl-4 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0"> BAZAR<span className="card-text-muted">(PROJECT VS ACTUAL)</span> </h5>
                </div>
                
                <div class="card-body chart px-4">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                    
                  </div>
                  <div className="graph" style={{height:'100%',}}>
                    <Bar
                      className={"ct-octave"}
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "small ",
                          fontSize: 10,
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
            <div class="col-12 col-md-4 col-sm-12 col-xxl-4 col-xl-4 d-flex ">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">PARCEL<span className="card-text-muted">  (revenue)</span>  </h5>
                </div>
                <div class="card-body chart px-4">
                  <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                   
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
            <div class="col-sm-12 col-md-4 col-lg-4 col-xxl-4">
              <div class="card ">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">TICKET<span className="card-text-muted">(Total sales)</span></h5>
                </div>
                
                <div class="card-body chart  px-4 ">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                   
                  </div>
                  <div class="align-self-center w-100 container mt-4">
                    
                    <div className="container">
                    
                      <div class=" "  style={{height:'70%%',width:'80%'}}>
                        <TotalSell />
                        {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
                      </div>
                    </div>
                   

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          
{/* /////////////////////2nd row/////////// */}
          <div class="row">
            <div class="col-12 col-md-4 col-lg-4 col-xxl-4 d-flex ">
            <div class="card flex-fill w-100">
                <div class="card-header-new">
                <h5 class="card-title mb-0">FOOD<span className="card-text-muted">(Weekly Sell)</span></h5>
                </div>
                <div class="card-body chart  ">
                <h5 class="card-title">Total Earning: $2,562.30</h5>
                  <div class="align-self-center  ">
                  <FoodGraph/>
                  </div>
                </div>
              </div>
            </div>
              
            <div class="col-12 col-lg-4 col-md-4 col-xxl-4 d-flex ">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                <h5 class="card-title mb-0">TRUCK<span className="card-text-muted">(Revenue)</span></h5>
                </div>
                <div class="card-body chart w-100">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                   
                  </div>
                  <div class="align-self-center chart ">
                    <TruckGraph/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-xxl-4 d-flex ">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                <h5 class="card-title mb-0">RIDE<span className="card-text-muted">(Revenue)</span></h5>
                </div>
                <div class="card-body chart p-2 d-flex ">
                  <div class="align-self-center w-100 row ">
                  <div class="mt-5 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                    
                  </div>
                    <div class="col-6 col-sm-6 col-md-6">
                      <div class=" ">
                        <RideGraph />
                        {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
                      </div>
                    </div>
                    <div class="col-6 col-sm-6 col-md-6">
                      <div class=" ">
                        <RiderGraph />
                        {/* <canvas id="chartjs-dashboard-pie"></canvas> */}
                      </div>
                    </div>
                  

                    
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          {/* ////////3rd row///////////////// */}
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xxl-4 ">
              <HealthGraph/>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xxl-4 -">
              <CareerGraph/>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-xxl-4 ">
              <div class="card flex-fill w-100">
                <div class="card-header-new">
                  <h5 class="card-title mb-0">Interior</h5>
                </div>
                <div class="card-body chart w-100">
                <div class="col mt-9 verenue revinue-text-muted">
                    <h5 class="card-title">Total Earning: $2,562.30</h5>
                   
                  </div>
                  <div class="align-self-center  ">
                    <InteriorGraph/>
                  </div>
                </div>
              </div>
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
