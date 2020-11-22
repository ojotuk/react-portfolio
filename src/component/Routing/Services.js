import React, { useEffect, useRef } from "react";
import styles from "../../styles/Services.module.css";
import { fromLeft } from "../Animate";
import Layout from "../Layout";

const Services = () => {
  // let elem = useRef(null);
  // useEffect(() => {
  //   fromLeft(elem);
  // });
  return (
    <Layout title="What I Do" caption="services" animation={fromLeft}>
      What i do
    </Layout>
  );
};

export default Services;
