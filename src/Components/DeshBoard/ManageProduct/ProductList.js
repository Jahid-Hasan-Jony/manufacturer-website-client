import React from 'react';


const ProductList = ({ setDeleteProductInfo, data }) => {
    const { name, imgURL, minQuantity, availableQuantity, price } = data
    return (
        <div className="card my-4 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imgURL} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold'>{`Minimum Quantity : ${minQuantity}`}</p>
                <p className='font-bold'>{`Available Quantity : ${availableQuantity}`}</p>
                <p className='font-bold'>{`Price: ${price} TK`}</p>
                <div className="card-actions flex justify-center">
                    <label onClick={() => setDeleteProductInfo(data)} htmlFor="deleteOrder" className='btn text-white btn-error'>Delete Product</label>
                </div>
            </div>
        </div>
    );
};

export default ProductList;