import { useContext } from "react";
import { RES_URL } from "./Utils/constants";
import UserTestContext from "./Utils/UserTestContext";

const RestaruantCard = (props) => {

  const { resData } = props;
  // console.log('rs',resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { deliveryTime } = sla;

  const {DefaultUserInfo} =useContext(UserTestContext)
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" data-testid="my_Restro_Cards">
      <img className='rounded-lg' alt='res-logo' src={`${RES_URL}${cloudinaryImageId}`} />
      <h3 className="font-bold py-4 text-lg">{name} </h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{DefaultUserInfo}</h4>
    </div>
  )
}

export const withPromotedLabel = (RestaruantCard) => {
  console.log('promoted',RestaruantCard)
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaruantCard {...props} />
      </>
    )
  }
}
export default RestaruantCard