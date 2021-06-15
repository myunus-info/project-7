import React from "react";
import "./Header.css";
import logo from "../../logo/logo.png";

const Header = () => {
  return (
    <div className="header">
      <h1>Virtual Premier League</h1>
      <div className="header-elements">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-items">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/players">Players</a>
            <a href="/domestic">Domestic</a>
            <a href="/international">International</a>
          </div>
        </nav>
      </div>
      <h2 style={{ textAlign: "center" }}>
        Choose Your <span>Favorite</span> Players
      </h2>
    </div>
  );
};

export default Header;
