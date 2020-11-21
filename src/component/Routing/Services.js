import React, { useEffect, useRef } from "react";
import styles from "../../styles/Services.module.css";
import { fromLeft } from "../Animate";

const Services = () => {
  let elem = useRef(null);
  useEffect(() => {
    fromLeft(elem);
  });
  return (
    <div className={styles.wrapper} ref={(el) => (elem = el)}>
      What i do
    </div>
  );
};

export default Services;
