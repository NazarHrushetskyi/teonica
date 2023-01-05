import React from "react";

import styles from "./index.module.scss";

import { ReactComponent as Dot1 } from "../../icons/dot1.svg";
import { ReactComponent as Dot2 } from "../../icons/dot2.svg";
import { ReactComponent as Mac } from "../../icons/macos.svg";
import { ReactComponent as Short } from "../../icons/short.svg";

import LineL from "../../components/lineText/LineL";
import Portfolio from "../../components/portfolio/Portfolio";

const CaseStudy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstBlock}>
        <div className={styles.first}>
          <Dot1 className={styles.dot1} />
          <div className={styles.f1}>
            <h1>Case Study Name</h1>
          </div>
        </div>
        <div className={styles.second}>
          <Mac className={styles.mac} />
          <Dot2 className={styles.dot2} />
        </div>
      </div>
      <div className={styles.secondBlock}>
        <LineL title="We empower web and mobile applications with robust Node.js" />
        <span>
          We are ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.We are
          ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.
        </span>
      </div>
      <div className={styles.photo}>
        <Mac className={styles.macos} />
      </div>
      <div className={styles.secondBlock}>
        <LineL title="We empower web and mobile applications with robust Node.js" />
        <span>
          We are ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.We are
          ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.
        </span>
      </div>
      <div className={styles.thirdBlock}>
        <Short />
      </div>
      <div className={styles.secondBlock}>
        <LineL title="We empower web and mobile applications with robust Node.js" />
        <span>
          We are ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.We are
          ready to tackle all frontend challenges. We have developed
          information-rich dashboards, visualized data on real-time graphs and
          created few HTML games.We are ready to tackle all frontend challenges.
          We have developed information-rich dashboards, visualized data on
          real-time graphs and created few HTML games.We are ready to tackle all
          frontend challenges. We have developed information-rich dashboards,
          visualized data on real-time graphs and created few HTML games.
        </span>
        <div className={styles.empty}></div>
      </div>
      <Portfolio />
    </div>
  );
};

export default CaseStudy;
