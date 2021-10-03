import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img className='header-img' src={logo} alt="logo"/>
            </div>
            <nav className='nav-item'>
                <Link  to="/shop">Shop</Link >
                <Link  to="/Review">Order Review</Link >
                <Link  to="/Inventory">Manage inventory here</Link >
            </nav>
        </div>
    );
};

export default Header;