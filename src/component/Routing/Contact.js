import React, { useEffect, useRef } from "react";
import styles from "../../styles/Contact.module.css";
import { fromBottom } from "../Animate";
import Layout from "../Layout";

const Contact = () => {
  // let elem = useRef(null);
  // useEffect(() => {
  //   fromBottom(elem);
  // });
  return (
    <Layout title="Contact" caption="contact" animation={fromBottom}>
      contact
    </Layout>
  );
};

export default Contact;
