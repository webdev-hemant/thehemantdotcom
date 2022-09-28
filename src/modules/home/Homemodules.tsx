import SocialMediaComponents from "componets/socialmedia/SocialMediaComponents";
import Primarysvg from "images/primarysvg";
import Link from "next/link";
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
        <SocialMediaComponents />
        <Link href="/contact_me">
          <a>
            <button className={styles.contactMeButton} type="button">
              Contact Me
            </button>
          </a>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Primarysvg />
      </div>
    </div>
  );
};

export default Homemodules;
