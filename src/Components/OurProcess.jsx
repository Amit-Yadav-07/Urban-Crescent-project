import React from 'react'
import { IoBrushSharp } from "react-icons/io5";
import Btn from './Btn';
import { Process } from './data';


const OurProcess = () => {
    return (
        <>
            <h2 className='text-center text-5xl'>Our Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 featured-container">
                {Process.map((item) => {
                    return (

                        <div className="text-black shadow-lg text-center h-[auto] rounded-sm" style={{ padding: '1rem' }} key={item.id}>
                            <div className='flex justify-center'><IoBrushSharp className='text-4xl text-[#8b7d6b]' /></div>
                            <h3 className='text-1xl font-bold' style={{ padding: '0.5rem' }}>{item.heading}</h3>
                            <p>{item.para}</p>
                            <Btn text={item.btnText} />
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default OurProcess;