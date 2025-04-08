import React from 'react'
import { IoBrushSharp } from "react-icons/io5";
import Btn from './Btn';
import { Process } from './data';
import SubHeading from './SubHeading';


const OurProcess = () => {
    return (
        <>
            <section className="section-center">
                <SubHeading text='Over 200,000 sq ft of premium commercial and residential spaces in execution globally' style={'3rem auto 3rem auto'} />
                <h3 className='text-center text-5xl text-black'>Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 featured-container">
                    {Process.map((item) => {
                        return (

                            <div className="text-black text-center h-[auto] rounded-sm  divide-x-3 divide-dashed md:divide-amber-800" style={{ padding: '1rem' }} key={item.id}>
                                <div className='flex justify-center'><img src={item.img} alt={item.heading} style={{ height: '4.5rem' }} /></div>
                                <h3 className='text-1xl font-bold' style={{ padding: '0.5rem' }}>{item.heading}</h3>
                                <p className=' w-[90%]'>{item.para}</p>
                            </div>

                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default OurProcess;