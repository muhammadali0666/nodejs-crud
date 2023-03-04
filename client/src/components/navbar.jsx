import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark w-100">
        <a className="navbar-brand mx-4" href="#">
          Products
        </a>

        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to='/'>
              Course
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to="/animals">
              Animals
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to="/fruits">
              Fruits
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to="/cars">
              Cars
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to='/registration'>
              Register
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              LogOut
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
