import React from 'react'
import SubHeading from './SubHeading'

const BeforeAfter = () => {
    return (
        <section className='section-center'>
            <SubHeading text='A Seamless Experience' className='my-0' />
            <p className='text-black text-center' style={{ marginTop: '-2.6rem', marginBottom: '5rem' }}>With Essajees Atelier, transforming your space is as smooth an experience as sliding this bar</p>

            {/* before n after start */}
            <figure className="diff aspect-16/9" style={{ paddingBottom: '3rem' }} tabIndex={0}>
                <div className="diff-item-1" role="img">
                    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
                </div>
                <div className="diff-item-2" role="img" tabIndex={0}>
                    <img
                        alt="daisy"
                        src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
                </div>
                <div className="diff-resizer"></div>
            </figure>
            {/* before n after end */}

        </section>
    )
}

export default BeforeAfter