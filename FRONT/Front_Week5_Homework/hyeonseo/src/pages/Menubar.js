import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
  return (
    <>
      <div className="menubar">
        <ul className="menu-list">
          <li>
            <Link to="/home" className="menu-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/week01" className="menu-link">
              Introduce
            </Link>
          </li>{" "}
          <li>
            <Link to="/week02" className="menu-link">
              Introduce
            </Link>
          </li>{" "}
          <li>
            <Link to="/week03" className="menu-link">
              Introduce
            </Link>
          </li>{" "}
          <li>
            <Link to="/week04" className="menu-link">
              Introduce
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Menubar;
