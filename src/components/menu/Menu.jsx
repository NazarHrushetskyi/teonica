import React from "react";

import styles from "./index.module.scss";

import FirstButton from "../button/FirstButton";
import Button from "../button/Button";
import HeadButton from "../button/HeadBut";

import clsx from "clsx";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const list1 = [
  { name: "Web applications", value: "/web" },
  { name: "Mobile applications", value: "/mobile" },
  { name: "Server-side applications", value: "/server" },
];
const list2 = [
  { name: "Case Study", value: "/case-study" },
  { name: "IT staff augmentation", value: "/staff" },
  { name: "Product development outsourcing", value: "/production" },
];

const Menu = ({ active, setActive }) => {
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div
      className={clsx(styles.header_menu, active && styles.header_menu_active)}
      onClick={() => setActive(false)}
    >
      <ul className={styles.buton_list} onClick={(e) => e.stopPropagation()}>
        <li>
          <FirstButton name="Services" list={list1} />
        </li>
        <li>
          <FirstButton name="Solutions" list={list2} />
        </li>
        <Link to={"/about"}>
          <li>
            <Button name="About" />
          </li>
        </Link>
        <Link to={"/case"}>
          <li>
            <Button name="Case Studies" />
          </li>
        </Link>
      </ul>
      <div className={styles.head_top}>
        <Link to={"/request"}>
          <HeadButton name="Request a quote" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
