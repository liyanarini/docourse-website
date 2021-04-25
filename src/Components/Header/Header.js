import React from 'react';
import logo from '../../image/logo2.jpeg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-area">
            <img src={logo} alt=""/>
            <div className="nav-area">
            <nav>
                <a href="top-category">Top Category</a>
                <a href="free-courses">Free Courses</a>
                <a href="review">Review</a>
                <a href="menu">Menu</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;