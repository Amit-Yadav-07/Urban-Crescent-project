
import React from 'react';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import img1 from '../assets/images/01.gif'
import img2 from '../assets/images/02.gif'
import img3 from '../assets/images/03.gif'
import img4 from '../assets/images/04.gif'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/portfolio',
        text: 'portfolio',
    },
    {
        id: 4,
        url: '/studio',
        text: 'studio',
    },
    {
        id: 5,
        url: '/contact',
        text: 'contact',
    },
];

// export const social = [
//     {
//         id: 1,
//         url: 'https://www.instagram.com',
//         // icon: <FaInstagram />,
//     },
//     {
//         id: 2,
//         url: 'https://www.facebook.com',
//         // icon: <FaFacebook />,
//     },
//     {
//         id: 3,
//         url: 'https://www.twitter.com',
//         icon: <FaXTwitter />,
//     },

// ];


export const Process = [
    {
        id: 1,
        img: img1,
        heading: 'BRIEFING',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 2,
        img: img2,
        heading: 'DESIGN',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 3,
        img: img3,
        heading: 'EXECUTION',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 4,
        img: img4,
        heading: 'HANDOVER',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    }
]

export const imgGrid = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
]