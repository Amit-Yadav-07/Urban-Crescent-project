
import React from 'react';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import img1 from '../assets/images/folder.png'
import img2 from '../assets/images/design-thinking.png'
import img3 from '../assets/images/execute.png'
import img4 from '../assets/images/key.png'

import productOne from '../assets/images/product-img/img1.jpeg'
import productTwo from '../assets/images/product-img/img2.jpeg'
import productThree from '../assets/images/product-img/img3.jpeg'
import productFour from '../assets/images/product-img/section-three/portfolio-section-2.jpg'

// portfolio_section_img one
import portfolioSectionOneImgOne from '../assets/images/product-img/section-one/portfolio-section-1.jpg'
import portfolioSectionOneImgTwo from '../assets/images/product-img/section-one/portfolio-section-2.jpg'
import portfolioSectionOneImgThree from '../assets/images/product-img/section-one/portfolio-section-3.jpg'
import portfolioSectionOneImgFour from '../assets/images/product-img/section-one/portfolio-section-4.jpg'

// portfolio_section_img two
import portfolioSectionTwoImgOne from '../assets/images/product-img/section-two/portfolio-section-one.jpg'
import portfolioSectionTwoImgTwo from '../assets/images/product-img/section-two/portfolio-section-two.jpg'
import portfolioSectionTwoImgThree from '../assets/images/product-img/section-two/portfolio-section-three.jpg'
import portfolioSectionTwoImgFour from '../assets/images/product-img/section-two/portfolio-section-four.jpg'

// portfolio_section_img three
// import portfolioSectionThreeImgOne from '../assets/images/product-img/section-three/portfolio-section-1.jpg'
import portfolioSectionThreeImgTwo from '../assets/images/product-img/section-three/portfolio-section-2.jpg'
import portfolioSectionThreeImgThree from '../assets/images/product-img/section-three/portfolio-section-3.jpg'
import portfolioSectionThreeImgFour from '../assets/images/product-img/section-three/portfolio-section-4.jpg'

// portfolio_section_img four
import portfolioSectionFourImgOne from '../assets/images/product-img/section-four/portfolio-section-1.jpg'
import portfolioSectionFourImgTwo from '../assets/images/product-img/section-four/portfolio-section-2.jpg'
import portfolioSectionFourImgThree from '../assets/images/product-img/section-four/portfolio-section-3.jpg'
import portfolioSectionFourImgFour from '../assets/images/product-img/section-four/portfolio-section-4.jpg'

// portfolio_section_img four
import portfolioSectionFiveImgOne from '../assets/images/product-img/section-five/portfolio-section-1.jpg'
import portfolioSectionFiveImgTwo from '../assets/images/product-img/section-five/portfolio-section-2.jpg'
import portfolioSectionFiveImgThree from '../assets/images/product-img/section-five/portfolio-section-3.jpg'
import portfolioSectionFiveImgFour from '../assets/images/product-img/section-five/portfolio-section-4.jpg'


// portfolio_section_images

import portfolio1 from '../assets/images/product-img/section-one/portfolio-section-1.jpg'
import portfolio2 from '../assets/images/product-img/section-two/portfolio-section-one.jpg'
import portfolio3 from '../assets/images/product-img/section-two/portfolio-section-three.jpg'
import portfolio4 from '../assets/images/product-img/section-img.jpg'
import portfolio5 from '../assets/images/product-img/section-five/portfolio-section-1.jpg'
import portfolio6 from '../assets/images/product-img/section-five/portfolio-section-3.jpg'
import portfolio7 from '../assets/images/product-img/section-three/portfolio-section-2.jpg'
import portfolio8 from '../assets/images/product-img/section-five/portfolio-section-4.jpg'
import portfolio9 from '../assets/images/product-img/WhatsApp Image 2025-04-14 at 17.43.14_424b2bcf.jpg'
// import portfolio10 from 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600'

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
        img: productThree,
        text: 'Residential'
    },
    {
        id: 2,
        img: productFour,
        text: 'Furniture'
    },
    {
        id: 3,
        img: productOne,
        text: 'Commercial'
    },
    {
        id: 4,
        img: productTwo,
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
    { id: 1, image: portfolio1, productName: '' },
    { id: 2, image: portfolio2, productName: '' },
    { id: 3, image: portfolio3, productName: '' },
    { id: 4, image: portfolio4, productName: '' },
    { id: 5, image: portfolio5, productName: '' },
    { id: 6, image: portfolio6, productName: '' },
    { id: 7, image: portfolio7, productName: '' },
    { id: 8, image: portfolio8, productName: '' },
    { id: 9, image: portfolio9, productName: '' },
    // { id: 10, image: 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600', productName: '' },
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


export const portfolioSections = [
    {
        id: 1,
        title: 'A Timeless Legacy',
        location: 'MUMBAI, MAHARASHTRA',
        description: 'Adding an old world charm to a 6200 sq. ft. corporate office',
        images: [
            portfolioSectionOneImgOne,
            portfolioSectionOneImgTwo,
            portfolioSectionOneImgThree,
            portfolioSectionOneImgFour
        ]
    },
    {
        id: 2,
        title: 'Modern Elegance',
        location: 'DELHI, INDIA',
        description: 'Redefining sophistication in a 5000 sq. ft. workspace',
        images: [
            portfolioSectionTwoImgOne,
            portfolioSectionTwoImgTwo,
            portfolioSectionTwoImgThree,
            portfolioSectionTwoImgFour
        ]
    },
    {
        id: 3,
        title: 'Innovative Design',
        location: 'BANGALORE, INDIA',
        description: 'Merging technology and aesthetics in a dynamic co-working space',
        images: [
            // portfolioSectionThreeImgOne,
            portfolioSectionThreeImgTwo,
            portfolioSectionThreeImgThree,
            portfolioSectionThreeImgFour
        ]
    },
    {
        id: 4,
        title: 'Classic Touch',
        location: 'KOLKATA, INDIA',
        description: 'Bringing a traditional aesthetic to a contemporary setting',
        images: [
            portfolioSectionFourImgTwo,
            portfolioSectionFourImgOne,
            portfolioSectionFourImgThree,
            portfolioSectionFourImgFour
        ]
    },
    {
        id: 5,
        title: 'Futuristic Vision',
        location: 'HYDERABAD, INDIA',
        description: 'A cutting-edge approach to workspace architecture',
        images: [
            portfolioSectionFiveImgOne,
            portfolioSectionFiveImgTwo,
            portfolioSectionFiveImgThree,
            portfolioSectionFiveImgFour
        ]
    }
];
