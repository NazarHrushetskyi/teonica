import React from "react";

import styles from "./index.module.scss";

import { ReactComponent as Logo1 } from "../../icons/logo1.svg";
import { ReactComponent as Logo2 } from "../../icons/logo2.svg";

import Button from "../../components/button/BottButt";
import Footer from "../footer/Footer";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h3>Portfolio</h3>
      <div className={styles.logo}>
        <div className={styles.description}>
          <Logo1 className={styles.logos} />
          <div className={styles.subtitle}>
            <span>Brand name</span>
            <span>Name of product developed</span>
          </div>
        </div>
        <div className={styles.description}>
          <Logo2 className={styles.logos} />
          <div className={styles.subtitle}>
            <span>Brand name</span>
            <span>Name of product developed</span>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button name="All works" />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
