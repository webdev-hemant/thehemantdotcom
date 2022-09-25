import Primarysvg from "images/primarysvg";
// import Image from "next/image";
import React from "react";
import styles from "./homemodule.module.scss";

const Homemodules = () => {
  return (
    <div className={styles.introductionWrapper}>
      <div className={styles.textIntroContainer}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.nameHeading}>
            Hemant Jadhav{" "}
            <span className={styles.nameSubHeading}>- JavaSript Developer</span>
          </h1>
        </div>
        <p className={styles.introParagraph}>
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Primarysvg />
      </div>
    </div>
  );
};

export default Homemodules;
