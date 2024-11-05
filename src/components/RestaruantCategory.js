import { Component, useState } from "react";
import ItemList from "./ItemList";

const RestaruantCardCategory = ({ data ,showItems,setShowIndex}) => {
    // uncontrolled component
    // const [showItems, setShowItems] = useState(false);


    const clickedHere = () => {
        // setShowItems(!showItems);
        // controlled Component
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={clickedHere} >
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>

                {showItems ? <ItemList items={data?.itemCards} /> : null}
            </div>
        </div>
    )
}
export default RestaruantCardCategory;