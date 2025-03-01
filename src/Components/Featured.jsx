import React from 'react'
import Btn from './Btn'

const Featured = () => {
    return (
        <>
            <div className='section-center'>
                <h2 className='text-5xl text-center'>Award winning global luxury design company, crafting unique spaces since 2014</h2>
                <div className="flex flex-col md:flex-row gap-4 featured-container " style={{ marginTop: '5rem' }}>
                    <div className="md:flex-1  p-6 rounded-lg lg:text-end text-center ">
                        <h3 className='text-3xl text-[#8b7d6b] font-bold'>Featured Projects</h3>
                    </div>

                    <div className="md:flex-2 flex-1 text-1xl rounded-lg text-black" style={{ padding: '0px 3rem' }}>
                        <p>Each project that we undertake has a story to tell. One that is actualised by our expertise, aesthetics, and attention to detail.</p><br />
                        <p>While each project has the inimitable EA signature, they are all distinctive in their inception, design, and execution, all bearing a version of luxury that's unique to that space.</p>
                    </div>

                    <div className="flex-1  p-6 rounded-lg lg:text-end text-center">
                        <Btn text='See All Projects' />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Featured