import React, { useEffect, useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ paymentInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { productPrice, name, email } = paymentInfo

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [productPrice])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        } else { setCardError('') }
        setSuccess('')

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent.id)
            setSuccess("Congrats! Your Payment is completed")
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-error'>{cardError}</p>}
            {success && <div>
                <p className='text-green-500'>{success}</p>
                <p className='text-blue-500'>Your Transection ID : <span className='text-orange-500 font-bold'>{transactionId}</span></p>
            </div>}
        </div>
    );
};

export default CheckoutForm;