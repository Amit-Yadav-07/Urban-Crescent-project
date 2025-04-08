import SubHeading from "./SubHeading";
import Slider from "react-slick";
import Btn from './Btn'
import { portfolioSections } from "./data";

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
            <section className="section-center flex flex-col lg:flex-wrap text-center gap-0 justify-center items-center" style={{ margin: '3rem auto' }}>
                {portfolioSections?.map((section, index) => (
                    <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center w-full`} style={{ margin: '3rem 0px' }}>

                        {/* Text Section */}
                        <div className="text-black w-full lg:w-1/2 self-center" data-aos='fade-right'>
                            <SubHeading text={section.title} style={'0rem auto 1rem auto'} />
                            <strong className="text-center text-[#8b7d6b] block">{section.location}</strong>
                            <p className="" style={{ margin: '1rem auto 1.5rem auto' }}>{section.description}</p>
                            <Btn text='Explore Project' />
                        </div>

                        {/* Image Slider Section */}
                        <div className="w-auto lg:w-1/2 grow bg-red-500 h-[300px]" data-aos='fade-left' style={{ margin: '1rem 0px' }}>
                            <Slider {...settings}>
                                {section?.images?.map((img, idx) => (
                                    <>
                                        <img className="border" src={img} alt="product-img" />
                                    </>
                                ))}
                            </Slider>
                        </div>

                    </div>
                ))}
            </section>
        </>
    )
}

export default Portfolio;