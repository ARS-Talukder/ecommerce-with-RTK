import { useGetProductsQuery } from "../../features/api/apiSlice";
import Product from "./Product";

const ProductList = () => {
    const { data, isLoading, isSuccess } = useGetProductsQuery();
    const products = data;

    let content;

    if (isLoading) {
        return "LOADING..."
    }
    if (isSuccess) {
        content = products.map((product, index) => <Product index={index} key={product._id} product={product}></Product>)
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>In Stock</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;