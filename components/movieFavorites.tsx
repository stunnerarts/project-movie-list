import React, { useState, useEffect } from "react";
import {
  HeartIcon,
  TrashIcon,
  XCircleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import { JsxElement } from "typescript";
import SortList from "./sort/sortList";

type Props = {
  favorites: any;
  setFavorites: any;
  placeHolder: any;
  setPlaceHolder: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

function MovieFavorites(props: Props) {
  const { favorites, setFavorites, placeHolder, setPlaceHolder } = props;
  const posterHolderElement = (
    <FilmIcon className="h-48 w-48 flex items-center text-slate-800 mix-blend-screen opacity-40" />
  );


 
  return (
    <div className="movie-favorites">
      <h2
        className="text-3xl     
           text-indigo-200"
      >
        Movie Favorites
      </h2>
      <div className="">
        <SortList sortableLists={favorites} 
        placeHolder={placeHolder} 
        setFavorites={setFavorites}
        setPlaceHolder={setPlaceHolder}
        />
        
      </div>
    </div>
  );
}

export default MovieFavorites;
