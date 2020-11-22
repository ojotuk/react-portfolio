import React, { useEffect, useRef } from "react";
import styles from "../../styles/About.module.css";
import { fromRight } from "../../component/Animate";
import { NavLink } from "react-router-dom";

const About = ({ match }) => {
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
              I'm <span>Kazeem A. Ojotu</span>, a Fullstack Developer &amp;
              Product Manager.
            </h3>
            <div className={styles.details}>
              <p>
                A graduate of Physics/Electronic at first degree (B.Tech) and
                Physics at post graduate level (Msc.). I have passion for
                programming on the web viz. turning designs into clean and
                scalable codes. I am solution driven, analytical and result
                oriented
              </p>
              <p>
                I have attended programs/bootcamps organized by top tech
                companies like Andela, Google,Plural Sight, Decagon and Cloud10
                Tech Hub.
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
              <span>Phone:</span>
              <span>+2347069452633</span>
            </div>
            <div>
              <span>Email:</span>
              <span>ojotuk14@gmail.com</span>
            </div>
            <button>
              <i class="fa fa-cloud-download" aria-hidden="true"></i>Download
              Resume
            </button>
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
