// import React, { useState } from "react";
import PropTypes from "prop-types";
// import { click } from "@testing-library/user-event/dist/click";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let handleOnClick7 = () => {
    document.body.style.backgroundColor = "rgb(70, 155, 126) ";
  };
  let handleOnClick8 = () => {
    document.body.style.backgroundColor = "rgb(183, 44, 51 )";
  };
  let handleOnClick9 = () => {
    document.body.style.backgroundColor = "rgb(234, 234, 43)";
  };
  let handleOnClick10 = () => {
    document.body.style.backgroundColor = "LightBlue";
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          <button
            type="button"
            onClick={handleOnClick7}
            className="btn btn-success mx-1"
          >
            Green
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={handleOnClick8}
          >
            Red
          </button>
          <button
            type="button"
            className="btn btn-warning mx-1"
            onClick={handleOnClick9}
          >
            Yellow
          </button>
          <button
            type="button"
            className="btn btn-info mx-1"
            onClick={handleOnClick10}
          >
            blue
          </button>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "PropTypes.string",
};
