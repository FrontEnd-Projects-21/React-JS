import { LOGO_URL } from "../utils/constants";
const ResturentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;

  // Cloudinary image URL

  return (
    <div className="resturent-card" style={{ backgroundColor: "#feddc1" }}>
      <img className="resturent-logo" src={LOGO_URL} alt="restaurant-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturentCard;
