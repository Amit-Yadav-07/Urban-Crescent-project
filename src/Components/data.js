
import React from 'react';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoBrushSharp } from "react-icons/io5";

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


export const featured = [
    {
        id: 1,
        // icon: IoBrushSharp,
        heading: 'Modern Design',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 2,
        // icon: IoBrushSharp,
        heading: 'Outdoor Solutions',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 3,
        // icon: <IoBrushSharp />,
        heading: 'Environment Friendly',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    },
    {
        id: 3,
        // icon: <IoBrushSharp />,
        heading: 'Top Quality',
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,',
        btnText: 'Read More'
    }
]