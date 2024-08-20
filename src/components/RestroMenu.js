import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "./Utils/constants";
import { useParams } from "react-router-dom";
const RestroMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { ResId } = useParams();
    console.log(ResId)
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + `${ResId}`);
        // const data = await fetch(MENU_API + ResId +`&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setResInfo(json?.data)
    }
    const cardINfo = resInfo?.cards[2]?.card?.card?.info;
    console.log("name", cardINfo);
    if (!cardINfo) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } = cardINfo;
    const checking = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('checking', checking)
    console.log('itemCards', itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info.name} - {item?.card?.info.price}</li>)}
            </ul>
        </div>
    )
}
export default RestroMenu;
