import React from 'react';

const Reviews = ({ data }) => {
    const Alldata = data[0]
    return (
        <div className="container mx-auto px-4">
            <div className="md:flex md:flex-wrap md:-mx-4 mb-4">

                <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
                    <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                        <div>
                            <p className="text-gray-600">{Alldata.review}</p>
                            <div className="text-gray-900 font-bold uppercase mt-6">- {Alldata.name}</div>
                            <div className="text-gray-600">Rating - {Alldata.rating}/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;