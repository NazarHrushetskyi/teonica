import React from "react";

import styles from "./index.module.scss";
import styles1 from "../main/index.module.scss";
import styles2 from "../about/index.module.scss";
import styles3 from "../production/index.module.scss";

import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Man } from "../../icons/AboutMan.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Rec1 } from "../../signs/rec1.svg";
import { ReactComponent as Rec2 } from "../../signs/rec2.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import LineT from "../../components/lineText/LineN";
import Portfolio from "../../components/portfolio/Portfolio";

const Staff = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles1.top}>
        <div className={styles2.left_text}>
          <h1 className={styles.title}>IT staff augmentation</h1>
          <Button className={styles1.buton} name="Request a quote" />
          <Vector className={styles1.vector} />
        </div>
        <div className={styles3.fon}>
          <Dots className={styles1.dots} />
          <Man className={styles1.group} />
        </div>
      </div>
      <div className={styles.line}>
        <LineText title="Scale up your development team" />
      </div>
      <div className={styles3.secondBlock}>
        <h3>This service would be a great fit in case you:</h3>
        <div className={styles3.second}>
          <div className={styles3.left}>
            <div className={styles.block}>
              <span>
                - don’t have enough time or motivation to build an i-house team
              </span>
            </div>
            <div className={styles.block}>
              <span>
                - cannot find experienced developers to expand team expertise
              </span>
            </div>
            <div className={styles.block}>
              <span>- want to scale up your team for a temporary period</span>
            </div>
            <div className={styles.block}>
              <span>- need to hire JavaScript developers fastly</span>
            </div>
            <div className={styles.block}>
              <span>- can’t afford in-house developers locally</span>
            </div>
          </div>
          <div className={styles3.right}>
            <Pupil className={styles3.photo} />
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <LineText title="Scale fast with our frontend and backend JavaScript engineers. Or hire our top-notch experts to manage and boost the development." />
      </div>
      <div className={styles.thirdBlock}>
        <LineT title="Process" />
        <div className={styles.row}>
          <div className={styles.block1}>
            <Rec1 />
            <span>1. Selection</span>
            <hr />
          </div>
          <div className={styles.block2}>
            <Rec2 />
            <span>2. Interview</span>
            <hr />
          </div>
          <div className={styles.block2}>
            <Rec2 />
            <span>3. Activity</span>
            <hr />
          </div>
        </div>
        <div className={styles.info}>
          <span>
            After collecting all the requirements concerning the developers you
            need, we start to select candidates among those who are working with
            us. Then we interview developers who want to join Teonica. Our goal
            is to find best-suited employees for your team. After choosing the
            right people we send you their resumes.
          </span>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Staff;
