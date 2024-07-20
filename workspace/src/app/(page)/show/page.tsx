"use client";

import React from 'react';
import "../../globals.css";
import { couldStartTrivia } from 'typescript';
import { useRouter } from "next/navigation";
import TopButton from "../../../components/top-button";

const Page = () => {
  let albumImageUrl: string = '/sample/Himawari.jpg';
  let musicTitle: string = 'Music title';
  let Aritist: string = 'Artist name';
  let title:string = 'Title';
  let comment:string = 'Comment comment comment';
  let countHeart:number = 20;
  let tag:string = 'pop'
  const router = useRouter();

  return (
    <div className="outer-container">
      <div className="flex justify-center px-5 safari-hack w-full">
        <div className="max-w-screen-lg w-full p-8">
          <TopButton title="投稿" />
            {/* タイトル */}
            <div className="mb-1">
                <h2 className="text-left font-bold text-xl">{title}</h2>
            </div>

            <form className="create-page">
            {/* カード */}
            <div className="flex justify-center">
              <div className="card w-80 sm:w-96 my-4 mx-2 bg-white">
                <div className="flex items-center">
                  {/* 画像表示 */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                    <img className="w-full h-full object-cover" src={albumImageUrl} alt="Album Image" />
                  </div>

                  {/* 曲の名前 */}
                  <div className="card-body p-4 flex-1 bg-gray-200 text-black rounded-xl">
                    <div className="text-left">
                      <h2 className="card-title text-lg font-bold">{musicTitle}</h2>
                      <p className="text-sm">{Aritist}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* タグ */}
            <div className="badge badge-lg border-none text-black bg-gray-200 mb-5">
                {tag}
            </div>

            {/* コメント */}
            <div className="card-body p-4 flex-1 bg-gray-200 text-black rounded-xl mb-10">
                <div className="text-left">
                    <p className="text-sm">{comment}</p>
                </div>
            </div>

            {/* いいね */}
            <div className="tooltip flex justify-center bg-white text-white mb-10" data-tip={countHeart}>
             <button className="btn btn-circle border-none bg-pink-500 hover:bg-pink-600">
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
             </button>
            </div>
                        
            {/* ボタン */}
            <div className="flex flex-col space-y-4 items-center">
              <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
                戻る
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
