import { useEffect, useState } from "react";
import { MENU_CARD } from "../utils/contants"

const useRestrauntMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_CARD + resId);
    const json = await data.json();
    setResinfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
