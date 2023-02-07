import styles from "../../styles/Thirdweb.module.css";
import React from "react";
import Upbond, { UPBOND_BUILD_ENV, BUTTON_POSITION_TYPE } from "@upbond/upbond-embed";


export default function ThirdwebGuideFooter(
) {
  const url = "https://github.com/thirdweb-example/marketplace-next-ts";
// Your code ...
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
      widgetConfig: {
        showAfterLoggedIn: true,
        showBeforeLoggedIn: false,
      },
      network: {
        host: "mumbai",
        chainId: 80001,
        networkName: "Mumbai",
        blockExplorer: "",
        ticker: "MUMBAI",
        tickerName: "MUMBAI",
        rpcUrl: "https://polygon-testnet.public.blastapi.io/",
      },
      dappRedirectUri: "https://demo-dapps.com"
    })
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/github.png"}
          alt="github url"
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}
