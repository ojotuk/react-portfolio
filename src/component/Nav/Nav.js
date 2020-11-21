import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Nav.module.css";
import portrait from "../../img/portrait.webp";

const Nav = () => {
  const [active, setActive] = useState("/");
  const nav = useRef(null);

  const navToggler = () => {
    nav.current.classList.toggle("open");
    //   convert class list strings to array
    //console.log(nav.current.classList.value.split(" ").includes("open"));
  };
  // close Nav on nav click
  const closeNav = () => {
    //arrray method

    if (nav.current.classList.value.split(" ").includes("open")) {
      nav.current.classList.remove("open");
    }
  };
  const navSwitch = (path) => {
    if (path) {
      setActive(path.url);
    }
    // closeNav();
  };
  useEffect(() => {
    navSwitch();
  }, [active]);

  return (
    <section className={styles.nav} ref={nav}>
      <div className={styles.profile}>
        <div className={styles.imgWrapper}>
          <img src={portrait} alt="potrait" />
        </div>
        <h1>Kazeem A.O</h1>
      </div>
      <ul className={styles.ul} onClick={closeNav}>
        <li onClick={navSwitch}>
          <i className="fa fa-home"></i>
          <NavLink
            to="/"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/" ? "active" : null}
          >
            Home
          </NavLink>
        </li>
        <li onClick={navSwitch}>
          <i className="fa fa-user-circle-o"></i>

          <NavLink
            to="/about"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/about" ? "active" : null}
          >
            About Me
          </NavLink>
        </li>
        <li onClick={navSwitch}>
          <i className="fa fa-tasks"></i>

          <NavLink
            to="/what-i-do"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/what-i-do" ? "active" : null}
          >
            What I Do
          </NavLink>
        </li>
        <li onClick={navSwitch}>
          <i className="fa fa-briefcase" aria-hidden="true"></i>

          <NavLink
            to="/resume"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/resume" ? "active" : null}
          >
            Resume
          </NavLink>
        </li>
        <li onClick={navSwitch}>
          <i className="fa fa-address-card-o"></i>

          <NavLink
            to="/contact"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/contact" ? "active" : null}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <span className={styles.bars} onClick={navToggler}>
        <i className="fa fa-bars"></i>
      </span>
    </section>
  );
};

export default Nav;
