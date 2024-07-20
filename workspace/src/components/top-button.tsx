"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface TopButtonProps {
  title: string;
}

const TopButton: React.FC<TopButtonProps> = ({ title }) => {
  const router = useRouter();

  return (
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
      <h1 className="text-2xl font-bold text-left text-black">
        {title}
      </h1>
    </div>
  );
}

export default TopButton;
