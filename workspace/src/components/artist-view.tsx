// import React, { useState, useEffect } from "react";
// import TrackView from "./track-view"; 

// // アーティスト情報を取得する
//  検索ページ2（非表示）で使用しているのでコメントアウトしています

// interface ArtistViewProps {
//   artistTerm: string;
//   token: string;
// }

// const ArtistView: React.FC<ArtistViewProps> = ({ artistTerm, token }) => {
//   const [artistInformation, setArtistInformation] = useState<any[]>([]);
//   const [album, setAlbum] = useState<any[]>([]);
//   artistTerm = 'remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis';

//   const getArtist = () => {
//     setArtistInformation([]);
//     setAlbum([]);

//     fetch(`https://api.spotify.com/v1/search?q=${artistTerm}`, { 
//       //&type=artist&limit=20
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     })
//       .then((response) => response.json())
//       .then((artistContentsResponse) => {
//         setArtistInformation(artistContentsResponse.artists.items);
//       })
//       .catch((err) => {
//         console.log("err:", err);
//       });
//   };

//   useEffect(() => {
//     if (artistTerm === "") {
//       console.log("no-data");
//     } else {
//       getArtist();
//     }
//   }, [artistTerm]);

//   const trackView = (id: string) => {
//     fetch(`https://api.spotify.com/v1/artists/${id}/albums?market=ES&limit=10`, {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     })
//       .then((response) => response.json())
//       .then((tracksResponse) => {
//         setAlbum(tracksResponse.items);
//       })
//       .catch((err) => {
//         console.log("err:", err);
//       });

//     setArtistInformation([]);
//   };

//   return (
//     <div>
//       {artistInformation.map(({ name, id }) => (
//         <div key={id}>
//           <p onClick={() => trackView(id)}>{name}</p>
//         </div>
//       ))}

//       <TrackView album={album} token={token} />
//     </div>
//   );
// };

// export default ArtistView;