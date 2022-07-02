import type { NextPage } from "next";
import Head from "next/head";
import Main from "../containers/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Images</title>
      </Head>

      <Main />
    </div>
  );
};

export default Home;
