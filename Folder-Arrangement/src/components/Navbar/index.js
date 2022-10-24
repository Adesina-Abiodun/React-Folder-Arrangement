import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import fsvg from "../../assets/icons/facebook.svg";
import tsvg from "../../assets/icons/twitter.svg";
import isvg from "../../assets/icons/instagram.svg";
import ysvg from "../../assets/icons/youtube.svg";

export const NavBar = () => {
   const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar">
     
      <header>
        <h3>SkillupAfrica Blog</h3>
      </header>

      <nav className="nav">
        <div className="nav-list">
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/post"}>
              <li>Articles</li>
            </NavLink>
            <NavLink to={"/editor/:id"}>
              <li>About us</li>
            </NavLink>
          </ul>
        </div>

        <div className="clicks">
          <div className="icons">
            <a href="https://www.facebook.com/skillupafrica1" target="_blank">
              <img src={fsvg} alt="" />
            </a>
            <a href="https://twitter.com/SkillupAfrica1" target="_blank">
              <img src={tsvg} alt="" />
            </a>
            <a href="https://www.instagram.com/_skillupafrica/" target="_blank">
              <img src={isvg} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSLjipbYcJixWsZu_TeW49g"
              target="_blank"
            >
              <img src={ysvg} alt="" />
            </a>
          </div>

          <div className="post-button">
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                isLoggedIn ? navigation("/post") : navigation("/login");
              }}
            >
              Post your article
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

// "/post" : "/login"

export const SecNav = () => {
  return <div></div>;
};
