import React from 'react'

import styles from './index.module.scss';


const Button = ({name}) => {
  return (
    <button className={styles.buton}>
        {name} 
    </button>
  )
}

export default Button;