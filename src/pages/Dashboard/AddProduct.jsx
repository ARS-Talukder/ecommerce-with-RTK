import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let { model, image, price, brand, status, key1, key2, key3, key4 } = data;
        status = status === "available" ? true : false;
        const keyFeature = [key1, key2, key3.value, key4];
        const product = { model, image, price, brand, status, keyFeature };
        console.log(product);
        reset();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name='model' placeholder='Model' className="input input-bordered input-success w-full my-1" id="model" {...register("model", { required: true })} />

                <input type="text" name='image' placeholder='Img link' className="input input-bordered input-success w-full my-1" id="image" {...register("image", { required: true })} />

                <input type="number" name='price' placeholder='Price' className="input input-bordered input-success w-full my-1" id="price" {...register("price", { required: true })} />

                <select defaultValue={'Default'} name='brand' className="select select-success w-full my-1" id="brand" {...register("brand", { required: true })} >
                    <option value="Default" disabled>Select Brand</option>
                    <option value="amd">amd</option>
                    <option value="intel">intel</option>
                </select>

                <select defaultValue={'Default'} name='status' className="select select-success w-full my-1" id="status" {...register("status", { required: true })}>
                    <option value="Default" disabled>Availability</option>
                    <option value="available">Available</option>
                    <option value="stockout">Stock out</option>
                </select>

                <input type="text" name='key1' placeholder='Key Feature 1' className="input input-bordered input-success w-full my-1" id="key1" {...register("key1", { required: true })} />

                <input type="text" name='key2' placeholder='Key Feature 2' className="input input-bordered input-success w-full my-1" id="key2" {...register("key2", { required: true })} />

                <input type="text" name='key3' placeholder='Key Feature 3' className="input input-bordered input-success w-full my-1" id="key3" {...register("key3", { required: true })} />

                <input type="text" name='key4' placeholder='Key Feature 4' className="input input-bordered input-success w-full my-1" id="key4" {...register("key4", { required: true })} />

                <input type="submit" value="CONFIRM" className='btn btn-success w-full bg-red-300 text-xl my-1' />
            </form>
        </div >
    );
};

export default AddProduct;