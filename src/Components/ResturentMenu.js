import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const ResturentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId); //744919,666233
      //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5096133&lng=78.3168628&restaurantId=666233");
      const jsonData = await data.json();
      setResInfo(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  if (resInfo === null) return <Shimmer />;

  // console.log(
  //   resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  // );
  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;
  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {"Rs"} -{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li>
            {items.card.info.name} - {"Rs"}{" "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResturentMenu;
