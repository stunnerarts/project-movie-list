import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  HeartIcon,
  TrashIcon,
  XCircleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import MovieSearchBar from "@/components/movieSearchBar";
import MovieSearchResults from "@/components/movieSearchResults";
import MovieFavorites from "@/components/movieFavorites";
type Props = {};

const MovieListApp = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("Star Wars");

  const [favorites, setFavorites] = useState([
    {
      Title: "",
      Year: "",
      imdbID: "",
      Type: "",
      Poster: "",
    },
  ]);
  const placeHolderElement = () => {
    return (
      <FilmIcon className="h-24 w-24 flex items-center text-slate-800 mix-blend-screen opacity-40" />
    );
  };
  const [placeHolder, setPlaceHolder] = useState(placeHolderElement);

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const addToFavorites = (movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }) => {
    if (!favorites.includes(movie)) {
      setFavorites([...favorites, movie]);
      setPlaceHolder(<span className="p-5"></span>);
    }
  };

  return (
    <>
      <MovieSearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      <div
        className=" movieAppContainer bg-slate-900  w-full  h-full 
        flex 
        min-[280px]:flex-col 
        min-[280px]:flex-warp  
        flex-center 
        flex-col  
        justify-evenly
        bg-gradient-to-r from-slate-900 to-indigo-900 
        text-l text-white  font-thin p-6 mt-28"
      >
        <MovieSearchResults
          searchTerm={searchTerm}
          addToFavorites={addToFavorites}
          placeHolder={placeHolder}
          setPlaceHolder={setPlaceHolder}
        />
        <MovieFavorites
          favorites={favorites}
          setFavorites={setFavorites}
          placeHolder={placeHolder}
          setPlaceHolder={setPlaceHolder}
        />
      </div>
    </>
  );
};

export default MovieListApp;
