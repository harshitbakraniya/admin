import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/logoadmin2.png";
import {
  RiDashboardLine,
  RiDashboardFill,
  RiMiniProgramLine,
  RiMiniProgramFill,
  RiPercentFill,
  RiBarChartBoxLine,
  RiBarChartBoxFill,
} from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoIosAnalytics } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import {
  HiDocumentDuplicate,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsPersonPlus, BsPersonPlusFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brandName">
        <img src={Logo} />
        Circle
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/" activeClassName="active">
              <i>
                <RiDashboardLine />
              </i>
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/order"
              activeClassName="active"
            >
              <i>
                <IoCartOutline />
              </i>
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/analytics"
              activeClassName="active"
            >
              <i>
                <IoIosAnalytics />
              </i>
              Analytics
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/categories"
              activeClassName="active"
            >
              <i>
                <HiOutlineDocumentDuplicate />
              </i>
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/products"
              activeClassName="active"
            >
              <i>
                <RiMiniProgramLine />
              </i>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/discount"
              activeClassName="active"
            >
              <i>
                <AiOutlinePercentage />
              </i>
              Discount
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/inventory"
              activeClassName="active"
            >
              <i>
                <RiBarChartBoxLine />
              </i>
              Inventory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/customers"
              activeClassName="active"
            >
              <i>
                <BsPersonPlus />
              </i>
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
