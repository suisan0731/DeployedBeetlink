"use client";

import useTracks from "@/hooks/useTracks";
import React from "react";
import { Control, useWatch } from "react-hook-form";
import { PostData } from "./PostForm";

interface MusicCardProps {
  control: Control<PostData, any>,
}

const MusicCard: React.FC<MusicCardProps> = ({control}) => {
  const MusicName = useWatch({control,name: "MusicTitle",defaultValue: "ファタール"})
  const {data,isLoading} = useTracks(MusicName,1)
  const MusicId = data?.tracks[0].id
  return (
    <div className="flex justify-center items-center mb-4">

      {!isLoading ? <iframe
        className="rounded-lg"
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${MusicId}?utm_source=generator`}
        width="90%"
        height="170"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        // loading="lazy"
        title="Spotify Embed"
      ></iframe> : "Loading..."}
    </div>
  );
}

export default MusicCard;
