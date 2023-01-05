import React from "react";

import { ReactComponent as Line } from "../../icons/Line.svg";

import styles from "./line.module.scss"

const LineL = ({title}) => {
  return (
    <div className={styles.component3}>
      <Line className={styles.line} />
      {title}
    </div>
  );
};

export default LineL;
