import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div className="flex items-center m-20 border border-gray-300 rounded shadow p-2 ">
                <img className="rounded-full mr-4 w-150 h-100" src="https://randomuser.me/api/portraits/women/50.jpg" />
                <div className="text-gray-700">
                    <h2 className=" font-bold text-gray-900 text-2xl">Erin Lindford</h2>
                    <div className="text-sm">Full Stack Developer</div>
                    <div className="text-sm">erinlindford@example.com</div>
                    <div className="text-sm">(555) 765-3245</div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;