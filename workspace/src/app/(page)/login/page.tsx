import React from "react";
import CustomButton from "../../../components/custom-button";
import EmailPassword from "../../../components/e-mail-password";

export default function Home() {
  return (
    <main>
      <div
        
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20vh",
        }}
      >
        <img
          
          src="./music-img.png"
          alt="音符の画像"
          style={{
            margin: "5px",
            marginTop: "10px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
        <text
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          サイト名
        </text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <text>○○（サイト名）は音楽共有SNSです！</text>
          <text>ログインしてあなたの好きな音楽を共有しましょう！</text>
        </div>
        <EmailPassword EmailText="Email" PasswordText="Password" />
        <a
          className="link link-info"
          href="/"
          style={{ fontSize: "11px", marginRight: "145px" }}
        >
          アカウント作成はこちら
        </a>
        <CustomButton text="ログイン" href="/"/>
      </div>
    </main>
  );
}
