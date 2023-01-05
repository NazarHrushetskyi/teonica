import React from 'react'

import styles from "./index.module.scss";

import { ReactComponent as Arrow } from "../../icons/Arrow.svg";

 const BottButt = ({name}) => {
  return (
    <button className={styles.bottbtn}>
      {name} <Arrow className={styles.arrow} />
    </button>
  )
}

export default BottButt;