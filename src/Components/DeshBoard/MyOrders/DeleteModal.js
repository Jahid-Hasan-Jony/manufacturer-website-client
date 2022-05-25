import React from 'react';

const DeleteModal = ({ cancelOrder }) => {
    const { productName, productURL, _id, id, refetch } = cancelOrder
    const deteleOrder = () => {
        fetch(`http://localhost:5000/allOrders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log('okk')
            })
    }
    return (
        <div>
            <input type="checkbox" id="deleteOrder" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="deleteOrder" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you Sure to Cancel Order!</h3>
                    <p>Product ID : {id}</p>
                    <div className='flex justify-around p-3'>
                        <img className='w-1/4' src={productURL} alt={productName} />
                        <p className="py-4">{productName}</p>
                    </div>
                    <div className='flex justify-end'>
                        <label onClick={deteleOrder} htmlFor="deleteOrder" className='btn text-white btn-error'>Remove Order</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteModal;