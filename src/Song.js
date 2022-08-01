import React from "react";

export const Song = ({ artist, genre, name, year }) => {
  return (

    <div className="song">
      <h3 className="title">{name}</h3>
      <div className="contents">
        <div className="details left">
          <div className="artist">{artist}</div>
        </div>
        <div className="details right">
          <div className="genre">{genre}</div>
            <div className="year">{year}</div>
        </div>
      </div>
    </div>
  );
};
