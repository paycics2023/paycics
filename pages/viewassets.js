/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Script from "next/script";
import OwnAssestList from "../components/OwnAssestList";

export default function Home() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Head>
        <title>PAYCICS • Your NFTs</title>
        <meta name="description" content="Your simple NFT application" />
      </Head>
      <main
        style={{ marginTop: "30px", marginBottom: "50px", minHeight: "70vh" }}
      >
        <div className="container">
          <h1
            className="title-main text-center"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            Your NFTs
          </h1>
          <OwnAssestList />
        </div>
      </main>
    </div>
  );
}
