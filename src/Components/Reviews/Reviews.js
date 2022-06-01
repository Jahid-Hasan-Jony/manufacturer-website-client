import React, { useEffect } from 'react';
import { DynamicStar } from 'react-dynamic-star';

const Reviews = ({ data, refetch }) => {
    const Alldata = data
    return (
        <div className="md:px-4 m-1">
            <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
                <div className="w-100 md:px-4 mt-6 md:mt-0">
                    <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                        <div className="avatar p-2 m-2">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/RHdBRq4/profile-g4e8b79e24-640.png" />
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600">{Alldata.review}</p>
                            <div className="text-gray-900 font-bold uppercase mt-6">- {Alldata.name}</div>
                            <div className="text-gray-600 my-2">Rating - {Alldata.rating}/5</div>
                            <DynamicStar width='25' height='25' rating={Alldata.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;