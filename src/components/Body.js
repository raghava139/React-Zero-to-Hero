import { useEffect, useState } from "react";
import RestaruantCard from "./RestaruantCard";
import { resList } from "./Utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {
    //useState ===> it's super powerful variable
    const [listofRestrsCards, setListofRestrsCards] = useState([])
    const [filteredCards, setFilteredRestarunts] = useState([])

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        console.log('useEffect called')
    }, [])
    console.log("test")
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4484217&lng=78.3884118&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        console.log('json', json)
        setListofRestrsCards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestarunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return listofRestrsCards?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        console.log('searchtext', searchText);
                        const filteredRests = listofRestrsCards.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log('filteredRests', filteredRests)
                        setFilteredRestarunts(filteredRests)
                    }}>search</button>
                </div>
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
                    filteredCards.map((restc) => (
                        <RestaruantCard key={restc.info.id} resData={restc} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;