import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "./Utils/Redux RTK/slices/Cartslice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log('cartitems', cartItems)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" type='button' onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length == 0 && <h1>Cart is Empty - Add Items to the Cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;