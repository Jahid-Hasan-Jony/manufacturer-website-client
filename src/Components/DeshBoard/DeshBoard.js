import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DeshBoard = () => {
    return (
        <div className='container mx-auto'>
            <div className='sm:flex justify-between'>
                <h1 className='ml-7 text-3xl'>DeshBoard</h1>
                <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/deshboard'>My Profile</Link></li>
                        <li><Link to='/deshboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/deshboard/addReview'>Add Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshBoard;