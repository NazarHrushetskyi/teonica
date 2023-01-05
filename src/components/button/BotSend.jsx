import React from 'react';

import styles from "./index.module.scss";
import { ReactComponent as Arrow } from "../../icons/Arrow.svg";

 const BotSend = ({name}) => {
    return (
        <button className={styles.botsend}>
          {name} <Arrow className={styles.arrow2} />
        </button>
      )
}

export default BotSend;