import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestarantMenu from "./Utils/useRestarantMenu";
import RestaruantCardCategory from "./RestaruantCategory";
import { useEffect, useState } from "react";
const RestroMenu = () => {

    const [showIndex, setShowIndex] = useState(null);
    const { ResId } = useParams();
    const resInfo = useRestarantMenu(ResId);
    const cardINfo = resInfo?.cards[2]?.card?.card?.info;

    console.log("name", cardINfo);
    if (!cardINfo) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } = cardINfo;
    const checking = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('checking', resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((rs) => rs?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log('categories', categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* categories accordions */}
            {categories?.map((res, index) => {
                return <RestaruantCardCategory
                    key={res?.card?.card?.title}
                    data={res?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            })}
        </div>
    )
}
export default RestroMenu;
