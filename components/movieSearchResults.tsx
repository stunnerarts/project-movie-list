import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  TrashIcon,
  XCircleIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

type Props = {
  searchTerm: string;
  addToFavorites: any;
  placeHolder: any;
  setPlaceHolder: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

function MovieSearchResults(props: Props) {
  const { searchTerm, addToFavorites, setPlaceHolder } = props;
  
  const placeHolderElement = () => {
    return (
      <FilmIcon className="h-24 w-24 flex items-center text-slate-800 mix-blend-screen opacity-40" />
    );
  };

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
      <h2 className="text-3xl      text-indigo-200">Movie List</h2>
      <h4 className="text-xl"> Search Results for {`"` + searchTerm + `"`} </h4>

      <div className="text-white">
        {movies?.map((movie) => (
          <div
            key={movie?.imdbID}
            className=" w-full rounded-md border-gray-300 pl-7 pr-12 
            bg-gradient-to-r to-opacity-70  from-slate-900
            mix-blend-normal hover:mix-blend-screen 
            flex flex-row items-center
            focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl p-3 m-2"
          >
            {movie?.Poster ? (
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
              []
            )}

            <div className="p-5 flex flex-col ">
              <div>
                <span className="font-normal text-indigo-100 text-base">
                  {movie?.Title}{" "}
                </span>
                <div className="text-base">{movie?.Year}</div>
              </div>
              <button
                className="bg-indigo-900  
                bg-gradient-to-r from-indigo-800 to-indigo-900 opacity-90
                text-base font-normal flex flex-col items-center
               hover:bg-gradient-to-l hover:from-indigo-500 hover:to-indigo-600 hover:opacity-100 
               p-3 rounded-lg mx-0 w-24 "
                onClick={() => addToFavorites(movie)}
              >
                <HeartIcon
                  className="h-6 w-6  text-slate-300 opacity-50
                mix-blend-color-dodge
                   pl-0 pr-0"
                />
                <span>Add to Favorites</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearchResults;
