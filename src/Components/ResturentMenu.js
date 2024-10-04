import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
const ResturentMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturentMenu(resId);
  if (resInfo === null) return <Shimmer />;

  // console.log(
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  // );
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {"Rs"} -{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} - {"Rs"}{" "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResturentMenu;
