import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {user ? <>
            <li><Link to='/myPortfolio'>Portfolio</Link></li>
            <li><Link to='/deshboard'>DeshBoard</Link></li>
            <li><Link to='/'>{user.displayName}</Link></li>
            <li onClick={() => logOut()}>
                <a href='/'>Log Out</a>
            </li>
        </> : <li><Link to='/login'>Log In</Link></li>
        }
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar w-100 bg-base-100">
                <div className="navbar-start navbar-start-css flex flex-row-reverse justify-between">
                    <div className="dropdown dropdown-nav">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content dropdown-content-nav mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">JN Industries Ltd</Link>
                </div>
                <div className="navbar-end navbar-end-css hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;