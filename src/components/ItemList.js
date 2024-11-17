import { useDispatch } from "react-redux";
import { RES_URL } from "./Utils/constants";
import { addItem } from "./Utils/Redux RTK/slices/Cartslice";

const ItemList = ({ items }) => {
    console.log('items', items)
     const dispatch = useDispatch();
    const  handleAddItem= (item)=>{
        //Dispatch An Action
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                items?.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border border-b-4  text-left flex justify-center">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item?.card?.info?.name}</span>
                                <span className="font-bold"> - ₹ {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) / 100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>

                        <div className="w-3/12 p-2">
                        <div className="absolute">
                            <button className="p-2 shadow-lg bg-black text-white mx-20 my-20 rounded-lg" onClick={()=>handleAddItem(item)}> ADD + </button>
                        </div>
                            <img src={RES_URL + item?.card?.info?.imageId} alt="res-logo" className="w-full" />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ItemList;