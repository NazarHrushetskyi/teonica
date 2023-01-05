import React from "react";

import styles from "./index.module.scss";
import styles1 from "../main/index.module.scss";
import styles2 from "../about/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Man } from "../../icons/AboutMan.svg";
import { ReactComponent as Agree } from "../../signs/agree.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Sign } from "../../icons/sign.svg";
import { ReactComponent as White } from "../../icons/White.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import LineT from "../../components/lineText/LineN";
import Portfolio from "../../components/portfolio/Portfolio";


const Production = () => {
  return (
    <div className={styles.production}>
      <div className={styles1.top}>
        <div className={styles2.left_text}>
          <h1 className={styles1.title}>Product development outsourcing</h1>
          <Button className={styles1.buton} name="Request a quote" />
          <Vector className={styles1.vector} />
        </div>
        <div className={styles.fon}>
          <Dots className={styles1.dots} />
          <Man className={styles1.group} />
        </div>
      </div>
      <div className={styles.line}>
        <LineText title="Build your digital products remotely" />
      </div>
      <div className={styles.secondBlock}>
        <h3>This service would be a great fit in case you:</h3>
        <div className={styles.second}>
          <div className={styles.left}>
            <div className={styles.block}>
              <Agree />
              <span>
                - don’t have enough time or motivation to build an in-house team
              </span>
            </div>
            <div className={styles.block}>
              <Agree />
              <span>
                - can’t find the right people to help you build an app
              </span>
            </div>
            <div className={styles.block}>
              <Agree />
              <span>- have no experience in building applications</span>
            </div>
            <div className={styles.block}>
              <Agree />
              <span>
                - need redeveloping the existing product with best practices
              </span>
            </div>
            <div className={styles.block}>
              <Agree />
              <span>- want to validate your product idea quickly</span>
            </div>
          </div>
          <div className={styles.right}>
            <Pupil className={styles.photo} />
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <LineText title="Our remote team will take care of building highly scalable web, mobile, and server-side applications when you will be caring about the business side." />
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.lin}>
          <LineT title="Process" />
        </div>
        <div className={styles.third}>
          <div className={styles.thleft}>
            <Sign className={styles.sig} />
            <div className={styles.blockPr}>
              <div className={styles.block1}>1. Strategy</div>
              <div className={styles.block2}>2. Discovery</div>
              <div className={styles.block2}>3. Delivery</div>
            </div>
          </div>
          <div className={styles.thright}>
            <span>
              When we start getting acquainted with a client, we dive into all
              the details of the product we will build together. It helps us
              make sure that everything we develop is feasible and create a
              prioritized roadmap of outcome-based goals that contribute to a
              product vision. Our team is experienced in creating products from
              scratch.
            </span>
            <White className={styles.white} />
          </div>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Production;
