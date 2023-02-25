import React from "react";
import { TrashIcon, HeartIcon, FilmIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
type Props = {
  favorites: any;
  favorite: any;
  placeHolder: any;
  setFavorites?: any;
  setPlaceHolder: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

function FavoritesMovieCardWidget(props: Props) {
  const { favorites, favorite, placeHolder, setFavorites, setPlaceHolder } =
    props;

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
    <div>
      {/* {favorites?.map((favorite: any) => ( */}
      <>
        {favorite.Title ? (
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            key={favorite?.imdbID}
            className="bg-gray-900 
                rounded-2xl  opacity-90 font-light 
                flex flex-col text-base md:text-l p-0 m-4
                shadow-2xl relative
                "
          >
            <div>
              <figure
                className="flex bg-slate-900 
                    bg-gradient-to-r from-indigo-900  to-slate-900
                    mix-blend-normal hover:mix-blend-screen 
                    md:flex-wrap
                   text-white rounded-2xl  rounded-b-none p-0 dark:bg-slate-800"
              >
                <span className="imageBackdropContainer w-fit h-fit 
                overflow-screen  mix-blend-luminosity 
                absolute opacity-10">
                  <picture>
                    <img
                      className="imageFader w-fit h-auto mix-blend-multiply"
                      src={favorite?.Poster}
                      alt=""
                    />
                  </picture>
                </span>
                {favorite?.Poster !== "N/A" ? (
                  <picture className="width: 12rem">
                    <source srcSet={favorite?.Poster} type="image/avif" />
                    <source srcSet={favorite?.Poster} type="image/webp" />
                    <img
                      className="
                          max-w-2xl max-h-72 w-28 h-auto  md:min-w-min md:max-w-max
                          rounded-tl-2xl  
                           object-contain
                          rounded-b-none  mx-auto "
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
                className="bg-red-900 relative z-1
                       bg-gradient-to-r from-red-800  to-red-900
                       hover:bg-gradient-to-b hover:from-red-600 hover:to-red-700 hover:opacity-100
                       text-base font-normal items-end
                       text-white p-4 m-5  rounded-lg mx-5
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
          </motion.div>
        ) : (
          <>{favorite.Title == "" ? placeHolder : []}</>
        )}
      </>
      {/* ))} */}
    </div>
  );
}

export default FavoritesMovieCardWidget;
