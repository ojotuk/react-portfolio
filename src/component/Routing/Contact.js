import React, { useEffect, useRef } from "react";
import styles from "../../styles/Contact.module.css";
import { fromBottom } from "../Animate";

const Contact = () => {
  let elem = useRef(null);
  useEffect(() => {
    fromBottom(elem);
  });
  return (
    <div className={styles.wrapper} ref={(el) => (elem = el)}>
      Contact
    </div>
  );
};

export default Contact;
