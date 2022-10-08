import styles from "./thirdhomesection.module.scss";

const ThirdHomeSection = () => {
  return (
    <section className={styles.thirdSectionWrapperr}>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.textHeading}>
            &quot;Being an{" "}
            <i style={{ borderBottom: "3px solid white" }}>
              FullStack developer
            </i>{" "}
            is the best way to experience super-human power in real life!&quot;
            <span className={styles.credit}> — Hemant Jadhav</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ThirdHomeSection;
