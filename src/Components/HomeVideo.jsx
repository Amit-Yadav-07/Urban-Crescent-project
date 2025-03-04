import React from 'react'
import Btn from './Btn'
import video from '../assets/images/video.mp4'

const HomeVideo = () => {
    return (
        <>

            <div className="flex items-center justify-center  p-4" style={{ margin: '5rem 0px' }}>
                <div className="container section-center">

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full flex-2 p-6 rounded-lg">
                            <h4 className='text-5xl text-black'>Introducing Urban Crescent, our ultra luxury interior design venture in the Middle East</h4>
                        </div>

                        <div className="w-full flex-1 rounded-lg text-center self-center">
                            <Btn text='Explore Urban Crescent' />
                        </div>
                    </div>
                    <video controls autoPlay muted loop className='w-full object-cover' style={{ marginTop: '5rem', height: '500px' }}>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>

        </>
    )
}

export default HomeVideo