import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import ResturentCard from "./ResturentCard";
const Body = () => {
  const [resturentList, setResturentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true); // For shimmer effect
  const [error, setError] = useState(null); // New error state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.498864000000005&lng=78.30525689999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResturentList(restaurants || []); // Set an empty array if restaurants is null/undefined
      setFilteredList(restaurants || []);
      setLoading(false); // Stop shimmer after data is fetched
    } catch (error) {
      setError("Failed to load data"); // Set error message
      setLoading(false); // Stop shimmer in case of error
    }
  };

  const filterTopRated = () => {
    const updatedList = resturentList.filter((res) => res.info.avgRating > 4);
    setFilteredList(updatedList);
  };

  // if (loading) {
  //   return <Shimmer />;
  // }

  if (error) {
    return <h3>{error}</h3>; // Show error message if fetch fails
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resturent-container">
        {filteredList.length > 0 ? (
          filteredList.map((resturent) => (
            <ResturentCard key={resturent.info.id} resData={resturent} />
          ))
        ) : (
          <h3>No restaurants found</h3>
        )}
      </div>
    </div>
  );
};
export default Body;
