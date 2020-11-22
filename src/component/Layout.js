import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = ({ title, children, animation, caption }) => {
  let elem = useRef(null);
  useEffect(() => {
    animation(elem);
  });
  return (
    <section className={styles.wrapper} ref={(el) => (elem = el)}>
      <div className={styles.innerWrapper}>
        <h3 className={styles.heading} data={caption}>
          {title}
        </h3>
        <span className={styles.caption}>{caption}</span>
        <div className={styles.children}>{children}</div>
      </div>
      <div className={styles.borderRight}>
        <NavLink to="/">X</NavLink>
      </div>
      <div className={styles.borderLeft}></div>
    </section>
  );
};

export default Layout;
