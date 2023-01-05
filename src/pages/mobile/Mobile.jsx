import React from "react";

import styles from "./index.module.scss";
import styles1 from "../main/index.module.scss";
import styles2 from "../about/index.module.scss";
import styles3 from "../production/index.module.scss";
import styles4 from "../staff/index.module.scss";
import styles5 from "../web/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Mobil } from "../../icons/mobile.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Agree } from "../../signs/agree.svg";
import { ReactComponent as Group } from "../../icons/AboutGroup.svg";
import { ReactComponent as Nodes } from "../../icons/group41.svg";
import { ReactComponent as Reacts } from "../../icons/group43.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import LineT from "../../components/lineText/LineN";
import Portfolio from "../../components/portfolio/Portfolio";

const Mobile = () => {
  return (
    <div className={styles5.wrapper}>
      <div className={styles1.top}>
        <div className={styles2.left_text}>
          <h1 className={styles4.title}>Mobile applications</h1>
          <Button className={styles1.buton} name="Request a quote" />
          <Vector className={styles1.vector} />
        </div>
        <div className={styles1.fon}>
          <Dots className={styles1.dots} />
          <Mobil className={styles.group} />
        </div>
      </div>
      <div className={styles4.line}>
        <LineText title="Hybrid Android and iOS mobile applications build with React Native based on the robust Node.js backend will satisfy every end user." />
      </div>
      <div className={styles3.secondBlock}>
        <div className={styles.second}>
          <div className={styles3.left}>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Mobile user interfaces</h3>
                <span>
                  We can bring the functionality of your product into the mobile
                  world. Our goal is to provide final users with the best
                  experience while using your product on smartphones.
                </span>
              </div>
            </div>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Augmented reality</h3>
                <span>
                  This technology expands the physical world, adding layers of
                  digital information onto it. We add sounds, video, and
                  graphics to the view of the existing environment with AR.
                </span>
              </div>
            </div>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Third-party services</h3>
                <span>
                  We can integrate third-party services to your application to
                  make it more valuable for the final users. Before using any of
                  the services we check the reliability and security of it.
                </span>
              </div>
            </div>
          </div>
          <div className={styles5.right}>
            <Pupil className={styles.photo} />
          </div>
        </div>
      </div>
      <div className={styles5.thirdBlock}>
        <div className={styles.lfthird}>
          <Group className={styles5.photos} />
        </div>
        <div className={styles5.rgthird}>
          <div className={styles5.block}>
            <Agree />
            <div className={styles5.head}>
              <h3>Testing environment </h3>
              <span>
                To make app excellent across different smartphones we set up an
                environment that allows us to test it on different devices right
                after new code deployment.
              </span>
            </div>
          </div>
          <div className={styles5.block}>
            <Agree />
            <div className={styles5.head}>
              <h3>Publishing on stores</h3>
              <span>
                After finishing the development we can support you with
                verification and publishing developed applications on App Store
                and Google Play.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles5.fourthBlock}>
        <LineT title="We develop mobile user interfaces with" />
        <div className={styles5.frame}>
          <Nodes />
          <Reacts />
          <Nodes />
          <Reacts />
          <Reacts />
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Mobile;
