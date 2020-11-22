import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TypeWritterText from "./TypeWritterText";
import styles from "../styles/Home.module.css";
import { textIntro } from "./Animate";

const Landing = ({ match }) => {
  sessionStorage.setItem("active", match.url);
  let text = useRef(null);
  useEffect(() => {
    textIntro(text);
  });
  return (
    <div className={styles.home} ref={(el) => (text = el)}>
      <h1>Hi,</h1>
      <TypeWritterText />
      <p>based in lagos Nigeria</p>
      <Link to="/">Hire Me</Link>
    </div>
  );
};

export default Landing;
