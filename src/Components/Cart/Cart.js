import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {

    return (
        <div className="cart-area">
            <div className="main-cart">
                <h3 className="header">Check your courses here!</h3>
                <br/>
                <h4>Courses Taken:</h4>
                <h5>Total Fees:</h5>
                <br/>
                <button className="check">Check All Courses</button>
            </div>
        </div>
    );
};

export default Cart;