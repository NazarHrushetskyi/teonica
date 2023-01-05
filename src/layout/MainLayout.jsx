import React from "react";

import Header from "../components/header/Header";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
