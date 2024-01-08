import Team from "../components/Team";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>PAYCICS • About</title>
        <meta name="description" content="Your simple NFT application" />
      </Head>
      <Team />
    </>
  );
}
