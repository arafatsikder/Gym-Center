import React from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Theory from '../Theory';



const Cart = ({ cart }) => {

    let time = 0;
    for (const service of cart) {
        time = time + service.time
    }

    function addBreak() {
        document.getElementById('add-break').addEventListener("click", function (e) {
            const number = e.target.innerText
            const typed = document.getElementById('typed-numbers')
            typed.innerText = number;
        })
    }

    const notify = () => toast("Congratulation,Your Activity is Completed");



    return (

        <div className='cart'>
            <h2 className='cart-text'>MASHFIQ SOAD</h2>

            <h2 className='cart-text'>Rest time</h2>
            <div onClick={addBreak} id='add-break' className='break-body'>
                <div className='btn-row'>
                    <div className='btn-cart'>10</div>
                    <div className='btn-cart'>15</div>
                    <div className='btn-cart'>20</div>
                    <div className='btn-cart'>25</div>
                    <div className='btn-cart'>30</div>

                </div>

            </div>

            <div>
                <h2 className='cart-text'>Activity Progress</h2>
                <p className='break-time'>Exercise Time: {time} Seconds</p>
                <p className='break-time'>Break Time: <span id='typed-numbers'>0</span> Seconds</p>

            </div>
            <div className='activity'>
                <button onClick={notify} className='activity-btn'>Activity Finish</button>
                <ToastContainer />
            </div>
            {/* 
#358597
#F4A896 */}

        </div>


    );
};

export default Cart;