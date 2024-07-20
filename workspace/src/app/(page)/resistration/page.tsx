import React from "react";
import CustomButton from "../../../components/custom-button";
import EmailPassword from "../../../components/e-mail-password";
import UserName from "../../../components/username";

export default function Home() {
  return (
    <main>
      <div
        className="all-login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20vh",
        }}
      >
        <img
          className="music-image"
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
          アカウント作成
        </text>

        <EmailPassword
          EmailText="メールアドレスを入力"
          PasswordText="パスワードを設定"
        />
        <div style={{ margin: "5px" }}>
          <UserName />
        </div>
        <CustomButton text="アカウント作成" href="/" />
      </div>
    </main>
  );
}
