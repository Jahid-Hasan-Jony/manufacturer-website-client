import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

export const UserPurchasePage = ({ preloaderData, refetch }) => {
    const [user] = useAuthState(auth)

    const { _id, name, imgURL, description, minQuantity, availableQuantity, price } = preloaderData


    const allDefaultValues = { name: user.displayName, email: user.email, quantity: minQuantity }

    const { register, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: allDefaultValues });

    const navigate = useNavigate()

    const onSubmit = (orderInfo) => {
        orderInfo.id = _id
        orderInfo.productName = name
        orderInfo.productURL = imgURL
        orderInfo.productPrice = price

        fetch(`https://peaceful-chamber-04426.herokuapp.com/orders/${orderInfo.email}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/deshboard/myOrders')
            })
    }

    return (
        <div className='container md:flex item-center justify-center mx-auto'>
            <div className="card md:w-2/4 md:h-2/4 border my-3 w-100 m-4 bg-base-100 shadow-xl">
                <div className='lg:flex'>
                    <figure className="p-10">
                        <img src={imgURL} alt={name} className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='font-bold'>{`Minimum Quantity : ${minQuantity}`}</p>
                        <p className='font-bold'>{`Available Quantity : ${availableQuantity}`}</p>
                        <p className='font-bold'>{`Price: ${price} TK`}</p>
                        <p className='font-bold'>Description :</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="card w-96 h-100 border my-3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Add Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} disabled className="input input-bordered w-full max-w-xs" />
                            </div>
                            {/* email */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email")} disabled className="input input-bordered w-full max-w-xs" />
                            </div>
                            {/* Address */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }
                                })} type="text" placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.address?.type === 'required' && < span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                </label>
                            </div>

                            {/* number */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Number is required'
                                    },
                                    minLength: {
                                        value: 11,
                                        message: 'wrong Number'
                                    }
                                })} type="text" placeholder="Enter Your Number" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.number?.type === 'required' && < span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                    {errors.number?.type === 'minLength' && < span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                </label>
                            </div>

                            {/* quantity */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: `Quantity field is required.`
                                    },
                                    min: {
                                        value: minQuantity,
                                        message: `Minimum ${minQuantity} you can purchase.`
                                    },
                                    max: {
                                        value: availableQuantity,
                                        message: `Sorry Maximum ${minQuantity} you can purchase.`
                                    }
                                })} type="text" placeholder="Enter Quantity value" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && < span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && < span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && < span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            {(errors.quantity?.type === 'min' || errors.quantity?.type === 'max') ?
                                <input className='btn w-full max-w-xs' disabled type='submit' value="Place Order" /> :
                                <input className='btn w-full max-w-xs' type='submit' value="Place Order" />
                            }
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};
