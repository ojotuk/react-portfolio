import React, { useEffect, useRef } from "react";
import styles from "../../styles/Resume.module.css";
import { fromTop } from "../Animate";

import Layout from "../Layout";
const Resume = () => {
  return (
    <Layout title="Resume" animation={fromTop} caption="summary">
      <div className={styles.contentWrapper}>
        <div className={styles.content + " " + styles.education}>
          <h3 className={styles.type}>Education</h3>
          <div className={styles.description}>
            <span>2015</span>
            <h6>B.Tech Physics/Electronics</h6>
            <p>Federal University of Technology, Minna.</p>
          </div>
          <div className={styles.description}>
            <span>2019</span>
            <h6>M.Sc. Physics</h6>
            <p>Bayero University Kano.</p>
          </div>
        </div>
        <div className={styles.content + " " + styles.experience}>
          <h3 className={styles.type}>Experience</h3>
          <div className={styles.description}>
            <span>current</span>
            <h6>Product Man.</h6>
            <p>iqevaluate.com</p>
          </div>
          <div className={styles.description}>
            <span>2019</span>
            <h6>Junior Developer</h6>
            <p>Cloud10 Tech Hub.</p>
          </div>
        </div>
        <div className={styles.content + " " + styles.courses}>
          <h3 className={styles.type}>Courses/Participation</h3>
          <div className={styles.description}>
            <span>2019</span>
            <h6>Bootcamp</h6>
            <p>Decagon</p>
          </div>
          <div className={styles.description}>
            <span>2020</span>
            <h6>Google Andela Dev. Scholarship</h6>
            <p>Google, Andela &amp; Plural Sight</p>
          </div>
          <div className={styles.description}>
            <span>2020</span>
            <h6>Javascript.</h6>
            <p>Sololearn</p>
          </div>
          <div className={styles.description}>
            <span>2020</span>
            <h6>React &amp; Redux</h6>
            <p>Sololearn.</p>
          </div>
        </div>
        <div className={styles.content + " " + styles.publication}>
          <h3 className={styles.type}>Academic Publication</h3>
          <div className={styles.description}>
            <span>2020</span>
            <h6>
              <a
                href="https://www.ijmret.org/paper/V5I2/05020110.pdf"
                alt="ojotu ijmret publication"
              >
                Simulation of an Optimized P3HT ssDSSC{" "}
                <i className="fa fa-link"></i>
              </a>
            </h6>
            <p>
              Internation Journal of Modern Research in Engineering and
              Technology
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
