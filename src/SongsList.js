import React,{useContext} from "react";
import { Song } from "./Song";

import {MixtapeContext} from './MixtapeContext'

export const SongList = ({songs}) => {
  // Your code here! ✨
  const { genre, sortOrder } = useContext(MixtapeContext)

  return (
    <div >
      {songs.filter(song => genre === 'all' || song.genre === genre).sort((a, b) => {
        if (sortOrder === true) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }).map(song => (
        <Song key={song.name} {...song} />
      ))
      }
    </div>
  );
};

