import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
import ResturentCategory from "./ResturentCategory";
import { useState } from "react";
const ResturentMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturentMenu(resId);
  const [showIndex, setShowIndex] = useState();
  if (resInfo === null) return <Shimmer />;

  // console.log(
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  // );
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.
  // filter((c)=>{c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR)
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const updatedCategory = categories.filter(
    (c) =>
      c.card.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories)

  // cards[2].card.card["@type"]
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(",")} - {"Rs"} -{costForTwoMessage}
      </p>
      {/* <h2>Menu</h2> */}
      {updatedCategory.map((category, index) => (
        <ResturentCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default ResturentMenu;
