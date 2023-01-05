import React from "react";

import styles from "./index.module.scss";

import Button from "../../components/button/BottButt";

import { ReactComponent as Box } from "../../icons/boxes.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h3>Contact form</h3>
          <span className={styles.spn}>
            Ready to turn your ideas into a digital product
          </span>
        </div>
        <div className={styles.info}>
          <span className={styles.spin}>Name</span>
          <hr />
          <span className={styles.spin}>E-mail</span>
          <hr />
          <span className={styles.spin}>Message</span>
          <hr />
        </div>
        <Button name="Send" />
      </div>
      <div className={styles.foot}>
        <div className={styles.left}>
          <p>TEONICA</p>
          <Box />
        </div>
        <div className={styles.right}>
          <span>Services</span>
          <span>About</span>
          <span>Case Studies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
