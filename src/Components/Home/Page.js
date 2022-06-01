import React from 'react';

const Page = () => {
    return (

        <div className="hero min-h-screen bg-lime-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/hc2kBGw/clark-young-f-Qx-MGk-YXq-FU-unsplash.jpg" className="md:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="md:text-5xl md:pt-0 pt-3 text-2xl  font-bold">Welcome To JN Industries Ltd!</h1>
                    <p className="py-6 md:w-3/5 text-md ">We provide a wide range of lubricating equipment that can be used in industrial, commercial, and household works.</p>
                    <p className='text-green-600 font-bold'>Now All Preference in One Place.</p>
                    <p className='text-red-600 font-bold pb-3'>Get Free Delivery on your Friday Orders.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Page;