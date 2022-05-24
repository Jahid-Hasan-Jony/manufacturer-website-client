import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

const PurchasePage = () => {
    const { id } = useParams()
    const { isLoading, error, data } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/data/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingPage />
    }
    const { _id, name, imgURL, description, minQuantity, availableQuantity, price } = data
    return (
        <div className='container mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgURL} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>{`Minimum Quantity : ${minQuantity}`}</p>
                    <p className='font-bold'>{`Available Quantity : ${availableQuantity}`}</p>
                    <p className='font-bold'>{`Price: ${price} TK`}</p>
                    <p className='font-bold'>Description :</p>
                    <p>{description}</p>
                    <div className="card-actions flex justify-center">
                        <Link to={`/purchasePage/${_id}`} className="btn btn-wide btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;