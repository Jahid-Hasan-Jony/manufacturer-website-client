import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingPage from '../../LoadingPage/LoadingPage';

const stripePromise = loadStripe('pk_test_51L3KnHCL6NEIQgk1tz6irlwC3IF44SM2cTNG1XP9TLwLfim7QyVlsMfy5z1lg4tDRWQGERVx6GlzSD6uTpcoRjwS00wKdgzkOd');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/payment/${id}`
    const { isLoading, data } = useQuery(['payment', id], () =>
        fetch(url, {
            method: 'GET'
        }
        ).then(res => res.json()))
    if (isLoading) { return <LoadingPage></LoadingPage> }
    const { productName, productURL, quantity, productPrice, _id } = data
    return (
        <div>
            <div className='infoProduct'>
                <div className="card w-3/5 p-2 grid md:grid-cols-2 bg-base-100 shadow-xl">
                    <figure><img className='w-2/5' src={productURL} alt={productURL} /></figure>
                    <div className="card-body p-2">
                        <h2 className="card-title">
                            {productName}
                            <div className="badge badge-secondary">Unpaid</div>
                        </h2>
                        <p>Price : {productPrice}</p>
                        <p>Quantity : {quantity}</p>
                        <p>Tatal TK : {quantity * productPrice}</p>
                    </div>
                </div>
            </div>
            <div className='card m-3 w-96 p-2 bg-base-100 shadow-xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentInfo={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;