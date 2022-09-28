import Homemodule from "modules/home/HomeModule";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hemant's - Portfolio</title>
      </Head>
      <Homemodule />
    </>
  );
};

export default Home;
