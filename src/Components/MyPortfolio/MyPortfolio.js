import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container mx-auto p-8 flex items-center justify-center'>
            <div class="card w-100 lg:card-side bg-base-100 shadow-2xl">
                <figure className='p-10'><img className='rounded' src="https://i.ibb.co/1qPMQJP/jn.jpg" alt="Album" /></figure>
                <div class="card-body">
                    <h2 className='font-bold'>Full Name : </h2>
                    <h1 class="text-2xl">Jahid Hasab Jony</h1>
                    <h2 className='font-bold'>E-mail : </h2>
                    <h1 class="text-2xl">jahidhasanjony48@gmail.com </h1>
                    <h2 className='font-bold'>Education Quality : </h2>
                    <h1 class="text-2xl">Diploma In Engineering of
                        <span class="tooltip px-2 text-blue-500 font-bold" data-tip="Computer Science and Teachnology">
                            CST
                        </span>
                    </h1>
                    <h2 className='font-bold'>Skills :</h2>
                    <div className='grid md:grid-cols-2'>
                        <div>
                            <h1 class="text-xl">HTML/CSS</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">Bootstrap</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">Tailwind CSS</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">JavaScript [JS, DOM, ES6]</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">React</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">Firebase</h1><progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">Node JS</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">MongoDB</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">Github</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h1 class="text-xl">RegEx</h1>
                            <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                        </div>
                    </div >
                    <h2 className='font-bold'>Some of My Projects :</h2>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <a className='text-blue-500 px-2' href='https://warehouse-97cd9.web.app/' target="_blank">1. Glaxy Glocery Store</a>
                        <a className='text-blue-500 px-2' href='https://photography-73c2f.firebaseapp.com/' target="_blank">2. JN's Photography
                        </a>
                        <a className='text-blue-500 px-2' href='https://bike-collections.netlify.app/' target="_blank">3. Best Bike Collection 2022</a>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default MyPortfolio;