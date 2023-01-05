import React from "react";

import styles from "./index.module.scss";

import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Group } from "../../icons/MainGroup.svg";
import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { ReactComponent as Shutter } from "../../icons/Shutter.svg";
import { ReactComponent as Pupil } from "../../icons/Glassess.svg";
import { ReactComponent as Line } from "../../icons/LiveW.svg";
import { ReactComponent as Square } from "../../icons/Square.svg";
import { ReactComponent as Prod } from "../../icons/Prod1.svg";
import { ReactComponent as Men } from "../../icons/Men.svg";
import { ReactComponent as User } from "../../icons/Icon.svg";

import { ReactComponent as Search } from "../../signs/search.svg";
import { ReactComponent as Agree } from "../../signs/agree.svg";
import { ReactComponent as Focus } from "../../signs/focus.svg";

import Button from "../../components/button/TopBtn";
import LineText from "../../components/lineText/line";
import Portfolio from "../../components/portfolio/Portfolio";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left_text}>
          <h1 className={styles.title}>JavaScript engineers</h1>
          <p className={styles.subtitle}>
            Ready to develop your product and join your team remotely
          </p>
          <Button className={styles.buton} name="Request a quote" />
          <Vector className={styles.vector} />
        </div>
        <div className={styles.fon}>
          <Dots className={styles.dots} />
          <Group className={styles.group} />
        </div>
      </div>
      <LineText title="How we help?" />
      <div className={styles.secondBlock}>
        <div className={styles.sbLeft}>
          <Shutter className={styles.shut} />
        </div>
        <div className={styles.sbRight}>
          <div className={styles.ttop}>
            <div className={styles.htop}>
              <svg
                width="34"
                height="2"
                viewBox="0 0 34 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H34" stroke="#57DDAF" strokeWidth="2" />
              </svg>
              <p className={styles.pmain}>Product development outsourcing</p>
            </div>
            <h2 className={styles.h2main}>
              Turn your vision into working product with our remote team
            </h2>
            <h4 className={styles.h4main}>
              Looking for a team to build web or mobile application based on
              your ideas and experience? Hire a remote team of software and
              product development experts to build the application for you.
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.thleft}>
          <div className={styles.htop}>
            <svg
              width="34"
              height="2"
              viewBox="0 0 34 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H34" stroke="#57DDAF" strokeWidth="2" />
            </svg>
            <p className={styles.pmain}>IT staff augmentation</p>
          </div>
          <h2 className={styles.h2main}>
            Strenghten your team with experienced JavaScript developers{" "}
          </h2>
          <h4 className={styles.h4main}>
            Need to scale up your team and expand JavaScript expertise? Can’t
            find the right IT expert? Our frontend and backend developers can
            join your team today!
          </h4>
        </div>
        <div className={styles.thright}>
          <Pupil className={styles.photos} />
        </div>
      </div>
      <div className={styles.fourthBlock}>
        <div className={styles.head_top}>
          <Line />
          What we do?
        </div>
        <div className={styles.row}>
          <div className={styles.row1}>
            <h3>Web applications</h3>
            <p>
              We create highly scalable platforms and well-tested products with
              frontend that makes a great impression on users across all
              devices.
            </p>
            <Square />
          </div>
          <div className={styles.row1}>
            <h3>Mobile applications</h3>
            <p>
              Hybrid Android and iOS mobile applications build with React Native
              based on the robust Node.js backend will satisfy every end user.
            </p>
            <Square />
          </div>
          <div className={styles.row1}>
            <h3>Server-side applications</h3>
            <p>
              We build complex, highly scalable server-side solutions with
              Node.js backend based on microservices for each application we
              create.{" "}
            </p>
            <Square />
          </div>
        </div>
        <div className={styles.fourBottom}>
          <Button className={styles.ourBut} name="Our Services" />
        </div>
      </div>
      <div className={styles.fifthBlock}>
        <Prod className={styles.prod} />
        <div className={styles.prodInfo}>
          <h2>We make your products great with</h2>
          <p className={styles.pHead}>Additionally, we build software using:</p>
          <p className={styles.pSub}>
            ES6, Redux, Redis, Express, Typescript, Microservices, ArangoDB,
            RabbitMQ, Selenium, Chai.js, Cucumber, Ansible, Consul, Gitlab,
            Gitlab CI, Flow Type.
          </p>
        </div>
      </div>
      <div className={styles.sixthBlock}>
        <h2 className={styles.title6}>Why to work with us?</h2>
        <div className={styles.main6}>
          <Men className={styles.men} />
          <div className={styles.right}>
            <div className={styles.block}>
              <Search className={styles.icon6} />
              <div>
                <h2>Transparent process</h2>
                <p>
                  Our development process is clear. We provide our clients with
                  access to management system where they can on which tasks we
                  are working. Also, our team is available online every day on
                  preferable messengers.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <Agree className={styles.icon6} />
              <div>
                <h2>High quality of deliverables</h2>
                <p>
                  We use cutting-edge technologies and set up continuous
                  integration and delivery processes to deliver reliable
                  software with great performance. Before final deployment our
                  code goes through a number of tests.
                </p>
              </div>
            </div>
            <div className={styles.block}>
              <Focus className={styles.icon6} />
              <div>
                <h2>Business focused mindset</h2>
                <p>
                  We strive to provide our clients with value that will make
                  their business succesfull. We don’t blindly follow the clients
                  requirements, our goal is to solve real problems through
                  excellent comunications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seventhBlock}>
        <p className={styles.headLine}>
          “Most of all, I liked their approach—they helped me to focus on the
          true needs of the business.”
        </p>
        <div className={styles.pattern}>
          <User />
          <div className={styles.user}>
            <h3>Name Surname</h3>
            <h4>Title Company</h4>
          </div>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Main;
