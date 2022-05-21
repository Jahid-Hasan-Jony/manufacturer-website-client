import React from 'react';
import './NotFoundPage.css'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="grid grid-cols-1 page_404 flex items-center justify-center">
            <div className="text-center">
                <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                    <h3 className="text-2xl">
                        Look like you're lost
                    </h3>

                    <p className="text-xl">the page you are looking for not avaible!</p>

                    <Link to="/" className="link_404">Go to Home</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;