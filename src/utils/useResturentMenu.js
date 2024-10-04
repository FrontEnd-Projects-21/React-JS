import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useResturentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const jsonData = await data.json();

      setResInfo(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  };
  return resInfo;
};

export default useResturentMenu;
