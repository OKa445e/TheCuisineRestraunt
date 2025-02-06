import { useEffect,useState } from "react";

const useOnlineStatus = () => {
    const [onLineStauts,setOnlineStaus] = useState(true);

   useEffect(() => {
    window.addEventListener("offline",() => {
        setOnlineStaus(false);
    });

    window.addEventListener("online",() => {
        setOnlineStaus(true);
    });
   },[]);

    return onLineStauts;
}

export default useOnlineStatus;