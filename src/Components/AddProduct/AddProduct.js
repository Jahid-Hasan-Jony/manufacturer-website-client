import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const imgApi = '4d263ab07e4cb7ccbd6ba60fad02b992';

    const onSubmit = async (data) => {
        const imageData = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
        const formData = new FormData();
        formData.append('image', imageData)
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        imgURL: img,
                        description: data.description,
                        minQuantity: data.minQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price
                    }
                    fetch('https://peaceful-chamber-04426.herokuapp.com/data', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(product)
                    }).then(res => res.json()).then(result => {
                        reset()
                        toast.success('upload Product success')
                    })
                }

            })

    }
    return (
        <div className='mx-3'>
            <h1 className='text-center text-4xl font-bold py-3'>Add A Product</h1>
            <div className='flex justify-center'>
                <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" {...register("name")} placeholder='Enter Product name' className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* Description */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input required {...register("description")} type="text" placeholder="Enter Description" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* Available Quantity */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input required {...register("availableQuantity")} type="number" placeholder="Enter Your Available Quantity" className="input input-bordered w-full max-w-xs" />
                    </div>


                    {/* min Quantity */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input required {...register("minQuantity")} type="number" placeholder="Enter Your minimum Quantity" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* Price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input required {...register("price")} type="number" placeholder="Enter Product Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    {/* File */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input required {...register("image")} type="file" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className='my-4 btn w-full max-w-xs' type='submit' value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;