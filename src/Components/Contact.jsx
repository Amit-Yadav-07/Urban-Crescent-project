import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

    const [result, setResult] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const res = Object.fromEntries(formData);

        formData.append('access_key', 'b6b3e06e-7c3c-42fb-8992-19639c821be3')

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json()

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();

        } else {
            console.log("Error", data);
            setResult(data.message);
        }

    }

    return (
        <>
            <section className='flex flex-col lg:flex-row gap-8 section-center'>
                <div className='flex-1 md:h-auto' data-aos='fade-right'>
                    <img className='h-[100%] w-[100%] aspect-3/4 object-cover' src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                </div>

                <div className='flex-1 self-center w-[100%]' style={{ paddingBottom: '3rem' }} data-aos='fade-left'>
                    <SubHeading text="Let's Get in Touch" />
                    <form action="" onSubmit={submitHandler} style={{ padding: '0px 0px px 0px' }}>

                        <div className="relative">
                            <label htmlFor='full-name' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Full Name
                            </label>
                            <input type="text" id="full-name" name='name' className="block w-full px-5 py-2.5 bg-white text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md  focus:outline-none" placeholder="Enter your Name" required />
                        </div>

                        <div className="relative mb-6" style={{ margin: '1rem 0px' }}>
                            <label htmlFor='email' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Email
                            </label>
                            <input type="text" id="email" name='email' className="block w-full text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none" placeholder="Enter Your Email" required />
                        </div>

                        <div className="relative mb-6">
                            <label htmlFor='number' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Number
                            </label>
                            <input type="number" id="number" name='number' className="block w-full text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md focus:outline-none" placeholder="Enter Your Password" required />
                        </div>

                        <div className="relative mb-6" style={{ marginTop: '1rem' }}>
                            <label htmlFor='password' className="flex items-center mb-2 text-lg font-bold text-gray-600">Bio
                            </label>
                            <textarea name='message' className="textarea bg-white text-black h-[140px] block w-full px-5 py-2.5 text-base font-normal shadow-xs border border-gray-300 rounded-md focus:outline-none" placeholder="Add Your Query"></textarea>
                        </div>

                        <button className="w-[100%] shadow-sm rounded-xl btn btn-outline button transition-all duration-700 text-white font-semibold" style={{ marginTop: '1.5rem' }}>Submit</button>
                    </form>
                    <span className='text-black block text-center' style={{ marginTop: '1rem' }}>{result}</span>

                </div>
            </section>

            <div className='section-center h-[400px]' style={{ margin: '3rem auto' }} data-aos='fade-down'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d40865.74624066099!2d80.96184916474293!3d26.84019361915764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s820%2C%20Omaxe%20New%20Hazratganj%20Sec-6%2C%20GOMTINAGAR!5e1!3m2!1sen!2sin!4v1741586570226!5m2!1sen!2sin" className='rounded-md' width='100%' height='100%' loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Contact;