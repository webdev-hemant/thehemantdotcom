import { motion } from "framer-motion";
import SecondSvg from "images/SecondSvg";
import Image from "next/image";
import StarIcon from "images/star.png";
import styles from "./secondHomeSection.module.scss";

const SecondHomeSection = () => {
  const fullStackPoints: string[] = [
    "Building seo friendly resposive website front end using Reactjs or Nextjs-Redux",
    "Creating application backend in Nodejs and Nestjs",
    "Using Mongodb or MySql for database",
    "Hosting app on Aws/Azure/Vercel",
  ];

  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={styles.whatIDoHeading}
      >
        What I Do?
      </motion.h2>
      <div className={styles.myWorkWrapper}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className={styles.svg_section}
        >
          <SecondSvg />
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
          className={styles.myWorkDetails}
        >
          <h2 className={styles.subheadingWhatIdo}>Full Stack Development</h2>
          {fullStackPoints.map((paragraph: string) => {
            return (
              <p className={styles.subParagraph} key={paragraph}>
                <Image
                  src={StarIcon}
                  width={32}
                  height={28}
                  alt=""
                  layout="fixed"
                />
                <span style={{ marginLeft: "8px" }}>{paragraph}</span>
              </p>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SecondHomeSection;
