import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://opensea.io/collection/chfs";
  const url0 = "https://element.market/collections/chfs";
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
          opacity: 0.2,
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
          src={"/opensea.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
      
      <div
        style={{
          position: "fixed",
          bottom: -120,
          left: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(135deg)",
          backgroundColor: " #262935",
          opacity: 0.2,
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url0, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          left: 18,
        }}
      >
        <img
          src={"/element.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url0, "_blank")}
        />
      </div>

    </>
  );
}
