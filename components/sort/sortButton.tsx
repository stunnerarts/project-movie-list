import React, { useState } from "react";

type Props = {onSortChange: any}

function SortButton(props: Props) {
    const {onSortChange} = (props)
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortChange = () => {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      onSortChange(sortOrder);
    };
  return (
    <div className="flex justify-end mt-6 shadow-lg pb-5 pr-6 sortContainer">
      <button
        className="rounded-lg shadow-md
         bg-gradient-to-r from-indigo-900 to-indigo-800 
         hover:from-indigo-800 
        text-gray-300 hover:text-white font-medium 
        py-2 px-4"
        onClick={handleSortChange}
      >
        Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  )
}

export default SortButton