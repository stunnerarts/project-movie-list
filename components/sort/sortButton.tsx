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
    <div className="flex justify-end mt-6">
      <button
        className="rounded-lg 
        bg-indigo-900 hover:bg-indigo-800 
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