import Image from "next/image";
import collegeimg from "images/collegeimg.png";
// import educationImg from "images/seminar.png";
import styles from "./education.module.scss";

const Education = () => {
  return (
    <div className={styles.educationWrapper}>
      <div className={styles.colloegInfoContainer}>
        <div className={styles.imgContainer}>
          <Image src={collegeimg} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.collegeText}>
          <h3 className={styles.clgName}>
            Vighnaharata Trust&apos;s Shivajirao S. Jondhale College of
            Engineering {"& "}
            Technology, Shahapur, Asangaon, Dist Thane
          </h3>
        </div>
      </div>
      {/* <div className={styles.imgContainer}>
        <Image src={educationImg} alt="" layout="fill" objectFit="contain" />
      </div> */}
    </div>
  );
};

export default Education;
