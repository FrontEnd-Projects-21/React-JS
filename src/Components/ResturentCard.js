import { LOGO_URL } from "../utils/constants";
const ResturentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  // console.log(resData?.info);
  // Cloudinary image URL

  return (
    <div className="resturent-card m-4 p-4 w-[200px] bg-orange-200 rounded-lg hover:bg-orange-400" >
      <img className="resturent-logo" src={LOGO_URL} alt="restaurant-logo" />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export const withpromotedLabel = (ResturentCard) =>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-red-600 text-white rounded-lg m-2 p-2">Promoted</label>
      <ResturentCard {...props}/>
      </div>
      
    )
  }
}
export default ResturentCard;
