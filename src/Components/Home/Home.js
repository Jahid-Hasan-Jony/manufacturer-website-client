import React, { useEffect, useState } from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import ComputerPart from './ComputerPart/ComputerPart';

const Home = () => {
    const [computerParts, setComputerParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setComputerParts(data))
    }, [])
    return (
        <div>
            <div className='container mx-auto'>
                <section className='p-5'>
                    <h1>Tools</h1>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {computerParts.map(part => <ComputerPart key={part._id} data={part} />)}
                    </div>
                </section>
                <section>
                    <BusinessSummary />
                </section>
                <section>
                    <Reviews />
                </section>


            </div>
            <Footer />
        </div>
    );
};

export default Home;