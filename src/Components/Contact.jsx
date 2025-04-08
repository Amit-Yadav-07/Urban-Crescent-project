import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import AOS from "aos";
import "aos/dist/aos.css";
import Input from './Input';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [result, setResult] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('access_key', 'b6b3e06e-7c3c-42fb-8992-19639c821be3');

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data?.message);
        }
    };

    return (
        <div className="overflow-x-hidden">
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-8 section-center px-4 sm:px-6 md:px-8 mt-12" style={{ margin: '3rem auto' }}>
                {/* Image Section */}
                <div
                    className="h-[400px] lg:h-[600px] rounded self-center bg-[url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-no-repeat"
                    data-aos="fade-right"
                ></div>

                {/* Form Section */}
                <div className="w-full pb-12 self-center" data-aos="fade-left">
                    <SubHeading text="Let's Get in Touch" />
                    <form onSubmit={submitHandler} className="w-full">
                        <Input type="text" id="full-name" placeholder="Enter your Name" name="name" labelName="Full Name" />
                        <Input type="email" id="email" placeholder="Enter your Email" name="email" labelName="Email" />
                        <Input type="number" id="number" placeholder="Enter your Number" name="number" labelName="Number" />

                        <div className="mb-6 mt-4">
                            <label htmlFor="message" className="mb-2 block text-lg font-bold text-gray-600">Bio</label>
                            <textarea
                                name="message"
                                className="textarea bg-white text-black h-[140px] w-full px-5 py-2.5 text-base font-normal shadow-xs border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Add Your Query"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full shadow-sm rounded-xl btn btn-outline button transition-all duration-700 text-white font-semibold mt-6"
                        >
                            Submit
                        </button>
                    </form>
                    <span className="text-black block text-center mt-4">{result}</span>
                </div>
            </section>

            {/* Map Section */}
            <div className="section-center h-[350px] px-4 sm:px-6 md:px-8 mt-12" data-aos="fade-down" style={{ margin: '3rem auto' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d40865.74624066099!2d80.96184916474293!3d26.84019361915764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s820%2C%20Omaxe%20New%20Hazratganj%20Sec-6%2C%20GOMTINAGAR!5e1!3m2!1sen!2sin!4v1741586570226!5m2!1sen!2sin"
                    className="rounded-md w-full h-full"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
