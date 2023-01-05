import React from "react";

import styles from "../main/index.module.scss";
import styles2 from "./index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Man } from "../../icons/AboutMan.svg";
import { ReactComponent as Group } from "../../icons/AboutGroup.svg";
import { ReactComponent as Big } from "../../icons/Big.svg";
import { ReactComponent as Rect1 } from "../../icons/rect1.svg";
import { ReactComponent as Rect2 } from "../../icons/rect2.svg";
import { ReactComponent as Rect3 } from "../../icons/rect3.svg";
import { ReactComponent as Reacts } from "../../icons/Reacts.svg";
import { ReactComponent as Nodes } from "../../icons/Reacts.svg";

import LineText from "../../components/lineText/line";
import Portfolio from "../../components/portfolio/Portfolio";
import Button from "../../components/button/TopBtn";

const About = () => {
  return (
    <div className={styles2.about}>
      <div className={styles.top}>
        <div className={styles2.left_text}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.subtitle}>
            Ready to develop your product and join your team remotely
          </p>
          <Vector className={styles.vector} />
          <Button className={styles.buton} name="Request a quote" />
        </div>
        <div className={styles.fon}>
          <Dots className={styles.dots} />
          <Man className={styles2.group} />
        </div>
      </div>
      <LineText title="Our mission" />
      <div className={styles2.secondBlock}>
        <div className={styles2.left}>
          <Group className={styles2.photo} />
        </div>
        <div className={styles2.right}>
          <h2>Few words about our mission</h2>
          <span>
            Looking for a team to build web or mobile application based on your
            ideas and experience? Hire a remote team of software and product
            development experts to build the application for you.
          </span>
        </div>
      </div>
      <LineText title="Technologies" />
      <div className={styles2.big}>
        <Big />
      </div>
      <div className={styles2.big2}>
          <Nodes />
          <Reacts />
          <Nodes />
          <Reacts />
          <Nodes />
          <Reacts />
          <Nodes />
          <Reacts />
        </div>
      <LineText title="Our approach" />
      <div className={styles2.approach}>
        <div className={styles2.appr}>
          <span>Transparency</span>
          <span>Quality control</span>
          <span>Flexible development process</span>
        </div>
        <div className={styles2.appr}>
          <span>Time and material</span>
          <span>Cutting-edge technologies</span>
          <span>Security</span>
        </div>
      </div>
      <LineText title="Our office" />
      <div className={styles2.text}>
        <span>
          Looking for a team to build web or mobile application based on your
          ideas and experience? Hire a remote team of software and product
          development experts to build the application for you.
        </span>
      </div>
      <div className={styles2.thirdBlock}>
        <Rect1 />
        <Rect2 className={styles2.rect2} />
        <Rect3 className={styles2.rect3} />
      </div>
      <Portfolio />
    </div>
  );
};

export default About;
