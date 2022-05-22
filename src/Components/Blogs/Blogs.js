import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>1. How will you improve the performance of a React Application?</h1>
                <p>Here are the steps I will take to improve the performance of React application </p>
                <ol>
                    <li>1. I will try not to duplicate the code</li>
                    <li>2. I will be aware about unnecessary re-renders</li>
                    <li>3. Customize Lazy loading Image</li>
                    <li>4. Try to apply best algorithm</li>
                    <li>5. Avoid unnecessary data passing etc</li>
                </ol>
            </div>
            <div>
                <h1>What are the different ways to manage a state in a React application?</h1>
                <p>There are four types of state to properly manage in React apps. These are - </p>
                <ol type='1'>
                    <li>1. Local state.</li>
                    <p>Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</p>
                    <li>2. Global state.</li>
                    <p>Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                    <li>3. Server state.</li>
                    <p> Data that comes from an external server that must be integrated with our UI state.</p>
                    <li>4. URL state.</li>
                    <p>Data that exists on our URLs, including the pathname and query parameters.</p>
                </ol>
            </div>
            <div>
                <h1>Why you do not set the state directly in React?</h1>
                <p>when we update the state of a component all it's children are going to be rendered as well. or our entire component tree rendered.but when our entire component tree is rendered that doesn't mean that the entire DOM is updated. when a component is rendered, we basically get a react element, so that is updating our virtual dom. React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly</p>
            </div>
            <div>
                <h1>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>I will implement filter method for search to find products by name. for doing this implementation we have to follow belows method: </p>
                <p>const searchingProducts = array.filter(product => product.name == searchingName)</p>
            </div>
            <div>
                <h1>What is a unit test? Why should write unit tests?</h1>
                <p>Unit test is the process of particular testing of our code what we expect. for the expecting result of our codes and good implem or errorless purpose , we should to write unit tests.A unit test runs some code over a segment of your program checking the input and output. These tests allow developers to check individual areas of a program to see where(and why) errors occur. </p>
            </div>
        </div>
    );
};

export default Blogs;