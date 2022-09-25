import styles from "./socialmediacomponents.module.scss";
import github from "images/github.png";
import linkedin from "images/linkedin.png";
import gmail from "images/gmail.png";
import twitter from "images/twitter.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Isocial {
  name: string;
  img: StaticImageData;
  route: string;
}

const iconMap: Isocial[] = [
  {
    name: "github",
    img: github,
    route: "https://github.com/webdev-hemant",
  },
  {
    name: "linkedIn",
    img: linkedin,
    route: "https://www.linkedin.com/in/hemant-jadhav-a3533818a/",
  },
  {
    name: "gmail",
    img: gmail,
    route: "mailto:webdev.hemant@gmail.com",
  },
  {
    name: "twitter",
    img: twitter,
    route: "https://twitter.com/hemantwebdev",
  },
];

const SocialMediaComponents = () => {
  return (
    <div className={styles.socialWrapper}>
      {iconMap.map((item: Isocial) => (
        <div key={item.name}>
          <Link href={item.route}>
            <a target="_blank">
              <Image src={item.img} width={50} height={50} alt={item.name} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaComponents;
