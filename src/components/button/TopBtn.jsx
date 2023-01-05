import React from "react";

import styles from "./index.module.scss";

import { ReactComponent as Arrow } from "../../icons/Arrow.svg";

import { Link } from "react-router-dom";

const TopBtn = ({ name }) => {
  return (
    <Link to={"/request"} className={styles.links}>
      <button className={styles.topBT}>
        {name} <Arrow className={styles.arrow} />
      </button>
    </Link>
  );
};

export default TopBtn;
