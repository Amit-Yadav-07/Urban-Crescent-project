import React from 'react'
import SubHeading from './SubHeading'

const BeforeAfter = () => {
    return (
        <section className='section-center'>
            <SubHeading text='A Seamless Experience' className='my-0' />
            <p className='text-black text-center' style={{ marginTop: '-3rem', marginBottom: '3rem' }}>With Essajees Atelier, transforming your space is as smooth an experience as sliding this bar</p>

            {/* before n after start */}
            <figure className="diff aspect-16/9 lg:h-[500px] h-[auto]  rounded-md" tabIndex={0} data-aos='fade-right' style={{ marginBottom: '3rem' }}>

                <div className="diff-item-1 flex" role="img">
                    <img alt="daisy" className='object-fill h-[100%] w-[100%]' src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yfGVufDB8MXwwfHx8MA%3D%3D" />
                    <span className='bg-gray-50 text-black w-auto h-[auto] self-end text-2xl' style={{ padding: '0.3rem 0.6rem' }}>After</span>
                </div>

                <div className="diff-item-2 flex" role="img" tabIndex={0}>
                    <img alt="daisy" className='' src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yfGVufDB8MXwwfHx8MA%3D%3D" />
                    <span className='w-auto h-[auto] bg-gray-50 text-2xl self-end text-black' style={{ position: 'absolute', left: '100%', padding: '0.3rem 0.6rem' }}>Before</span>
                </div>

                <div className="diff-resizer"></div>
            </figure>
            {/* before n after end */}

        </section>
    )
}

export default BeforeAfter