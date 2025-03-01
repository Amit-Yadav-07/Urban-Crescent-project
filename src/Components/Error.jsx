import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const error = useRouteError()

    return (
        <h1 className='text-4xl text-center'>{error.statusText}</h1>
    )
}

export default Error