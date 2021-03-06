import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingPage from '../../LoadingPage/LoadingPage';
import DeleteModal from './DeleteModal';
import Order from './Order';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { isLoading, data, refetch } = useQuery('orderDataPaid', () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/allOrders/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    const [cancelOrder, setCancelOrder] = useState(null);

    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <div>
            <div className='grid md:grid-cols-3'>
                {data.map(item => <Order key={item._id} setCancelOrder={setCancelOrder} refetch={refetch} order={item} />)}
            </div>

            <div>
                {cancelOrder && <DeleteModal cancelOrder={cancelOrder} />}
            </div>
        </div>
    );
};

export default MyOrders;