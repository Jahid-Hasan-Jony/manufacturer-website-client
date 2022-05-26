import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (updateUserInfo) => {
        fetch(`https://peaceful-chamber-04426.herokuapp.com/review`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                toast.success('Reviw Added')
            })

    }
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-bold py-3'>Add Review</h1>
                <div className='flex justify-center'>
                    <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input placeholder='Your Name' required type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* Address */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <input required {...register("review")} type="textarea" placeholder="Enter Your Review" className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* number */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select {...register("rating")} className="select select-bordered w-full max-w-xs">
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <input className='my-4 btn w-full max-w-xs' type='submit' value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;