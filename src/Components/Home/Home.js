import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import ComputerPart from './ComputerPart/ComputerPart';
import Page from './Page';
import Page2 from './Page2';

const Home = () => {
    const [computerParts, setComputerParts] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-chamber-04426.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setComputerParts(data))
    }, [])
    return (
        <div>
            <section>
                <Page />
            </section>
            <div className='container mx-auto'>
                <section className='p-5'>
                    <h1 className='font-bold text-center text-5xl py-10'>Tools</h1>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {computerParts.slice(0, 6).map(part => <ComputerPart key={part._id} data={part} />)}
                    </div>
                </section>
                <section className='py-7 my-12 bg-base-200 rounded-lg'>
                    <div className="m-7 hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/hc2kBGw/clark-young-f-Qx-MGk-YXq-FU-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"><span className='text-orange-500'>Explore our latest</span> price list & Catalogue</h1>

                            <button className="my-6 btn btn-primary text-white">Get Product List</button>
                        </div>
                    </div>

                </section>
                <section>
                    <BusinessSummary />
                </section>
                <section>
                    <h1 className='font-bold text-center text-5xl my-3'>Customer Review</h1>
                    <AllReview />
                </section>
            </div>
            <section>
                <Page2 />
            </section>
            <Footer />
        </div>
    );
};

export default Home;