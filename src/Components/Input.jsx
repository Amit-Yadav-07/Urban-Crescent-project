import React from 'react'

const Input = ({ type, name, id, placeholder, labelName }) => {
    return (
        <>
            <div className="relative" style={{ margin: '1rem 0px' }}>
                <label htmlFor={id} className="flex items-center mb-2 text-gray-600 text-lg font-bold">{labelName}
                </label>
                <input type={type} id={id} name={name} className="block w-full px-5 py-2.5 bg-white text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-md focus:outline-none" placeholder={placeholder} required />
            </div>
        </>
    )
}

export default Input