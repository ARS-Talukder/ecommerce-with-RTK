import { useForm } from "react-hook-form";

const UpdateProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // let { model, price, status } = data;
        // status = status === "available" ? true : false;
        console.log(data)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="model">Model</label>
                <input type="text" className="input input-bordered input-success w-full my-1" name='model' defaultValue={"model"} id="model" {...register("model", { required: true })} />

                <label htmlFor="price">Price</label>
                <input type="number" className="input input-bordered input-success w-full my-1" name='price' defaultValue={"price"} id="price" {...register("price", { required: true })} />

                <label htmlFor="status">Status</label>
                <select name='status' className="input input-bordered input-success w-full my-1" defaultValue={status ? "available" : "stockout"} id="status" {...register("status", { required: true })}>
                    <option value="available">Available</option>
                    <option value="stockout">Stock out</option>
                </select>

                <input type="submit" className='btn btn-success w-full bg-red-300 text-xl my-1' value="UPDATE" />
            </form>
        </div>
    );
};

export default UpdateProduct;