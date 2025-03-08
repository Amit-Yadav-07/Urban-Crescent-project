import React from 'react'
import SubHeading from './SubHeading'

const Contact = () => {
    return (
        <section className='flex flex-col md:flex-row section-center'>
            <div className='flex-1 md:h-[790px]'>
                <img className='h-[100%] w-[100%] object-cover' src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            <div className='flex-1 self-center w-[100%]' style={{ paddingBottom: '3rem' }}>
                <SubHeading text="Let's Get in Touch" />
                <form action="" className="" style={{ padding: '0px 2rem' }}>

                    <div className="relative">
                        <label htmlFor='full-name' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Full Name
                        </label>
                        <input type="text" id="full-name" className="block w-full px-5 py-2.5 bg-white text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none" placeholder="Enter your Name" required="" />
                    </div>

                    <div className="relative mb-6" style={{ margin: '1rem 0px' }}>
                        <label htmlFor='email' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Email
                        </label>
                        <input type="text" id="email" className="block w-full bg-white text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none " placeholder="Enter Your Email" required="" />
                    </div>

                    <div className="relative mb-6">
                        <label htmlFor='number' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Number
                        </label>
                        <input type="number" id="number" className="block w-full bg-white text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none " placeholder="Enter Your Password" required="" />
                    </div>

                    <div className="relative mb-6" style={{ marginTop: '1rem' }}>
                        <label htmlFor='password' className="flex items-center mb-2 text-gray-600 text-lg font-bold">Bio
                        </label>
                        <textarea className="textarea bg-white text-black h-[140px] block w-full px-5 py-2.5 text-base font-normal shadow-xs border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none" placeholder="Add Your Query"></textarea>
                    </div>

                    <button className="w-[100%] shadow-sm rounded-full btn btn-outline button transition-all duration-700 text-white font-semibold" style={{ marginTop: '1.5rem' }}>Sign Up</button>
                </form>

            </div>
        </section>
    )
}

export default Contact;