import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

const Products = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
            key={product._id}
        >
            {
                location.pathname == "/carts" &&
                <div className="w-8 h-8 bg-red-500 rounded-2xl flex justify-center items-center absolute top-0 right-0">
                    <p className="text-white">{product.quantity}</p>
                </div>
            }
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature, index) => {
                        return <li className='text-sm' key={index}>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {location.pathname !== '/carts' &&
                    <button
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => dispatch(addToCart(product))}>
                        Add to cart
                    </button>}
                {
                    location.pathname === '/carts' &&
                    <button
                        className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        onClick={() => dispatch(removeFromCart(product))}>
                        Remove from cart
                    </button>
                }
                {
                    location.pathname === '/carts' &&
                    <button
                        className='bg-blue-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                        See details
                    </button>
                }


            </div>
        </div>
    );
};

export default Products;