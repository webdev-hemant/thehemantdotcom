import SocialMediaComponents from "componets/socialmedia/SocialMediaComponents";
import Primarysvg from "images/primarysvg";
import Link from "next/link";
import styles from "./firstHomeSection.module.scss";

const FirstHomeSection = () => {
  return (
    <section className={styles.introductionWrapper}>
      <div className={styles.textIntroContainer}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.nameHeading}>
            Hemant Jadhav{" "}
            <span className={styles.nameSubHeading}>- JavaSript Developer</span>
          </h1>
        </div>
        <p className={styles.introParagraph}>
          I am a working professional software Engineer who solves
          customers&apos; problems by providing software services also I&apos;m
          equipped with the right tools to deliver fast and resilient software.
          {/* I am working professional software Engineer who solve customers
          problem by providing software services also I&apos;m equipped with the
          right tools to deliver fast and resilient software&apos;s. */}
          <br /> — performance and scalability are priorities on my radar.
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
    </section>
  );
};

export default FirstHomeSection;
