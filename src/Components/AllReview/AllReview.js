import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingPage from '../LoadingPage/LoadingPage';
import Reviews from '../Reviews/Reviews';

const AllReview = () => {
    const { isLoading, data, refetch } = useQuery('data', () =>
        fetch(`https://peaceful-chamber-04426.herokuapp.com/review`).then(res => res.json())
    )
    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className='py-4 radius md:py-12 grid md:grid-cols-3'>
            {data.map(item => <Reviews key={item._id} data={data} />)}
        </div>
    );
};

export default AllReview;