import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

type Props = {};

const MovieListApp = (props: Props) => {
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

  const [searchTerm, setSearchTerm] = useState("black panther");

  const [favorites, setFavorites] = useState([
    {
      Title: "",
      Year: "",
      imdbID: "",
      Type: "",
      Poster: "",
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
    }
  };

  const removeFromFavories = (id: string) => {
    setFavorites(favorites.filter((item) => item.imdbID !== id));
  };

  return (
    <>
      <div
        className="p-5 flex flex-col flex-center justify-center     
      h-full bg-gradient-to-r from-slate-900 to-slate-900 
"
      >
        <label
          htmlFor="Search Movies by Title"
          className="block text-3xl font-light text-gray-100"
        >
          Search Movies by Title
        </label>
        <div className="relative mt-1 rounded-md shadow-sm ">
          <input
            className="  
            h-full bg-gradient-to-r to-slate-800 from-slate-800 opacity-70 
            text-indigo-100 font-light
            animate-pulse
            w-full rounded-3xl border-gray-100 pl-7 pr-12 
        focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl p-3"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div
        className="bg-slate-900  w-full
        h-full bg-gradient-to-r from-slate-900 to-indigo-900 
        text-l text-white flex  font-thin
    flex-center justify-center p-6"
      >
        <div className="flex-col">
          <h2 className="text-3xl      text-indigo-200">Movie List</h2>
          <h4 className="text-xl">
            {" "}
            Search Results for {`"` + searchTerm + `"`}{" "}
          </h4>

          <div className="text-white">
            {movies?.map((movie) => (
              <div
                key={movie?.imdbID}
                className=" w-full rounded-md border-gray-300 pl-7 pr-12 
                bg-gradient-to-r to-opacity-70  from-slate-900
                mix-blend-normal hover:mix-blend-screen 
                flex flex-row
                focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl p-3 m-2"
              >
                
                  { (movie?.Poster) ?
                  <picture>
                  <img
                    className="w-24 h-24 md:w-28 md:h-auto   
                          rounded-none  mx-auto "
                    src={movie?.Poster}
                    alt=""
                    width="384"
                    height="512"
                  />  </picture>: []
                  }
               

                <div className="p-5">
                  <span className="font-normal text-indigo-100">
                    {movie?.Title}{" "}
                  </span>
                  <div>{movie?.Year}</div>
                  <button
                    className="bg-indigo-900 
                   hover:bg-indigo-800 p-3 rounded-lg mx-auto"
                    onClick={() => addToFavorites(movie)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" ">
          <h2
            className="text-3xl     
           text-indigo-200"
          >
            Movie Favorites
          </h2>
          <div className="">
            {favorites?.map((favorite) => (
              <>
                {" "}
                {favorite.Title ? (
                  <div
                    className="bg-gray-900 
                  rounded-2xl  opacity-90 font-light text-xl 
                  flex flex-col text-l p-0 m-4
                  "
                  >
                    <div key={favorite?.imdbID}>
                      <figure
                        className="md:flex bg-slate-900 
                      bg-gradient-to-r from-indigo-900  to-slate-900
                      mix-blend-normal hover:mix-blend-screen 

                     text-white rounded-2xl  rounded-br-none p-8 md:p-0 dark:bg-slate-800"
                      >
                        <picture className="width: 12rem">
                          <source srcSet={favorite?.Poster} type="image/avif" />
                          <source srcSet={favorite?.Poster} type="image/webp" />
                          <img
                            className="w-24 h-24 md:w-48 md:h-auto 
                            md:rounded-tl-2xl  
                            rounded-br-none  mx-auto"
                            src={favorite?.Poster}
                            alt=""
                            width="384"
                            height="512"
                          />
                        </picture>

                        <div className="m-5">
                          <div
                            className="font-medium      
                        text-indigo-100"
                          >
                            {favorite?.Title}
                          </div>
                          <div>{favorite?.Year}</div>
                        </div>
                      </figure>

                      <button
                        className="bg-red-900 hover:bg-red-800 text-white p-2 m-5 ml-5 rounded-lg mx-auto"
                        onClick={() => removeFromFavories(favorite?.imdbID)}
                      >
                        Remove from Favorites
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListApp;
