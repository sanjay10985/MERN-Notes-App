import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };
  const navigate = useNavigate();
  return (
    <div className="main-header">
      <h2 id="site-head">
        {" "}
        <Link to="/">ItsNotes</Link>
      </h2>
      <nav className="navbar">
        <ul id="main-nav">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </nav>
      {localStorage.getItem("token") ? (
        <form>
        <button type="submit" id="logout-button" onClick={logout}>
          Log out
        </button>
      </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
