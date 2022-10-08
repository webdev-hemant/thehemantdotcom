import Image from "next/image";
// import educationImg from "images/college.png";
import educationImg from "images/seminar.png";
import styles from "./education.module.scss";

const Education = () => {
  return (
    <div className={styles.educationWrapper}>
      <div className={styles.imgContainer}>
        <Image src={educationImg} alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Education;
