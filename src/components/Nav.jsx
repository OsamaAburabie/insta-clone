import React from "react";
import instagramLogo from "../svgs/Insta.svg";
import "../style.css";
import Osama from "../images/3.jpg";
import { Link } from "react-router-dom";
import {
  FaRegPaperPlane,
  FaRegHeart,
  FaHome,
  FaRegCompass,
} from "react-icons/fa";
function Nav() {
  return (
    <nav>
      <div className="sub__nav">
        <Link to="/">
          <img
            to="/"
            className="InstaLogo"
            src={instagramLogo}
            alt="instagram Logo"
          />
        </Link>
        <div className="search__sec">
          <form>
            <label>
              <input type="text" name="name" placeholder="&#xf002;Search" />
            </label>
          </form>
        </div>
        <div className="nav__btns">
          <Link to="/">
            <a to="/">
              <i>
                <FaHome />
              </i>
            </a>
          </Link>
          <a>
            <i>
              <FaRegPaperPlane />
            </i>
          </a>
          <a href="#">
            <i>
              <FaRegCompass />
            </i>
          </a>
          <a href="#">
            <i>
              <FaRegHeart />
            </i>
          </a>
          <Link to="/profile">
            <a to="/profile">
              <div className="profile__circle">
                <img
                  src="https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png"
                  alt=""
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
