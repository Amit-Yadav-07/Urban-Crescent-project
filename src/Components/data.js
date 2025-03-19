
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
        img: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Residential'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Furniture'
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Commercial'
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Residential'
    },
]


export const Testimonials = [
    {
        id: 1,
        name: 'alex',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis quas ducimus nobis non quam aliquid ab ipsum amet quia, perferendis nostrum repudiandae ut rem assumenda eius, deleniti consectetur culpa.'
    },
    {
        id: 2,
        name: 'peter',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis quas ducimus nobis non quam aliquid ab ipsum amet quia, perferendis nostrum repudiandae ut rem assumenda eius, deleniti consectetur culpa.'
    },
    {
        id: 3,
        name: 'anna',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis quas ducimus nobis non quam aliquid ab ipsum amet quia, perferendis nostrum repudiandae ut rem assumenda eius, deleniti consectetur culpa.'
    },
    {
        id: 4,
        name: 'john',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis quas ducimus nobis non quam aliquid ab ipsum amet quia, perferendis nostrum repudiandae ut rem assumenda eius, deleniti consectetur culpa.'
    },
    {
        id: 5,
        name: 'Doe',
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt reiciendis quas ducimus nobis non quam aliquid ab ipsum amet quia, perferendis nostrum repudiandae ut rem assumenda eius, deleniti consectetur culpa.'
    },
]


export const PortfolioSection = [
    { id: 1, image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 2, image: 'https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 3, image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 4, image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 5, image: 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 6, image: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 7, image: 'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 8, image: 'https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 9, image: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
    { id: 10, image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
]


export const HomeGallery = [
    { id: 1, img: 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, img: 'https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, img: 'https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, img: 'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, img: 'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, img: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, img: 'https://images.pexels.com/photos/1863622/pexels-photo-1863622.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const experience = [
    {
        id: 1,
        heading: '10 years experience',
        para: 'Estd. in 2014'
    },
    {
        id: 2,
        heading: '350,000 sqft',
        para: 'currently under construction'
    },
    {
        id: 3,
        heading: '35 team members',
        para: 'and growing'
    },
    {
        id: 4,
        heading: '100 projects',
        para: 'completed successfully'
    },
]

export const Accordions = [
    {
        id: 1,
        question: 'How do I create an account?',
        answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.'
    },
    {
        id: 2,
        question: 'I forgot my password. What should I do ?',
        answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.'
    },
    {
        id: 3,
        question: 'How do I update my profile information ?',
        answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes."
    },
]


export const portfolioSectionOne = [
    { id: 1, img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' },
]