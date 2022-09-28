import Homemodules from "modules/home/Homemodules";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hemant's - Portfolio</title>
      </Head>
      <Homemodules />
    </>
  );
};

export default Home;
