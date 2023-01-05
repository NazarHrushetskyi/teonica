import React from "react";

import styles from "./index.module.scss";

import { ReactComponent as Dots } from "../../icons/DOTS.svg";
import { ReactComponent as Box } from "../../icons/boxes.svg";

import Button from "../../components/button/BotSend";

const request = () => {
  return (
    <div className={styles.request}>
      <div className={styles.top}>
        <div className={styles.left_text}>
          <h1 className={styles.title}>Request a quote</h1>
          <span className={styles.subtitle}>
            Assembly works closely with you to develop custom pricing models
            which factor in your industry, risk profile, and transactional
            volume. ‍
          </span>
        </div>
        <div className={styles.form}>
          <div className={styles.place}>
            <textarea
              name=""
              id=""
              cols="29"
              rows="2"
              placeholder="Name"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="29"
              rows="2"
              placeholder="E-mail"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="29"
              rows="2"
              placeholder="Service"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="29"
              rows="2"
              placeholder="Budget"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="63"
              rows="8"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className={styles.sub}>
            <span>
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </span>
          </div>
          <Button name="Send" />
        </div>
        <div className={styles.fon}>
          <Dots className={styles.dots} />
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.left}>
          <p>TEONICA</p>
          <Box />
        </div>
        <div className={styles.right}>
          <span>Services</span>
          <span>About</span>
          <span>Case Studies</span>
        </div>
      </div>
    </div>
  );
};

export default request;
