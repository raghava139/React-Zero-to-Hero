import { useEffect, useState } from "react";
import RestaruantCard from "./RestaruantCard";
import { resList } from "./Utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

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

    const onlinseStatus = useOnlineStatus();
    if (onlinseStatus === false) {
        return <h1>Your Internet Connection is offline</h1>
    }
    return listofRestrsCards?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"
                        className="border border-solid border-black"
                        value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button
                        className="px-4 py-2  bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            console.log('searchtext', searchText);
                            const filteredRests = listofRestrsCards.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            console.log('filteredRests', filteredRests)
                            setFilteredRestarunts(filteredRests)
                        }}>search</button>
                </div>
                <div className="search m-4 p-4">
                    <button 
                    className="px-4 py-2  bg-gray-100 m-4 rounded-lg" onClick={() => {
                        let filteredCards = listofRestrsCards.filter((rest) => {
                            return rest.info.avgRating > 4.3
                        })
                        console.log('listofRestrs', filteredCards)
                        setListofRestrsCards(filteredCards);
                    }}>Top Rated Restaruants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredCards.map((restc) => (
                        <Link to={`/restro/${restc.info.id}`} key={restc.info.id}>
                            <RestaruantCard resData={restc} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;