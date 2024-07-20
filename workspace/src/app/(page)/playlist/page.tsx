"use client";
import React, { useEffect } from 'react';
import PlaylistMenu from '../../../components/playlist-menu';

const Page: React.FC = () => {
  useEffect(() => {
    const copyUrlButton = document.getElementById('copy-url');

    const handleCopyUrl = () => {
      if (!copyUrlButton) return;
      // data-urlの値を取得
      const url = copyUrlButton.getAttribute('data-url');
      if (!url) return;

      // クリップボードにコピー
      navigator.clipboard.writeText(url).then(() => {
        // フラッシュメッセージ表示
        const successMsg = document.querySelector('.success-msg') as HTMLElement;
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.style.opacity = '0';

          // フェードイン
          let opacity = 0;
          const fadeIn = setInterval(() => {
            if (opacity < 1) {
              opacity += 0.1;
              successMsg.style.opacity = opacity.toString();
            } else {
              clearInterval(fadeIn);
              // フェードアウト
              setTimeout(() => {
                const fadeOut = setInterval(() => {
                  if (opacity > 0) {
                    opacity -= 0.1;
                    successMsg.style.opacity = opacity.toString();
                  } else {
                    clearInterval(fadeOut);
                    successMsg.style.display = 'none';
                  }
                }, 50);
              }, 2000);
            }
          }, 50);
        } else {
          console.error('success-msg 要素が見つかりません');
        }
      }).catch(error => {
        console.error('クリップボードへのコピーに失敗しました:', error);
      });
    };

    if (copyUrlButton) {
      copyUrlButton.addEventListener('click', handleCopyUrl);
    }

    // クリーンアップ
    return () => {
      if (copyUrlButton) {
        copyUrlButton.removeEventListener('click', handleCopyUrl);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* 本当は楽曲一覧画面に戻る */}
      <a href='/'>
        <img src="./arrow-image.png" style={{ position: "absolute", top: "5vh", left: "30px" }} alt="戻る"></img>
      </a>
      <div className="dropdown dropdown-end" style={{ position: "absolute", top: "5vh", right: "30px" }}>
        <div tabIndex={0}>
          <img src='./export-image.png' alt="エクスポート" />
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a href="https://twitter.com">Xで共有</a></li>
          <li><a href="/create">投稿する</a></li>
          <li>
            <button id="copy-url" data-url="ここにURL">リンクをコピー</button>
            <div className="success-msg"
              style={{
                display: "none",
                position: "fixed",
                width: "300px",
                height: "40px",
                lineHeight: "25px",
                background: "#0e7fff",
                color: "#fff",
                top: "100px",
                left:"-100px",
                
                borderRadius: "5px",
              }}
            >クリップボードにコピーしました</div>
          </li>
        </ul>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "5px"
      }}>
        <img src='./samplepic/Himawari.jpg' style={{ width: "30%", borderRadius: "10%", marginTop: "10vh" }} alt="サンプル" />
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>プレイリスト名</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        {/* ここリストで管理したい */}
        <PlaylistMenu isEdit={false}/>
        <PlaylistMenu isEdit={false}/>
        <PlaylistMenu isEdit={false}/>
        <div style={{ width: "100vw", height: 1, background: "gray" }} />
      </div>
      {/* 編集画面に飛ぶリンク貼る */}
      <a href="/playlist-edit" className="link text-blue-500 hover:text-blue-700" style={{ marginLeft: "30px" }}>プレイリストを編集する</a>
    </div>
  );
}

export default Page;
