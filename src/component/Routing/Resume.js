import React, { useEffect, useRef } from "react";
import styles from "../../styles/Resume.module.css";
import { fromTop } from "../Animate";
const Resume = () => {
  let elem = useRef(null);
  useEffect(() => {
    fromTop(elem);
  });
  return (
    <div className={styles.wrapper} ref={(el) => (elem = el)}>
      resume
    </div>
  );
};

export default Resume;
