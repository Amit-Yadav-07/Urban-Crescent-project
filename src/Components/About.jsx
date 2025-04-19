import React from 'react'
import Video from './Video'
import video from '../assets/Videos/Banner-video.mp4'
import SubHeading from './SubHeading'
import { Accordions, experience } from './data'


const About = () => {
    return (
        <>
            <Video video={video} height={'500px'} width={'100%'} />

            <section className="section-center">

                <div className="grid lg:grid-cols-[1fr_2fr] gap-5" style={{ margin: '3rem 0px' }}>

                    <div className="">
                        <SubHeading text='About Urban Crescent' style={'0rem auto 0rem auto'} />
                    </div>

                    <div className="text-black w-[100%] h-auto">

                        <div>
                            <p className='' style={{ margin: '0px auto' }} >Essajees Atelier is a global interior design company offering end-to-end services in the realm of luxury interiors.</p>
                            <br />
                            <p className='' style={{ margin: '1rem auto 1rem auto' }} >Started in 2014, Essajees Atelier has completed over 60 interior design projects across the country, with over 200,000 sqft of commercial and residential spaces currently under construction. We have completed projects across 11 cities such as Mumbai, Surat, Goa, Bangalore, Hyderabad, Kolkata, Dubai, Pune, Chennai, Malavli, Nashik etc.</p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {experience.map((items) => {
                                return (
                                    <div className="text-white justify-between w-[100%]" key={items.id} style={{ padding: '1rem' }}>
                                        <SubHeading text={items.heading} style={'0rem auto 1rem auto'} />
                                        <p className='text-1xl text-black text-center capitalize font-bold'>{items.para}</p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>

                <hr className='text-[#8b7d6b]' />

                <div className='h-auto grid lg:grid-cols-[1fr_2fr] grid-cols-1 flex-col lg:flex-row gap-5' style={{ margin: '3rem 0px' }}>

                    <div className="">
                        <SubHeading text='Mitali Singh' style={'0rem auto 1rem auto'} />
                        <p className='uppercase text-center text-black'>Principal Designer</p>
                    </div>

                    <div className="fle text-black">
                        <div className='lg:h-[500px] h-[400px] bg-center bg-no-repeat bg-cover bg-[url(https://www.essajeesatelier.com/wp-content/uploads/2023/04/Sarah-Sham.jpg)]'>

                        </div>
                        <br />
                        <div data-aos='fade-right'>
                            <p className=''>Sarah is a part of the fourth-generation 130-year old Essajees family. She completed her undergraduate degree at Duke University and Oxford University with a major in Art History in the top 10% of her class.</p><br />
                            <p>During Sarah's 5 years at Essajees, she has worked on some of India's biggest projects, after which she went on to garner 10 years of experience as an independent designer. Having worked in high-end craftsmanship at Essajees, she went on to complete a 2-year interior design degree from Rachna Sansad, Mumbai, graduating top of her class and with accolades for projects completed through the duration of the course.</p><br />
                            <p>Since starting Essajees Atelier in 2014, Sarah and her team have won numerous awards including Interior Designer of the Year by WADE Asia, India Design's top 10 Interior Designers In India, and Trends Magazine's award for the Best Hospitality Project of the year amongst many others.</p>
                        </div>
                    </div>

                </div>

                <hr className='text-[#8b7d6b]' style={{ marginBottom: '3rem' }} />
            </section>

            <div className='h-[650px] w-[100%] bg-[url("https://www.essajeesatelier.com/wp-content/uploads/2023/05/The-Team-new.jpg")] bg-center bg-cover bg-no-repeat bg-fixed' style={{ marginBottom: '3rem' }}></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 section-center gap-5 w-[100%]" style={{ marginBottom: '3rem' }}>

                <div className="">
                    <SubHeading text='The team' style={'0px 0px 0px 0px'} />
                </div>

                <div className="col-span-2">
                    <p>Essajees Atelier has a team of 35, and growing, young, curious, and extremely talented design professionals. The team is a mix of architects and interior designers from different parts of the country. It consists of members who have completed their Masters from prestigious universities as well as those who ran their own studios before joining Essajees Atelier. The team is made up of diverse backgrounds but is united in their enthusiasm, positive outlook, eagerness to learn, and is incredibly focused and process-oriented.</p><br />
                    <p>Every project Essajees Atelier undertakes is allotted to dedicated teams that work with the clients from start to finish.</p>
                </div>

            </div>

            {/* accordions start */}
            <section className=' flex-col justify-center' style={{ margin: '3rem auto' }}>
                <SubHeading text="frequently asked questions" style={'3rem auto 3rem auto'} />

                <div className="text-center w-[100%]">
                    <div className="join join-vertical section-center">
                        {Accordions.map((items) => {
                            return (
                                <div className="collapse collapse-arrow join-item text-start" style={{ padding: '0.5rem', borderBottom: '1px solid #8b7d6b' }} key={items.id}>
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title font-bold text-md">{items.question}</div>
                                    <div className="collapse-content text-lg">{items.answer}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
            {/* accordions end */}

        </>
    )
}

export default About