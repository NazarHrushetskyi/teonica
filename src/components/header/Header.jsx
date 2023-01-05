import React from "react";

import { ReactComponent as Logo } from "../../icons/TEONICA.svg";

import styles from "./index.module.scss";

import { Link } from "react-router-dom";

import Menu from "../menu/Menu";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.row}>
        <Menu active={menuActive} setActive={setMenuActive} />
        <div
          className={styles.burger_btn}
          onClick={() => setMenuActive(!menuActive)}
        ></div>
      </div>
    </div>
  );
};

export default Header;
