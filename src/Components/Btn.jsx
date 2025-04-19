import React from 'react'
import { Link } from 'react-router-dom';

function Btn({ text, location }) {
    return (
        <>
            <button className='btn btn-outline button text-white'>{text}</button>
            {/* <Link to={location} className='btn btn-outline button text-white'>{text}</Link> */}
        </>
    )
}

export default Btn;