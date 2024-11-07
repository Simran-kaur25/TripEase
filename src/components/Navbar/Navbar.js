import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <a href='/' className='logo'>
                <img src={logo} alt='Logo' width={150} height={150} />
            </a>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/features">Features</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Services</Link>
                <Link to="/features">Contact Us</Link>
            </nav>
            <div className='hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};
