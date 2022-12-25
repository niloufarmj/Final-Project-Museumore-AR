import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/additem">add item</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Dashboard;
