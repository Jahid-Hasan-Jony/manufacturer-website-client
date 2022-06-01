import React from 'react';
import { Link } from 'react-router-dom';

const ComputerPart = (props) => {
    // console.log(props.data)
    const { _id, name, imgURL, description, minQuantity, availableQuantity, price } = props.data
    return (
        <div className="card border md:w-96 bg-base-100 shadow-xl">
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
    );
};

export default ComputerPart;