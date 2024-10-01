import ResturentCard from "./ResturentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resturentList, setResturentList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            updatedList = resList.filter((res) => res.data.avgRating > 4);
            setResturentList(updatedList);
          }}
        >
          Top Rated Resturents
        </button>
      </div>
      <div className="resturent-container">
        {resturentList.map((resturent) => (
          <ResturentCard key={resturent.data.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
