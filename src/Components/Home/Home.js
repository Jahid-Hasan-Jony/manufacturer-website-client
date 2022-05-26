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