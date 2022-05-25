import React from 'react';
import { useQuery } from 'react-query';
import LoadingPage from '../../LoadingPage/LoadingPage';

const MyOrders = () => {
    const { isLoading, data, refetch } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <div>

        </div>
    );
};

export default MyOrders;