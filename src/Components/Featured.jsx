import React from 'react'
import Btn from './Btn'
import SubHeading from './SubHeading'

const Featured = () => {
    return (
        <>
            <div className='section-center' data-aos='fade-right'>
                <SubHeading text='Award winning global luxury design company, crafting unique spaces since 2014' style={'3rem auto 3rem auto'} />
                <div className="flex flex-col xl:flex-row gap-4 featured-container" style={{ marginTop: '3rem' }}>
                    <div className="md:flex-1  p-6 rounded-lg text-start self-center">
                        <h3 className='text-3xl text-[#8b7d6b] font-bold'>Featured Projects</h3>
                    </div>

                    <div className="md:flex-2 flex-2 rounded-lg text-black" style={{ padding: '0px 1rem', marginBottom: '2rem' }}>
                        <p style={{ fontSize: '1.2rem' }}>Each project that we undertake has a story to tell. One that is actualised by our expertise, aesthetics, and attention to detail.</p><br />
                        <p style={{ fontSize: '1.2rem' }}>While each project has the inimitable EA signature, they are all distinctive in their inception, design, and execution, all bearing a version of luxury that's unique to that space.</p>
                    </div>

                    <div className="flex-1  p-6 rounded-lg lg:text-end text-center self-center">
                        <Btn text='See All Projects' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured;