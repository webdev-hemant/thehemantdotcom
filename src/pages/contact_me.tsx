import Head from "next/head";
import ContactMe from "modules/contactme/ContactMe";

const contact_me = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <ContactMe />
    </>
  );
};

export default contact_me;
