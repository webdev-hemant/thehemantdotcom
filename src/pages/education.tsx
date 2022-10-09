import Head from "next/head";
import Education from "modules/education/Education";

const EducationRoute = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <Education />
    </>
  );
};

export default EducationRoute;
