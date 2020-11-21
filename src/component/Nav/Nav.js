import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/Nav.module.css";
import portrait from "../../img/portrait.webp";

const Nav = () => {
  const [active, setActive] = useState("/");

  const navSwitch = (path) => {
    if (path) {
      setActive(path.url);
    }
  };
  useEffect(() => {
    navSwitch();
    console.log("effect");
  }, [active]);
  return (
    <section className={styles.nav}>
      <div className={styles.profile}>
        <div className={styles.imgWrapper}>
          <img src={portrait} alt="potrait" />
        </div>
        <h1>Kazeem A.O</h1>
      </div>
      <ul className={styles.ul}>
        <li onClick={navSwitch}>
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
          <NavLink
            to="/about"
            exact
            isActive={(match, location) => navSwitch(match)}
            id={active === "/about" ? "active" : null}
          >
            About Me
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
