import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  // for navigation drawer
  window.addEventListener(
    "resize",
    function () {
      resizeNav();
    },
    false
  );

  useEffect(() => {
    resizeNav();
  }, []);

  function resizeNav() {
    const mySidenav = document.getElementById("mySidenav");

    if (window.innerWidth >= 750) {
      mySidenav.classList.add("header-menu-PC");
      mySidenav.style.width = "100%";
    } else if (window.innerWidth < 750) {
      mySidenav.classList.remove("header-menu-PC");
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    if (window.innerWidth < 750) {
      document.getElementById("mySidenav").style.width = "0";
    }
  }

  return (
    <nav>
      <div className="header-menu-bg">
        <div className="header-menu-wrapper">
          <div className="header-menu-log">
            <h1>
              TECH-TALK<i className="fas fa-share-alt"></i>
            </h1>
          </div>

          <div className="mobile-menu">
            <span onClick={() => openNav()}>
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i className="fas fa-bars"></i>
            </div>
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>
            <ul>
              <li onClick={() => closeNav()}>
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>

              <li onClick={() => closeNav()}>
                <Link to="/posts" className="nav-link">
                  POSTS
                </Link>
              </li>
            </ul>
            <button className="logout-button" onClick={onLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
