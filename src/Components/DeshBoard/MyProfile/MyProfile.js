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
            <h1 className='text-4xl p-3'>My Profile</h1>
            <div className='card bg-base-100 shadow-xl border-2'>
                <div className='flex justify-end'>
                    <Link to='/deshboard/edit-profile' className='btn btn-error btn-sm text-white font-bold m-4'>Edit Profile</Link>
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
                        <div className='flex justify-event'>
                            <a className='text-blue-500 flex justify-around pr-2' href={facebook} target="_blank">
                                <svg
                                    className="w-6 mx-3 h-6 text-blue-600 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    />
                                </svg>
                                <span>Facebook</span></a>
                            <a className='flex justify-around text-blue-500 px-2' href={linkedIn} target="_blank">
                                <svg
                                    className="w-6 mx-3 h-6 text-blue-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                                <span>Linked In</span>
                            </a>
                            <a className='flex justify-around text-blue-500 px-2' href={github} target="_blank">
                                <svg className="w-6 mx-3 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                                    aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink">
                                    <path data-name="layer2"
                                        d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"></path>
                                    <path dataName="layer1" d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
                                        fill="#202020"></path>
                                </svg>
                                Github</a>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default MyProfile;