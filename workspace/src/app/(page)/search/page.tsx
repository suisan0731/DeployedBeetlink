
// 検索ページ
// サイトやAIが指示するままに書いたので内容を理解できていません
// とんでもないことになっていたら申し訳ないです
// 下のコメントアウトはもう一つの方法です

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopButton from "../../../components/top-button";

const Page: React.FC = () => {
  const [searchStr, setSearchStr] = useState("");
  const [token, setToken] = useState("");
  const [artistInformation, setArtistInformation] = useState<any[]>([]);
  const [album, setAlbum] = useState<any[]>([]);
  const router = useRouter();

  const getAccessToken = async () => {
    const CLIENT_ID = 'your-client-id';
    const CLIENT_SECRET = 'your-client-secret';
    const AUTH_URL = 'https://accounts.spotify.com/api/token';

    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    });

    const data = await response.json();
    setToken(data.access_token);
  };

  const handleSearch = async () => {
    if (!token) {
      await getAccessToken();
    }

    if (searchStr) {
      fetch(`https://api.spotify.com/v1/search?q=${searchStr}&type=artist&limit=20`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setArtistInformation(data.artists.items))
        .catch((err) => console.error(err));
    }
  };

  const trackView = (id: string) => {
    fetch(`https://api.spotify.com/v1/artists/${id}/albums?market=ES&limit=10`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setAlbum(data.items))
      .catch((err) => console.error(err));

    setArtistInformation([]);
  };

  return (
    <div className="outer-container h-screen bg-white">
      <div className="flex justify-center px-5 w-full">
        <div className="max-w-screen-lg w-full p-8">
          <div className="flex items-center mb-4">
            <button className="btn btn-ghost hover:bg-transparent" onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000000"
              >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-black">検索</h1>
          </div>

          <div className="flex justify-center mb-4 space-x-4">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs text-black bg-white border-2 border-black"
              placeholder="アーティストを検索"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />
            <button
              className="btn btn-active btn-neutral w-32 bg-gray-200 text-black hover:bg-sky-700 hover:text-white rounded-lg"
              onClick={handleSearch}
            >
              検索
            </button>
          </div>

          <div>
            {artistInformation.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">アーティスト</h2>
                <div className="grid grid-cols-2 gap-4">
                  {artistInformation.map(({ id, name, images }) => (
                    <div
                      key={id}
                      className="cursor-pointer text-center"
                      onClick={() => trackView(id)}
                    >
                      <img src={images[0]?.url} alt={name} className="w-24 h-24 object-cover mb-2 rounded-full" />
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {album.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">アルバム</h2>
                <div className="grid grid-cols-2 gap-4">
                  {album.map(({ id, images, name }) => (
                    <div
                      key={id}
                      className="cursor-pointer text-center"
                      onClick={() => trackView(id)}
                    >
                      <img src={images[0]?.url} alt={name} className="w-24 h-24 object-cover mb-2 rounded" />
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;





// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import ArtistView from "../../../components/artist-view";

// // 検索ページ2
// // サイトとAIが指示するままに書いたので内容をまったく理解できていません
// // とんでもないことになっていたら申し訳ないです

// const Page: React.FC = () => {
//   const [searchStr, setSearchStr] = useState("");
//   const [token, setToken] = useState("");
//   const router = useRouter();

//   const getAccessToken = async () => {
//     const CLIENT_ID = 'your-client-id';
//     const CLIENT_SECRET = 'your-client-secret';
//     const AUTH_URL = 'https://accounts.spotify.com/api/token';

//     const response = await fetch(AUTH_URL, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
//       },
//       body: new URLSearchParams({
//         grant_type: 'client_credentials',
//       }),
//     });

//     const data = await response.json();
//     setToken(data.access_token);
//   };

//   const handleSearch = async () => {
//     if (!token) {
//       await getAccessToken();
//     }
//   };

//   return (
//     <div className="outer-container h-screen bg-white">
//       <div className="flex justify-center px-5 safari-hack w-full">
//         <div className="max-w-screen-lg w-full p-8">
//           <div className="flex items-center mb-4">
//             <button className="btn btn-ghost hover:bg-transparent " onClick={() => router.back()}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="40px"
//                 viewBox="0 -960 960 960"
//                 width="40px"
//                 fill="#000000"
//               >
//                 <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
//               </svg>
//             </button>
//             <h1 className="text-2xl font-bold text-left text-black">検索</h1>
//           </div>

//           <div className="flex justify-center mb-4 space-x-4">
//             <input
//                 type="text"
//                 className="input input-bordered w-full max-w-xs text-black bg-white border-2 border-black"
//                 placeholder="アーティストを検索"
//                 value={searchStr}
//                 onChange={(e) => setSearchStr(e.target.value)}
//             />
//             <button className="btn btn-active btn-neutral w-32 bg-gray-200 text-black hover:bg-sky-700 hover:text-white rounded-lg"
//                 onClick={handleSearch}>
//                 検索
//             </button>
//           </div>

//           {searchStr && <ArtistView artistTerm={searchStr} token={token} />}

//           <div className="flex justify-center mt-4">
//             <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
//               戻る
//             </button>
//           </div>

//           <div className="mb-39"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;