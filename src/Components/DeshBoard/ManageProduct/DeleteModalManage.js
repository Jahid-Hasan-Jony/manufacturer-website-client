import React from 'react';

const DeleteModalManage = ({ cancelOrder, refetch }) => {
    const { name,
        imgURL,
        _id } = cancelOrder

    const deteleProduct = () => {
        fetch(`https://peaceful-chamber-04426.herokuapp.com/data/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    return (
        <div>
            <input type="checkbox" id="deleteOrder" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="deleteOrder" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you Sure to  Delete Product!</h3>
                    <p>Product ID : {_id}</p>
                    <div className='flex justify-around p-3'>
                        <img className='w-1/4' src={imgURL} alt={name} />
                        <p className="py-4">{name}</p>
                    </div>
                    <div className='flex justify-end'>
                        <label onClick={deteleProduct} htmlFor="deleteOrder" className='btn text-white btn-error'>Delete Product</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteModalManage;