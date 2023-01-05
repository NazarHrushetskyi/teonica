import React from 'react'
import { ReactComponent as Line } from "../../icons/Line.svg";

import styles from "./line.module.scss"

 const LineT = ({title}) => {
  return (
    <div className={styles.component}>
        <Line  />
        {title}
    </div>
  )
}


export default LineT;