import { useSelector } from "react-redux";
import Products from "../Shared/Products";

const Carts = () => {
    const state = useSelector(state => state);
    const carts = state.cart.cart;
    let content;
    if (carts == undefined) {
        return content = "LOADING..."
    }
    if (carts.length) {
        content = carts.map(product => <Products key={product._id} product={product}></Products>)
    }
    console.log(carts);
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                content
            }
        </div>
    );
};

export default Carts;