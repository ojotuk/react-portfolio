import React, { useEffect, useRef } from "react";
import styles from "../../styles/About.module.css";
import { fromRight } from "../../component/Animate";
import { NavLink } from "react-router-dom";

const About = ({ match }) => {
  sessionStorage.setItem("active", match.url);
  let elem = useRef(null);
  useEffect(() => {
    fromRight(elem);
  });
  return (
    <div className={styles.wrapper} ref={(el) => (elem = el)}>
      <div className={styles.about}>
        <h3 className={styles.heading}>Know Me More</h3>
        <div className={styles.intro}>
          <div className={styles.description}>
            <h3 className={styles.title}>
              I'm <span>Kazeem A. Ojotu</span>, a Fullstack Developer
            </h3>
            <div className={styles.details}>
              <p>
                Cras ultricies ligula sed magna dictum porta. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi. Curabitur
                arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                magna justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <p>
                Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi.
              </p>
            </div>
          </div>
          <div className={styles.form}>
            <div>
              <span>Name:</span>
              <span>Kazeem A. Ojotu</span>
            </div>
            <div>
              <span>Residence:</span>
              <span>Lagos, Nigeria</span>
            </div>
            <div>
              <span>Email:</span>
              <span>ojotuk14@gmail.com</span>
            </div>
            <button>Download Resume</button>
          </div>
        </div>
      </div>
      <div className={styles.borderRight}>
        <NavLink to="/">X</NavLink>
      </div>
      <div className={styles.borderLeft}></div>
    </div>
  );
};

export default About;
