import React from 'react'
import Btn from './Btn'
import Video from './Video'
import VideoTwo from '../assets/Videos/video-1.mp4'

const HomeVideo = () => {
    return (
        <>

            <div className="flex items-center justify-center p-4" style={{ margin: '5rem 0px' }}>
                <div className="container section-center">

                    <div className="flex flex-col lg:flex-row gap-4" data-aos='fade-right' style={{ marginBottom: '5rem' }}>
                        <div className="w-full flex-2 p-6 rounded-lg">
                            <h3 className='text-5xl text-black'>Introducing Urban Crescent, our ultra luxury interior design venture in the Middle East</h3>
                        </div>

                        <div className="w-full flex-1 rounded-lg text-center self-center">
                            <Btn text='Explore Urban Crescent' />
                        </div>
                    </div>
                    <Video video={VideoTwo} height={'500px'} width={'100%'} />
                </div>
            </div>

        </>
    )
}

export default HomeVideo