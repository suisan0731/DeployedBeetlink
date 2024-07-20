"use client";

import React from "react";
import "../style.css";
import PostsView from '../../../components/posts-view';
import { useRouter } from "next/navigation";
import TopButton from "../../../components/top-button";
import Recent from "../../../components/recent";

const Page = () => {
  const router = useRouter(); 

  return (
    <div className="outer-container h-screen bg-white">
      <div className="flex justify-center px-5 safari-hack w-full">
        <div className="max-w-screen-lg w-full p-8">
          <TopButton title="ホーム" />
          <div>
            <PostsView />
          </div>
          <Recent />
        </div>
      </div>
    </div>
  );
}

export default Page;
