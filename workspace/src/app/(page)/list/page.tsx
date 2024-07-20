
"use client";

import React from "react";
import IframeCard from "../../../components/ifamecard";
import { useRouter } from "next/navigation";
import TopButton from "../../../components/top-button";

const Page = () => {
  const router = useRouter();
  const cardData = [
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 1",
    },
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 2",
    },
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 3",
    },
  ];

  return (
    <div className="outer-container h-screen bg-white">
      <div className="flex justify-center px-5 safari-hack">
        <div className="max-w-screen-lg p-8">
          <TopButton title="投稿一覧" />

          <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <IframeCard
                key={index}
                musicUrl={card.musicUrl}
                commentTitle={card.commentTitle}
              />
            ))}
          </div>

          {/*ペジネーション*/}
          <div className="mb-10" />
          <div className="flex justify-center mt-4">
            <div className="join">
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">99</button>
              <button className="join-item btn">100</button>
            </div>
          </div>
          <div className="mb-10" />
          <div className="flex justify-center">
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
