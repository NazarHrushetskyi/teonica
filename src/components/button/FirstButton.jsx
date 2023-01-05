import React from "react";

import styles from "./index.module.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../signs/arrow.svg";

const FirstButton = ({ name, list }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button className={styles.buton} onClick={() => setOpen(!open)}>
        {name} <Arrow className={styles.first} />
      </button>
      <div
        className={styles.popup}
        onBlur={() => {
          setOpen(false);
        }}
      >
        {open && (
          <ul>
            {list.map((obj, i) => (
              <Link to={obj.value}>
                <li key={i}>{obj.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default FirstButton;
