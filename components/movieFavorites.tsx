import React, { useState, useEffect } from "react";
import {
  HeartIcon,
  TrashIcon,
  XCircleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import { JsxElement } from "typescript";

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

  const placeHolderElement = () => {
    return (
      <HeartIcon className="h-24 w-24 flex items-center text-slate-800 mix-blend-screen opacity-40" />
    );
  };
  const removeFromFavories = (id: string) => {
    setFavorites(
      favorites.filter((item: { imdbID: string }) => item.imdbID !== id)
    );
    const minArrayPlaceholderLimit = 2;
    if (favorites.length === minArrayPlaceholderLimit) {
      setPlaceHolder(placeHolderElement);
    }
  };
  return (
    <div className="movie-favorites">
      <h2
        className="text-3xl     
           text-indigo-200"
      >
        Movie Favorites
      </h2>
      <div className="">
        {favorites?.map((favorite: any) => (
          <>
            {favorite.Title ? (
              <div
                key={favorite?.imdbID}
                className="bg-gray-900 
                  rounded-2xl  opacity-90 font-light 
                  flex flex-col text-base md:text-l p-0 m-4
                  "
              >
                <div>
                  <figure
                    className="flex bg-slate-900 
                      bg-gradient-to-r from-indigo-900  to-slate-900
                      mix-blend-normal hover:mix-blend-screen 

                     text-white rounded-2xl  rounded-b-none p-0 dark:bg-slate-800"
                  >
                    {favorite?.Poster !== "N/A" ? (
                      <picture className="width: 12rem">
                        <source srcSet={favorite?.Poster} type="image/avif" />
                        <source srcSet={favorite?.Poster} type="image/webp" />
                        <img
                          className="
                            max-w-2xl max-h-72 w-28 h-auto  md:min-w-min md:max-w-max
                            rounded-tl-2xl  
                            rounded-b-none  mx-auto"
                          src={favorite?.Poster}
                          alt=""
                          width="384"
                          height="512"
                        />
                      </picture>
                    ) : (
                      posterHolderElement
                    )}

                    <div className="m-5">
                      <div
                        className="
                            
                            font-medium      
                        text-indigo-100"
                      >
                        {favorite?.Title}
                      </div>
                      <div>{favorite?.Year}</div>
                    </div>
                  </figure>

                  <button
                    className="bg-red-900
                         bg-gradient-to-r from-red-800  to-red-900
                         hover:bg-gradient-to-b hover:from-red-600 hover:to-red-700 hover:opacity-100
                         text-base font-normal items-end
                         text-white p-4 m-5 ml-5 rounded-lg mx-auto
                         flex flex-row"
                    onClick={() => removeFromFavories(favorite?.imdbID)}
                  >
                    <TrashIcon
                      className="h-7 w-7  text-stone-100 opacity-80
                       pl-1 pr-1"
                    />
                    <span>Remove from Favorites</span>
                  </button>
                </div>
              </div>
            ) : (
              <>{favorite.Title == "" ? placeHolder : []}</>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieFavorites;
