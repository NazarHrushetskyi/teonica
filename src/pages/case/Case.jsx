import React from "react";

import styles from "./index.module.scss";
import styles2 from "../main/index.module.scss";
import styles3 from "../web/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Spider } from "../../icons/Spider.svg";
import { ReactComponent as Mac } from "../../icons/image.svg";
import { ReactComponent as Mac2 } from "../../icons/image2.svg";
import { ReactComponent as Logo } from "../../icons/logos.svg";
import { ReactComponent as Insta } from "../../icons/insta.svg";

import Footer from "../../components/footer/Footer";
import Button from "../../components/button/TopBtn";

const Case = () => {
  return (
    <div className={styles.case}>
      <div className={styles2.top}>
        <div className={styles2.left_text}>
          <h1 className={styles2.title}> Case Studies</h1>
          <div className={styles.topb}>
            <Button className={styles.buton} name="Request a quote" />
            <Vector className={styles2.vector} />
          </div>
        </div>
        <div className={styles2.fon}>
          <Dots className={styles2.dots} />
          <Insta className={styles3.group} />
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.second1}>
          <div className={styles.left}>
            <Spider />
            <h3>Case name</h3>
            <span>
              Looking for a team to build web or mobile application based on
              your ideas and experience? Hire a remote team of software and
              product development experts to build the application for you.
            </span>
            <div className={styles.texh}>
              <p>Texhnology</p>
              <p>Texhnology</p>
              <p>Texhnology</p>
            </div>
          </div>
          <div className={styles.right}>
            <Mac className={styles.mac} />
          </div>
        </div>
        <div className={styles.second2}>
          <div className={styles.left2}>
            <Mac2 className={styles.mac2} />
          </div>
          <div className={styles.right2}>
            <Logo />
            <h3>Case name</h3>
            <span>
              Looking for a team to build web or mobile application based on
              your ideas and experience? Hire a remote team of software and
              product development experts to build the application for you.
            </span>
            <div className={styles.texh}>
              <p>Texhnology</p>
              <p>Texhnology</p>
              <p>Texhnology</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Case;
