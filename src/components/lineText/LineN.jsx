import React from 'react'

import styles from "./line.module.scss";

import { ReactComponent as Line } from '../../signs/line.svg';

 const LineN = ({title}) => {
  return (
    <div className={styles.component2}>
    <Line  />
    {title}
</div>
  )
}

export default LineN;