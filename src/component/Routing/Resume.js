import React, { useEffect, useRef } from "react";
import styles from "../../styles/Resume.module.css";
import { fromTop } from "../Animate";

import Layout from "../Layout";
const Resume = () => {
  return (
    <Layout title="Resume" animation={fromTop} caption="summary">
      this is a child
    </Layout>
  );
};

export default Resume;
