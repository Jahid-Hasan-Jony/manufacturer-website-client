import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, setCancelOrder, refetch }) => {
    order.refetch = refetch
    const { productName, productURL, quantity, productPrice, _id, transactionId } = order

    return (
        <div>
            <div className="card border m-3 w-96 bg-base-100 shadow-xl">
                <figure><img src={productURL} alt={productURL} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}
                        <div className={transactionId ? "p-2 badge badge-success text-white" : "text-white p-2 badge bg-error"}>{transactionId ? 'Paid' : 'Unpaid'}</div>
                    </h2>
                    <p>Price : {productPrice}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Tatal TK : {quantity * productPrice}</p>
                    {!transactionId && <div className="card-actions justify-between">
                        <Link to={`/deshboard/payment/${_id}`} className='btn text-white btn-accent'>Payment Now</Link>

                        <label onClick={() => setCancelOrder(order)} htmlFor="deleteOrder" className='btn text-white btn-error'>Cancel Order</label>
                    </div>}
                </div>
            </div>
        </div >
    );
};

export default Order;