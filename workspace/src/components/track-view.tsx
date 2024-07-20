// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// // アルバムのトラック情報を表示する
//  // 検索ページ2（非表示）で使用しているのでコメントアウトしています

// const TrackView = ({ album, token }) => {
//   const router = useRouter();
//   const [albumTrack, setAlbumTrack] = useState([]);
//   const [albumImg, setAlbumImg] = useState("");

//   const trackChange = (id) => {
//     router.push(`/Search?query=${id}`);
//   };

//   useEffect(() => {
//     // AlbumTrackのリセット
//     setAlbumTrack([]);
//     setAlbumImg("");
//   }, [album]);

//   const albumTrackPreview = async (id) => {
//     // track情報とともにアルバム画像も反映
//     try {
//       const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const albumData = await albumResponse.json();
//       setAlbumImg(albumData.images[1].url);

//       // album Track START
//       const tracksResponse = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks?market=ES&limit=20`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const tracksData = await tracksResponse.json();
//       setAlbumTrack(tracksData.items);
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };

//   return (
//     <div style={{ padding: "1rem" }}>
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <div style={{ marginBottom: "1rem" }}>
//           {albumImg && <img src={albumImg} alt="Album" style={{ width: "200px", height: "200px" }} />}
//         </div>
//         <ul>
//           {albumTrack.map(({ name, id }) => (
//             <li
//               onClick={() => trackChange(id)}
//               key={id}
//               style={{ cursor: "pointer", marginBottom: "0.5rem", listStyle: "none" }}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//         {album.map(({ images, name, id }) => (
//           <div
//             onClick={() => albumTrackPreview(id)}
//             key={id}
//             style={{ cursor: "pointer", textAlign: "center" }}
//           >
//             <img src={images[1].url} alt={name} style={{ width: "100px", height: "100px" }} />
//             <p>{name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrackView;
