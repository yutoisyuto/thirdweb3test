import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import { Header } from "../components/Header";
// import Embed from "../components/Embed";
import { UpbondEmbedContext } from "../lib/upbondEmbed";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Embed from "../components/Embed";

// This is the chainId your dApp will work on.
// const activeChainId = ChainId.Goerli;
const activeChainId = ChainId.Mumbai;

// <UpbondEmbedContext>
// <ThirdwebProvider network={ChainId.Mumbai}>
//   <Embed/>
// </ThirdwebProvider>
// </UpbondEmbedContext>


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UpbondEmbedContext>
      <ThirdwebProvider activeChainId={ChainId.Mumbai}>
      <Embed />
        <Head>
          <title>thirdweb Marketplace with Next.JS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Learn How To Use Thirdweb's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
          />
          <meta
            name="keywords"
            content="Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
          />
        </Head>
        <Header />
        <Embed />
        <Component {...pageProps} />
        <ThirdwebGuideFooter />
      </ThirdwebProvider>
    </UpbondEmbedContext>
  );
}



export default MyApp;
