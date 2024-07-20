import React from 'react';

interface CardProps {
  albumImageUrl: string ;
  musicTitle: string;
  commentTitle: string;
}

const Card: React.FC<CardProps> = ({ albumImageUrl, musicTitle, commentTitle }) => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl m-4 rounded-xl overflow-hidden">
      <img
        src={albumImageUrl}
        alt="Album Image"
        className="w-full h-full object-cover"
      />
      <div className="card-body bg-gray-200 text-black p-4">
        <h2 className="card-title text-lg font-bold">{musicTitle}</h2>
        <p className="text-sm">{commentTitle}</p>
      </div>
    </div>
  );
};

export default Card;
