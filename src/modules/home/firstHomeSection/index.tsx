import SocialMediaComponents from "componets/socialmedia/SocialMediaComponents";
import Primarysvg from "images/primarysvg";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./firstHomeSection.module.scss";

const FirstHomeSection = () => {
  return (
    <div className={styles.introductionWrapper}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={styles.textIntroContainer}
      >
        <div className={styles.headingWrapper}>
          <h1 className={styles.nameHeading}>
            Hemant Jadhav{" "}
            <span className={styles.nameSubHeading}>- JavaSript Developer</span>
          </h1>
        </div>
        <p className={styles.introParagraph}>
          I am working professional software Engineer who solve customers
          problem by providing software services also I&apos;m equipped with the
          right tools to deliver fast and resilient software&apos;s.
          <br /> — performance and scalabilty are priorities on my radar.
        </p>
        <SocialMediaComponents />
        <Link href="/contact_me">
          <a>
            <motion.button
              initial={{ x: "60px" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, ease: "linear" }}
              className={styles.contactMeButton}
              type="button"
            >
              Contact Me
            </motion.button>
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={styles.imageContainer}
      >
        <Primarysvg />
      </motion.div>
    </div>
  );
};

export default FirstHomeSection;