import React from 'react'

const SubHeading = ({ text, style }) => {

    return (
        <h2 className='text-4xl text-center text-black' data-aos='fade-right' style={{ margin: style }}>{text}</h2>
    )
}

export default SubHeading