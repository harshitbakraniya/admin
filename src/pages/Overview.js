import React from "react";
import { RiNotification3Line } from "react-icons/ri";
import Img1 from "../assets/Images/photo-2.jpg";
import BarChart from "../components/BarChart";
import PlareChart from "../components/PlareChart";
import { BsLayoutTextWindowReverse, BsPersonCheck } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Photo1 from "../assets/Images/photo-1.jpg";
import Photo2 from "../assets/Images/photo-2.jpg";
import Photo3 from "../assets/Images/photo-3.jpg";
import Photo4 from "../assets/Images/photo-4.jpg";
import Photo5 from "../assets/Images/photo-5.jpg";
import Photo6 from "../assets/Images/photo-6.jpg";

const Overview = () => {
  return (
    <div className="overview">
      <div className="top-bar d-flex">
        <div className="content">
          <h6 className="title">Overview</h6>
          <h6 className="heading">Dashboard</h6>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="search" />
        </div>
        <i>
          <RiNotification3Line />
        </i>
        <img src={Img1} height="33" width="33" />
      </div>
      <div className="main-content">
        <div className="left">
          <div className="flex-item">
            <div className="total-reve d-flex">
              <div className="icon">
                <BsLayoutTextWindowReverse />
              </div>
              <div className="content">
                <h6 className="title">Total Revenue</h6>
                <h5 className="number">$8,800</h5>
              </div>
            </div>
            <div className="order d-flex">
              <div className="icon">
                <BiCart />
              </div>
              <div className="content">
                <h6 className="title">Orders</h6>
                <h5 className="number">3.044</h5>
              </div>
            </div>
            <div className="customer d-flex">
              <div className="icon">
                <BsPersonCheck />
              </div>
              <div className="content">
                <h6 className="title">Customers</h6>
                <h5 className="number">$8,800</h5>
              </div>
            </div>
          </div>
          <div className="sales-statistic">
            <BarChart />
          </div>
        </div>
        <div className="right">
          <div className="traffic-channel">
            <PlareChart />
          </div>
          <div className="top-customer">
            <h5>Top Customers</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Orders</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={Photo1} height="20" width="20" />
                    Mark
                  </td>
                  <td>903</td>
                  <td>$76</td>
                </tr>
                <tr>
                  <td>
                    <img src={Photo2} height="20" width="20" />
                    Jacob
                  </td>
                  <td>738</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>
                    <img src={Photo3} height="20" width="20" />
                    Larry
                  </td>
                  <td>647</td>
                  <td>$76</td>
                </tr>
                <tr>
                  <td>
                    <img src={Photo4} height="20" width="20" />
                    Frank
                  </td>
                  <td>738</td>
                  <td>$99</td>
                </tr>
                <tr>
                  <td>
                    <img src={Photo5} height="20" width="20" />
                    patton
                  </td>
                  <td>245</td>
                  <td>$34</td>
                </tr>
                <tr>
                  <td>
                    <img src={Photo6} height="20" width="20" />
                    Jordan
                  </td>
                  <td>656</td>
                  <td>$86</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
