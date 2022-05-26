import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingPage from '../../LoadingPage/LoadingPage';

const ProfileForm = ({ preloaderData }) => {
    const navigate = useNavigate()
    const { _id } = preloaderData
    const { register, handleSubmit, reset } = useForm({ defaultValues: preloaderData });

    const [updateProfile, updating] = useUpdateProfile(auth);

    if (updating) { return <LoadingPage /> }

    const onSubmit = (updateUserInfo) => {
        const { name } = updateUserInfo
        fetch(`https://peaceful-chamber-04426.herokuapp.com/updateUser/${_id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                navigate('/deshboard')
            })

    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold py-3'>Update Your Profile</h1>
            <div className='flex justify-center'>
                <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" required {...register("email")} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* Address */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input required {...register("address")} type="text" placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* Education Quality */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education Quality</span>
                        </label>
                        <input required {...register("educationQuality")} type="text" placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* number */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input required {...register("number")} type="number" placeholder="Enter Your Number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* facebook */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Facebook Link</span>
                        </label>
                        <input required {...register("facebook")} type="text" placeholder="Enter Your Facebook Link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* Linkdin */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Linked In Profile</span>
                        </label>
                        <input required {...register("linkedIn")} type="text" placeholder="Enter Your Linked In Profile Link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* number */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Github</span>
                        </label>
                        <input required {...register("github")} type="text" placeholder="Enter Your Github Link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='my-4 btn w-full max-w-xs' type='submit' value="Update" />
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;