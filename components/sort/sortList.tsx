import React, { useState } from "react";
import FavoritesMovieCardWidget from "../Widgets/FavoritesMovieCardWidget";
import SortButton from "./sortButton";

type Props = {
  sortableLists: any;
  placeHolder?: any;
  setFavorites: any;
  setPlaceHolder: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

const SortList = (props: Props) => {
  const { sortableLists, placeHolder, setFavorites, setPlaceHolder } = props;
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (newSortOrder: React.SetStateAction<string>) => {
    setSortOrder(newSortOrder);
  };

  const sortedLists = sortableLists?.sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a?.Title?.localeCompare(b?.Title);
    } else {
      return b?.Title?.localeCompare(a?.Title);
    }
  });

  return (
    <>
    <SortButton onSortChange={handleSortChange} />
    <div className="drop-shadow-sm h-screen overflow-scroll ">
      
      <div className=" grid grid-cols-1 gap-1 
      md:grid-cols-2 md:gap-2 
      lg:grid-cols-2 lg:gap-2
      xl:grid-cols-3 xl:gap-2
      2xl:grid-cols-3 2xl:gap-2
      min-[1800px]:grid-cols-3 min-[1800px]:gap-2
      min-[2300px]:grid-cols-4 min-[2300px]:gap-2
      min-[2500px]:grid-cols-5 min-[2500px]:gap-2

       h-fit">
        {sortedLists?.map((sortableList: any) =>
          sortableList?.imdbID ? (
            <div key={sortableList?.imdbID}>
              <FavoritesMovieCardWidget
                favorites={sortableLists}
                favorite={sortableList}
                placeHolder={placeHolder}
                setFavorites={setFavorites}
                setPlaceHolder={setPlaceHolder}
              />

              {/* <h3
                className="text-lg font-medium 
            rounded-lg p-6 shadow-sm mb-4"
              >
                {sortableList?.Title}
              </h3> */}
            </div>
          ) : (
            []
          )
        )}
      </div>
    </div>
    </>
  );
};

export default SortList;
