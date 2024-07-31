import { useState } from "react";
import RestaruantCard from "./RestaruantCard";
import { resList } from "./Utils/mockData";

const Body = () => {
    //useState ===> it's super powerful variable
    const [listofRestrsCards, setListofRestrsCards] = useState(resList)

    //Normal Javascript
    // let listofRestrs= [
    //     {
    //         "info": {
    //           "id": "509004",
    //           "name": "Chinese Wok",
    //           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //           "costForTwo": "₹250 for two",
    //           "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Tibetan",
    //             "Desserts"
    //           ],
    //           "avgRating": 4,
    //           "sla": {
    //             "deliveryTime": 64,
    //           },
    //         }
    //       },
    //     {
    //         "info": {
    //           "id": "509005",
    //           "name": "KFC",
    //           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //           "costForTwo": "₹250 for two",
    //           "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Tibetan",
    //             "Desserts"
    //           ],
    //           "avgRating": 3,
    //           "sla": {
    //             "deliveryTime": 65,
    //           },
    //         }
    //       },
    //     {
    //         "info": {
    //           "id": "509006",
    //           "name": "Taj Kitchen",
    //           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //           "costForTwo": "₹250 for two",
    //           "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Tibetan",
    //             "Desserts"
    //           ],
    //           "avgRating": 4,
    //           "sla": {
    //             "deliveryTime": 66,
    //           },
    //         }
    //       },
    // ].

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let filteredCards = listofRestrsCards.filter((rest) => {
                        return rest.info.avgRating > 4.3
                    })
                    console.log('listofRestrs', filteredCards)
                    setListofRestrsCards(filteredCards);
                }}>Top Rated Restaruants</button>
            </div>
            <div className="res-container">
                {
                    listofRestrsCards.map((restc) => (
                        <RestaruantCard key={restc.info.id} resData={restc} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;