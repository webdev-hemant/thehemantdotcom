import { motion } from "framer-motion";
import SecondSvg from "images/SecondSvg";
import StarSvg from "images/StarSvg";
import HtmlSvg from "images/HtmlSvg";
import CssSvg from "images/CssSvg";
import SassSvg from "images/SassSvg";
import BootstrapSvg from "images/BootstrapSvg";
import JavascriptSvg from "images/JavascriptSvg";
import TypescriptSvg from "images/TypescriptSvg";
import ReactSvg from "images/ReactSvg";
import NextjsSvg from "images/NextjsSvg";
import GraphqlSvg from "images/GraphqlSvg";
import ReduxSvg from "images/ReduxSvg";
import NestSvg from "images/NestSvg";
import NodejsSvg from "images/NodejsSvg";
import GitSvg from "images/GitSvg";
import BitbucketSvg from "images/BitbucketSvg";
import MongodbSvg from "images/MongodbSvg";
import MysqlSvg from "images/MysqlSvg";
import AwsSvg from "images/AwsSvg";
import AzureSvg from "images/AzureSvg";
import styles from "./secondHomeSection.module.scss";
import VercelSvg from "images/VercelSvg";

const SecondHomeSection = () => {
  const technologySvgArray: JSX.Element[] = [
    <HtmlSvg key={`id_1`} />,
    <CssSvg key={`id_2`} />,
    <SassSvg key={`id_3`} />,
    <BootstrapSvg key={`id_4`} />,
    <JavascriptSvg key={`id_5`} />,
    <TypescriptSvg key={`id_6`} />,
    <ReactSvg key={`id_7`} />,
    <NextjsSvg key={`id_8`} />,
    <ReduxSvg key={`id_9`} />,
    <GraphqlSvg key={`id_10`} />,
    <NodejsSvg key={`id_11`} />,
    <NestSvg key={`id_12`} />,
    <GitSvg key={`id_13`} />,
    <BitbucketSvg key={`id_14`} />,
    <MongodbSvg key={`id_15`} />,
    <MysqlSvg key={`id_16`} />,
    <AwsSvg key={`id_17`} />,
    <VercelSvg key={`id_18`} />,
    <AzureSvg key={`id_19`} />,
  ];

  const fullStackPoints: string[] = [
    "Building seo friendly resposive website front end using Reactjs or Nextjs-Redux",
    "Creating application backend in Nodejs and Nestjs",
    "Using Mongodb or MySql for database",
    "Hosting app on Aws/Azure/Vercel",
  ];

  return (
    <section className={styles.container}>
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
          <div className={styles.techIconWrapper}>
            {technologySvgArray.map((icon: JSX.Element, ind: number) => (
              <div key={`svgTech${ind}`} className={styles.svgSize}>
                {icon}
              </div>
            ))}
          </div>
          {fullStackPoints.map((paragraph: string) => {
            return (
              <div key={paragraph} className={styles.starParagraphWrapper}>
                <div className={styles.starIconContainer}>
                  <StarSvg />
                </div>
                <p className={styles.subParagraph}>{paragraph}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondHomeSection;
