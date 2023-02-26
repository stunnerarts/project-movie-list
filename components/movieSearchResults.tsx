import React, { useEffect, useState } from "react";
import { HeartIcon, FilmIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import axios from "axios";

type Props = {
  searchTerm: string;
  addToFavorites: any;
  placeHolder: any;
  setPlaceHolder: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

function MovieSearchResults(props: Props) {
  const { searchTerm, addToFavorites, setPlaceHolder } = props;

  const posterHolderElement = (
    <FilmIcon className="h-24 w-24 flex items-center text-slate-800 mix-blend-screen opacity-40" />
  );

  const [movies, setMovies] = useState([
    {
      Title: "Black Panther",
      Year: "2018",
      imdbID: "tt1825683",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    },
    {
      Title: "Black Panther: Wakanda Forever",
      Year: "2022",
      imdbID: "tt9114286",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    },

    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VII - The Force Awakens",
      Year: "2015",
      imdbID: "tt2488496",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode I - The Phantom Menace",
      Year: "1999",
      imdbID: "tt0120915",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode III - Revenge of the Sith",
      Year: "2005",
      imdbID: "tt0121766",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode II - Attack of the Clones",
      Year: "2002",
      imdbID: "tt0121765",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      imdbID: "tt3748528",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Year: "2017",
      imdbID: "tt2527336",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode IX - The Rise of Skywalker",
      Year: "2019",
      imdbID: "tt2527338",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=f2b88761`
      );

      setMovies(result.data.Search);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="movie-search-results flex-col">
      <h2 className="text-3xl text-indigo-200">Movie List</h2>
      <h4 className="text-xl p-7 pl-0 shadow-lg text-indigo-300 searchResultsContainer">
        {" "}
        Search Results for {`"` + searchTerm + `"`}{" "}
      </h4>

      <div
        className="text-white 
      overflow-scroll h-max 
      searchListContainer  overflow-y-scroll flex shadow-inner"
      >
        {movies?.map((movie) => (
          <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
         
            key={movie?.imdbID}
            className=" w-full rounded-2xl border-gray-300 pl-7 pr-12 
            bg-gradient-to-r to-opacity-70  from-slate-900
            hover:mix-blend-normal mix-blend-luminosity 
            flex flex-col max-[280px]:flex-col items-center
            focus:border-indigo-500 
            focus:ring-indigo-500 sm:text-xl p-3 m-2 shadow-lg" 
          >
            <div className="flex flex-row w-150">
              {movie?.Poster !== "N/A" ? (
                <picture>
                  <img
                    className=" max-w-2xl max-h-72 w-28 h-auto   
                      rounded-none  mx-auto "
                    src={movie?.Poster}
                    alt=""
                    width="384"
                    height="512"
                  />{" "}
                </picture>
              ) : (
                posterHolderElement
              )}

              <div className="p-5 flex flex-col ">
                <motion.button
                  id={"id-search-" + movie?.imdbID}
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-indigo-900  
                bg-gradient-to-r from-indigo-800 to-indigo-900 opacity-90
                 font-normal flex flex-col items-center
               hover:bg-gradient-to-l hover:from-indigo-500 hover:to-indigo-600 hover:opacity-100 
               p-3 rounded-lg mx-0 w-24 
               active:bg-red-900 focus:outline-none 
               target:shadow visited:text-red-600
               focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-80
               "
                  onClick={() => addToFavorites(movie)}
                >
                  <HeartIcon
                    className="h-6 w-6  text-slate-300 opacity-50
                  mix-blend-color-dodge
                 
                  pl-0 pr-0"
                  />
                  <span className="text-base font-medium text-indigo-200">Add to Favorites</span>
                </motion.button>
              </div>
            </div>
            <div>
              <div className="font-medium text-indigo-100 text-sm p-3 text-right">
                {movie?.Title}
                <div className="text-base text-indigo-300 font-medium">
                {movie?.Year}
              </div>
              </div>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearchResults;
