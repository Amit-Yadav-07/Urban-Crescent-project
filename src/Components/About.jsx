import React from 'react'
import Video from './Video'
import video from '../assets/images/video.mp4'
import SubHeading from './SubHeading'
import { Accordions, experience } from './data'


const About = () => {
    return (
        <>
            <Video video={video} height={'500px'} width={'100%'} />

            <section className="section-center">
                <div className="flex lg:flex-row flex-col gap-5" style={{ margin: '3rem 0px' }}>
                    <div className="flex-1">
                        <SubHeading text='About Urban Crescent' />
                    </div>
                    <div className="flex-2 text-black">
                        <p>Essajees Atelier is a global interior design company offering end-to-end services in the realm of luxury interiors.</p>
                        <br />
                        <p style={{ marginBottom: '3rem' }}>Started in 2014, Essajees Atelier has completed over 60 interior design projects across the country, with over 200,000 sqft of commercial and residential spaces currently under construction. We have completed projects across 11 cities such as Mumbai, Surat, Goa, Bangalore, Hyderabad, Kolkata, Dubai, Pune, Chennai, Malavli, Nashik etc.</p>
                        {/* experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {experience.map((items) => {
                                return (
                                    <div className="text-white p-6 rounded-2xl shadow-md w-[100%]" key={items.id}>
                                        <SubHeading text={items.heading} />
                                        <p className='text-1xl text-black text-center capitalize font-bold'>{items.para}</p>
                                    </div>
                                )
                            })}

                        </div>
                        {/* experience */}

                    </div>
                </div>

                <hr className='text-black' />

                <div className='h-auto flex flex-col lg:flex-row gap-5' style={{ margin: '3rem 0px' }}>
                    <div className="flex-1 ">
                        <SubHeading text='Mitali Singh' />
                        <p className='uppercase text-center text-black'>Principal Designer</p>

                    </div>
                    <div className="flex-2 text-black">
                        <img className='h-auto w-[100%] object-cover rounded-md' src="https://www.essajeesatelier.com/wp-content/uploads/2023/04/Sarah-Sham.jpg" alt="Owner-img" /><br />
                        <p className=''>Sarah is a part of the fourth-generation 130-year old Essajees family. She completed her undergraduate degree at Duke University and Oxford University with a major in Art History in the top 10% of her class.</p><br />
                        <p>During Sarah's 5 years at Essajees, she has worked on some of India's biggest projects, after which she went on to garner 10 years of experience as an independent designer. Having worked in high-end craftsmanship at Essajees, she went on to complete a 2-year interior design degree from Rachna Sansad, Mumbai, graduating top of her class and with accolades for projects completed through the duration of the course.</p><br />
                        <p>Since starting Essajees Atelier in 2014, Sarah and her team have won numerous awards including Interior Designer of the Year by WADE Asia, India Design's top 10 Interior Designers In India, and Trends Magazine's award for the Best Hospitality Project of the year amongst many others.</p>
                    </div>
                </div>
                <hr className='text-black' style={{ marginBottom: '3rem' }} />
            </section>

            <figure className='h-[650px] bg-[url("https://www.essajeesatelier.com/wp-content/uploads/2023/05/The-Team-new.jpg")] bg-center bg-cover bg-no-repeat bg-fixed' style={{ marginBottom: '3rem' }}></figure>

            <div className="flex flex-col lg:flex-row section-center" style={{ marginBottom: '3rem' }}>
                <div className="flex-1">
                    <SubHeading text='The team' />
                </div>
                <div className="flex-2 text-black">
                    <p>Essajees Atelier has a team of 35, and growing, young, curious, and extremely talented design professionals. The team is a mix of architects and interior designers from different parts of the country. It consists of members who have completed their Masters from prestigious universities as well as those who ran their own studios before joining Essajees Atelier. The team is made up of diverse backgrounds but is united in their enthusiasm, positive outlook, eagerness to learn, and is incredibly focused and process-oriented.</p><br />
                    <p>Every project Essajees Atelier undertakes is allotted to dedicated teams that work with the clients from start to finish.</p>
                </div>
            </div>

            {/* accordions start */}
            <section className='flex justify-center flex-col' style={{ margin: '3rem auto' }}>
                <SubHeading text="frequently asked questions" />
                <div className="join join-vertical section-center text-black">

                    {Accordions.map((items) => {
                        return (
                            <div className="collapse collapse-arrow join-item border-base-300 border" style={{ padding: '0.5rem' }} key={items.id}>
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title font-semibold">{items.question}</div>
                                <div className="collapse-content text-sm">{items.answer}</div>
                            </div>
                        )
                    })}

                </div>
            </section>
            {/* accordions end */}

        </>
    )
}

export default About