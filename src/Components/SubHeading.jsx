import React from 'react'

const SubHeading = ({ text, style }) => {
    return (
        <h2 className='text-5xl text-center text-black' style={{ marginTop: `${style}` }}>{text}</h2>
    )
}

export default SubHeading