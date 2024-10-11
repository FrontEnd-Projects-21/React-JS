import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  //Subscribing to the Store Using selector
  const cartItemValue = useSelector((store) => store.cart.items);
  // console.log(cartItemValue);
  return (
    <div className="flex justify-between bg-orange-200 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart -({cartItemValue.length} Items)</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
