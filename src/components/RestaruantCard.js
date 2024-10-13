import { RES_URL } from "./Utils/constants";

const RestaruantCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    const { deliveryTime } = sla;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className='rounded-lg' alt='res-logo' src={`${RES_URL}${cloudinaryImageId}`} />
        <h3 className="font-bold py-4 text-lg">{name} </h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }
export default RestaruantCard