import SubHeading from "./SubHeading";
import Slider from "react-slick";
import Btn from './Btn'
import { portfolioSectionOne } from "./data";

const Portfolio = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    };

    return (
        <>
            <section className="section-center grid text-center grid-cols-1 lg:grid-cols-2 gap-10" style={{ margin: '5rem auto' }}>

                <div className="text-black self-center" data-aos='fade-right'>
                    <SubHeading text='A Timeless Legacy' style={'0rem auto 1rem auto'} />
                    <strong className="text-center block">MUMBAI, MAHARASHTRA</strong>
                    <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>Adding an old world charm to a 6200 sq. ft. corporate office</p>
                    <Btn text='Explore Project' />
                </div>

                <div className="" data-aos='fade-left'>
                    <Slider {...settings}>

                        {portfolioSectionOne.map((items) => {

                            return <img src={items.img} alt="" key={items.id} />
                        })}

                    </Slider>
                </div>

                {/* second */}

                <div className="" style={{ margin: '3rem 0px' }} data-aos='fade-right'>
                    <Slider {...settings}>

                        {portfolioSectionOne.map((items) => {
                            return <img src={items.img} alt="" key={items.id} />
                        })}

                    </Slider>
                </div>

                <div className="text-black self-center" data-aos='fade-left'>
                    <SubHeading text='A Timeless Legacy' style={'0rem auto 1rem auto'} />
                    <strong className="text-center block">MUMBAI, MAHARASHTRA</strong>
                    <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>Adding an old world charm to a 6200 sq. ft. corporate office</p>
                    <Btn text='Explore Project' />
                </div>

                {/* second end */}

                {/* third */}
                <div className="text-black self-center" data-aos='fade-right'>
                    <SubHeading text='A Timeless Legacy' style={'0rem auto 1rem auto'} />
                    <strong className="text-center block">MUMBAI, MAHARASHTRA</strong>
                    <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>Adding an old world charm to a 6200 sq. ft. corporate office</p>
                    <Btn text='Explore Project' />
                </div>

                <div className="" style={{ margin: '3rem 0px' }} data-aos='fade-left'>
                    <Slider {...settings}>

                        {portfolioSectionOne.map((items) => {
                            return <img src={items.img} alt="" key={items.id} />
                        })}

                    </Slider>
                </div>
                {/* third end */}

                {/* four */}

                <div className="" style={{ margin: '3rem 0px' }} data-aos='fade-right'>
                    <Slider {...settings}>

                        {portfolioSectionOne.map((items) => {
                            return <img src={items.img} alt="" key={items.id} />
                        })}

                    </Slider>
                </div>

                <div className="text-black self-center" data-aos='fade-left'>
                    <SubHeading text='A Timeless Legacy' style={'0rem auto 1rem auto'} />
                    <strong className="text-center block">MUMBAI, MAHARASHTRA</strong>
                    <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>Adding an old world charm to a 6200 sq. ft. corporate office</p>
                    <Btn text='Explore Project' />
                </div>

                {/* fourth end */}

                {/* five */}

                <div className="text-black self-center" data-aos='fade-right'>
                    <SubHeading text='A Timeless Legacy' style={'0rem auto 1rem auto'} />
                    <strong className="text-center block">MUMBAI, MAHARASHTRA</strong>
                    <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>Adding an old world charm to a 6200 sq. ft. corporate office</p>
                    <Btn text='Explore Project' />
                </div>

                <div className="" style={{ margin: '3rem 0px' }} data-aos='fade-left'>
                    <Slider {...settings}>

                        {portfolioSectionOne.map((items) => {
                            return <img src={items.img} alt="" key={items.id} />
                        })}

                    </Slider>
                </div>

                {/* five end */}
            </section>
        </>
    )
}

export default Portfolio