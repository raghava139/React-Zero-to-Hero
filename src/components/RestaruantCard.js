import { RES_URL } from "./Utils/constants";

const RestaruantCard = (props) => {
    console.log(`props- ${props}`)
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    const { deliveryTime } = sla;
    return (
      <div className="res-card" style={{
        backgroundColor: '#f0f0f0'
      }}>
        <img className='res-logo' alt='res-logo' src={`${RES_URL}${cloudinaryImageId}`} />
        <h3>{name} </h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }
export default RestaruantCard