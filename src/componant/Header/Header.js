import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img className='header-img' src={logo} alt="logo"/>
            </div>
            <nav className='nav-item'>
                <a href="/shop">Shop</a>
                <a href="/Order">Order Review</a>
                <a href="/manage-inventory">Manage inventory here</a>
            </nav>
        </div>
    );
};

export default Header;