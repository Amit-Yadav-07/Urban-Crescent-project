import React from 'react'
import SubHeading from './SubHeading'

const BeforeAfter = () => {
    return (
        <section className='section-center'>
            <SubHeading text='A Seamless Experience' className='my-0' />
            <p className='text-black text-center' style={{ marginTop: '-3rem', marginBottom: '3rem' }}>With Essajees Atelier, transforming your space is as smooth an experience as sliding this bar</p>

            {/* before n after start */}
            <figure className="diff aspect-16/9 h-[auto]" tabIndex={0} style={{ marginBottom: '3rem' }}>
                <div className="diff-item-1" role="img">
                    <img alt="daisy" className='object-fill h-[100%] w-[100%]' src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yfGVufDB8MXwwfHx8MA%3D%3D" />
                </div>
                <div className="diff-item-2" role="img" tabIndex={0}>
                    <img
                        alt="daisy"
                        src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yfGVufDB8MXwwfHx8MA%3D%3D" />
                </div>
                <div className="diff-resizer"></div>
            </figure>
            {/* before n after end */}

        </section>
    )
}

export default BeforeAfter