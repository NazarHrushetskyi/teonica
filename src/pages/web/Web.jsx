import React from "react";

import styles from "./index.module.scss";
import styles1 from "../main/index.module.scss";
import styles2 from "../about/index.module.scss";
//import styles3 from "../production/index.module.scss";
import styles4 from "../staff/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Insta } from "../../icons/insta.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Agree } from "../../signs/agree.svg";
import { ReactComponent as Group } from "../../icons/AboutGroup.svg";
import { ReactComponent as Nodes } from "../../icons/group41.svg";
import { ReactComponent as Reacts } from "../../icons/group43.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import LineT from "../../components/lineText/LineN";
import Portfolio from "../../components/portfolio/Portfolio";

const Web = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles1.top}>
        <div className={styles2.left_text}>
          <h1 className={styles4.title}>Web applications</h1>
          <Button className={styles1.buton} name="Request a quote" />
          <Vector className={styles1.vector} />
        </div>
        <div className={styles1.fon}>
          <Dots className={styles1.dots} />
          <Insta className={styles.group} />
        </div>
      </div>
      <div className={styles4.line}>
        <LineText title="We create web apps of any complexity. Products we develop are highly scalable and well documented. We pay a lot of attention to pre-release testing. So all released web applications are of high quality." />
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.second}>
          <div className={styles.left}>
            <div className={styles.block}>
              <Agree className={styles.sign} />
              <div className={styles.head}>
                <h3>Complex user interfaces</h3>
                <span>
                  We are ready to tackle all frontend challenges. We have
                  developed information-rich dashboards, visualized data on
                  real-time graphs and created few HTML games.
                </span>
              </div>
            </div>
            <div className={styles.block}>
              <Agree className={styles.sign} />
              <div className={styles.head}>
                <h3>Progressive web application</h3>
                <span>
                  After including to web app ability to work offline, push
                  notifications and device hardware access, we make user
                  experience similar to using native mobile and desktop apps
                </span>
              </div>
            </div>
            <div className={styles.block}>
              <Agree className={styles.sign} />
              <div className={styles.head}>
                <h3>Third-party services</h3>
                <span>
                  We can integrate third-party services to your application to
                  make it more valuable for the final users. Before using any of
                  the services we check the reliability and security of it.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Pupil className={styles.photo} />
          </div>
        </div>
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.lfthird}>
          <Group className={styles.photos} />
        </div>
        <div className={styles.rgthird}>
          <div className={styles.block}>
            <Agree className={styles.sign} />
            <div className={styles.head}>
              <h3>Cross-browser and responsive</h3>
              <span>
                It doesn't matter where final users launch the application and
                which browser they use. We make applications look great either
                on big TV and iMac or small mobile screens.
              </span>
            </div>
          </div>
          <div className={styles.block}>
            <Agree className={styles.sign} />
            <div className={styles.head}>
              <h3>Speed optimization</h3>
              <span>
                To achieve the fastest interaction between the user and the
                system we use best practices for code architecture, optimize
                content, manage caching and connect CDN.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fourthBlock}>
        <LineT title="We develop mobile user interfaces with" />
        <div className={styles.frame}>
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

export default Web;
