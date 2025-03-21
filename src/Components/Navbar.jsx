import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { links } from './data';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import Logo from '../assets/images/UC-logo.png'

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };


    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    const closeMenu = () => {
        setShowLinks(false);
    };


    return (
        <nav className='nav-container'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'><img src={Logo} className='logo object-contain' alt='logo' /></Link>
                    
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link to={url} onClick={closeMenu}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    <Link><FaInstagram className='text-2xl' /></Link>
                    <Link><FaFacebook className='text-2xl' /></Link>
                    <Link><FaXTwitter className='text-2xl' /></Link>
                    {/* {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })} */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;