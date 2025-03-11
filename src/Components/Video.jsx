import React from 'react'

const Video = ({ video, poster, height, width }) => {

    return (
        <video autoPlay loop muted playsInline poster={poster} className='object-cover' style={{ height: `${height}`, width: `${width}` }}>
            <source src={video} type='video/mp4' />
        </video>
    )
}

export default Video;