import React from 'react';

import styles from './index.module.scss';

const HeadButton = ({name}) => {
  return (
    <button className={styles.head}>
        {name} 
    </button>
  )
}

export default HeadButton;