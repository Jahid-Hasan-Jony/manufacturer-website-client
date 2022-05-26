import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingPage from '../../LoadingPage/LoadingPage';
const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { isLoading, data, refetch } = useQuery(['users', user.email], () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/users/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) { return <LoadingPage /> }
    const {
        name,
        email,
        number,
        educationQuality,
        address,
        facebook,
        linkedIn,
        github
    } = data
    return (
        <div>
            <h1 className='text-5xl'>My Profile</h1>
            <div>
                <div className='flex justify-end'>
                    <Link to='/deshboard/edit-profile' className='btn btn-error btn-sm text-white font-bold'>Edit Profile</Link>
                </div>
                <div>
                    <div className="card-body">
                        <h2 className='font-bold'>Full Name : </h2>
                        <h1 className="text-2xl">{name}</h1>
                        <h2 className='font-bold'>E-mail : </h2>
                        <h1 className="text-2xl">{email}</h1>
                        <h2 className='font-bold'>Number : </h2>
                        <h1 className="text-2xl">{number}</h1>
                        <h2 className='font-bold'>Education Quality : </h2>
                        <h1 className="text-2xl">{educationQuality}
                        </h1>
                        <h2 className='font-bold'>Address:</h2>
                        <h1 className="text-2xl">{address}</h1>
                        <h2 className='font-bold'>Social Media :</h2>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <a className='text-blue-500 px-2' href={facebook} target="_blank">Facebook</a>
                            <a className='text-blue-500 px-2' href={linkedIn} target="_blank">Linked In
                            </a>
                            <a className='text-blue-500 px-2' href={github} target="_blank">Github</a>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default MyProfile;