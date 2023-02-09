import React from "react";

type Props = { searchTerm: string; handleSearch: any };

const MovieSearchBar = (props: Props) => {
  const { searchTerm, handleSearch } = props;

  return (
    <div
      className="p-5 
    w-full z-10 h-32 fixed -mt-28 
    flex flex-col flex-center justify-center  
 bg-gradient-to-r from-slate-900 to-slate-900 
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
  );
};

export default MovieSearchBar;
