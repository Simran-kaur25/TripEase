import React, { useState } from 'react';
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <a href='/' className='logo'>Logo</a>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Blogs</a>
                <a href='/'>Services</a>
                <a href='/'>Contact Us</a>
            </nav>
            <div className='hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};
