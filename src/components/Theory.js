import React from 'react';
import './Theory.css'
const Theory = () => {
    return (
        <div className="theory-all">
            <div className='theory'>
                <h2>How React js Works</h2>
                <p>

                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                </p>
            </div>
            <div className='theory'>
                <h2>How use effect works</h2>

                The useEffect runs by default after every render of the component. When placing useEffect in our component we tell React that we want to run the callback as an effect. React will run the effect after rendering and after performing the DOM updates. If we pass only a callback, the callback will run after each render.
            </div>


            <div className='theory'>
                <h2>Props vs state difference</h2>

                While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
            </div>

            <p>Developed by Arafat Sikder</p>
        </div>
    );
};

export default Theory;