import React from 'react'
import { IoBrushSharp } from "react-icons/io5";
import Btn from './Btn';
import { featured } from './data';


const FeaturedProject = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[80%] featured-container">
                {featured.map((item) => {
                    console.log(item.icon)
                    return (

                        <div className="bg-white text-black shadow-lg text-center h-[auto] rounded-sm" style={{ padding: '1rem' }} key={item.id}>
                            <div className='flex justify-center'><IoBrushSharp className='text-4xl text-[#8b7d6b]' /></div>
                            <h3 className='text-1xl font-bold' style={{ padding: '0.5rem' }}>{item.heading}</h3>
                            <p>{item.para}</p>
                            <Btn text={item.btnText} />
                        </div>

                    )
                })}

                {/* <div className="bg-white p-6 shadow-lg rounded-lg text-center">Column 2</div>
                <div className="bg-white p-6 shadow-lg rounded-lg text-center">Column 3</div>
                <div className="bg-white p-6 shadow-lg rounded-lg text-center">Column 4</div> */}
            </div>
        </>
    )
}

export default FeaturedProject;