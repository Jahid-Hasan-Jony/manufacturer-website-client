import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingPage from '../../LoadingPage/LoadingPage';
import ProfileForm from './ProfileForm';

const Profile = () => {

    const [user] = useAuthState(auth);
    const { isLoading, data, refetch } = useQuery(['user', user.email], () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/users/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <LoadingPage />
    }

    return data ? <ProfileForm preloaderData={data} /> : <LoadingPage />
};

export default Profile;