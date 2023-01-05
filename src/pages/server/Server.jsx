import React from "react";

import styles from "./index.module.scss";
import styles1 from "../main/index.module.scss";
import styles2 from "../about/index.module.scss";
import styles3 from "../production/index.module.scss";
import styles4 from "../staff/index.module.scss";
import styles5 from "../web/index.module.scss";
import styles6 from "../mobile/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Mobil } from "../../icons/SHADOW.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Agree } from "../../signs/agree.svg";
import { ReactComponent as Group } from "../../icons/AboutGroup.svg";
import { ReactComponent as Nodes } from "../../icons/group41.svg";
import { ReactComponent as Reacts } from "../../icons/group43.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import LineT from "../../components/lineText/LineN";
import Portfolio from "../../components/portfolio/Portfolio";

const Server = () => {
  return (
    <div className={styles5.wrapper}>
      <div className={styles1.top}>
        <div className={styles2.left_text}>
          <h1 className={styles4.title}>Server-side applications</h1>
          <Button className={styles1.buton} name="Request a quote" />
          <Vector className={styles1.vector} />
        </div>
        <div className={styles1.fon}>
          <Dots className={styles1.dots} />
          <Mobil className={styles.group} />
        </div>
      </div>
      <div className={styles4.line}>
        <LineText title="We empower web and mobile applications with robust Node.js backends based on microservices to build a product that works seamlessly, meets market needs and creates an enjoyable user experience." />
      </div>
      <div className={styles3.secondBlock}>
        <div className={styles6.second}>
          <div className={styles3.left}>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Define achitecture</h3>
                <span>
                  We are ready to tackle all frontend challenges. We have
                  developed information-rich dashboards, visualized data on
                  real-time graphs and created few HTML games.
                </span>
              </div>
            </div>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Application security</h3>
                <span>
                  After including to web app ability to work offline, push
                  notifications and device hardware access, we make user
                  experience similar to using native mobile and desktop apps
                </span>
              </div>
            </div>
            <div className={styles5.block}>
              <Agree />
              <div className={styles5.head}>
                <h3>Data transfering</h3>
                <span>
                  We can integrate third-party services to your application to
                  make it more valuable for the final users. Before using any of
                  the services we check the reliability and security of it.
                </span>
              </div>
            </div>
          </div>
          <div className={styles5.right}>
            <Pupil className={styles5.photo} />
          </div>
        </div>
      </div>
      <div className={styles5.thirdBlock}>
        <div className={styles6.lfthird}>
          <Group className={styles5.photos} />
        </div>
        <div className={styles5.rgthird}>
          <div className={styles5.block}>
            <Agree />
            <div className={styles5.head}>
              <h3>Server configuration</h3>
              <span>
                It doesn't matter where final users launch the application and
                which browser they use. We make applications look great either
                on big TV and iMac or small mobile screens.
              </span>
            </div>
          </div>
          <div className={styles5.block}>
            <Agree />
            <div className={styles5.head}>
              <h3>GDPR compliance</h3>
              <span>
                To achieve the fastest interaction between the user and the
                system we use best practices for code architecture, optimize
                content, manage caching and connect CDN.
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

export default Server;
