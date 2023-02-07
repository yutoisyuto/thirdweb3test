import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Upbond from "@upbond/upbond-embed";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const upbond = new Upbond();
  const init = async () => {
    await upbond.init({
      whiteLabel: {
        walletTheme: {
          name: "Sample App",
          logo: "https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png",
          buttonLogo: "https://cdn.freebiesupply.com/images/large/2x/medium-icon-white-on-black.png",
          modalColor: "#f3f3f3",
          bgColor: "#214999",
          bgColorHover: "#f3f3f3",
          textColor: "#f3f3f3",
          textColorHover: "#214999",
          upbondLogin: {
            globalBgColor: "#ffffff",
            globalTextColor: "#214999"
          }
        }
      },
    })
  }

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
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </div>
  );
}
