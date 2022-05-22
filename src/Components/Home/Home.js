import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ComputerPart from './ComputerPart/ComputerPart';

const Home = () => {
    const [computerParts, setComputerParts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setComputerParts(data))
    }, [])
    return (
        <div>
            <div className='container mx-auto'>
                <section className='p-5'>
                    <h1>Tools</h1>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {computerParts.map(part => <ComputerPart data={part} />)}
                    </div>
                </section>


            </div>
            <Footer />
        </div>
    );
};

export default Home;