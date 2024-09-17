import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestarantMenu = (ResId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + `${ResId}`);
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestarantMenu;