import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../features/products/productsSlice";
import { Link } from "react-router-dom";

const Product = ({ product, index }) => {
    const { _id, model, brand, price, status, } = product;
    const dispatch = useDispatch();
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{model}</td>
            <td>{brand}</td>
            <td>
                {status === true ? <span className="text-green-400">Available</span> : <span className="text-red-400">Stock out</span>}
            </td>
            <td>{price}</td>
            <td>
                <button onClick={() => dispatch(removeProduct(_id))}>
                    <AiFillDelete className="text-xl text-red-500"></AiFillDelete>
                </button>
            </td>
            <td>
                <Link to="/dashboard/update_product" state={{ product: product }}>
                    <AiTwotoneEdit className="text-xl text-blue-500"></AiTwotoneEdit>
                </Link>
            </td>
        </tr>
    );
};

export default Product;