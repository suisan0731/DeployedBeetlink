"use client";

import React from "react";

interface MusicCardProps {
  musicUrl: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ musicUrl }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <iframe
        className="rounded-lg"
        style={{ borderRadius: '12px' }}
        src={musicUrl}
        width="90%"
        height="170"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Embed"
      ></iframe>
    </div>
  );
}

export default MusicCard;
