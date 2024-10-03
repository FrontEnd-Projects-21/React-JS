import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import ResturentCard from "./ResturentCard";
import { Link } from "react-router-dom";
const Body = () => {
  const [resturentList, setResturentList] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);
  const [loading, setLoading] = useState(true); // For shimmer effect
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5096133&lng=78.3168628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResturentList(restaurants || []); // Set an empty array if restaurants is null/undefined
      setFilterResturants(restaurants);
      setLoading(false); // Stop shimmer after data is fetched
    } catch (error) {
      setLoading(false); // Stop shimmer in case of error
    }
  };

  const filterTopRated = () => {
    const updatedList = resturentList.filter((res) => res.info.avgRating > 4);
    setFilterResturants(updatedList);
  };
  const handleSearch = () => {
    const filteredList = resturentList.filter(
      (res) => res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()) // Make sure to return the result here
    );
    setFilterResturants(filteredList);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter the Resturent..."
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resturent-container">
        {filterResturants.map((resturent) => (
          <Link key={resturent.info.id} to={"/resturent/" + resturent.info.id}>
            <ResturentCard resData={resturent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

// {filterResturants.map((resturent) => {<Link key={resturent.info.id} to={"/resturent/"+resturent.info.id} >
//             <ResturentCard  resData={resturent} />
//             <Link />}
//             )
//          }
