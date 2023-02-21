import { useAddress, useMetamask, useDisconnect,useWalletConnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Embed from "../components/Embed";
import { useEffect, useState } from "react";
import Upbond, { UPBOND_BUILD_ENV, BUTTON_POSITION_TYPE,UserInfo } from "@upbond/upbond-embed";
// import Upbond, { UPBOND_BUILD_ENV, BUTTON_POSITION_TYPE } from "@upbond/upbond-embed";
import upbondServices from "../lib/UpbondEmbed";
import { toast, Toaster } from "react-hot-toast";




export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress(); 
  // const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.png`}
              alt="Thirdweb Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "grey" }}>|</p>
            {/* <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p> */}
          </>
        ) : (
          <a
            className={styles.mainButton}
            // onClick={() => connectWithMetamask()}
            onClick={() => connectWithWalletConnect()}
          >
            Connect Wallet
          </a>
        )}
      </div>
      {address}aaas
    </div>
  );
}
