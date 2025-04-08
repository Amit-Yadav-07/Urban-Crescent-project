import SubHeading from "./SubHeading";
import Slider from "react-slick";
import Btn from './Btn';
import { portfolioSections } from "./data";

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    return (
        <section className="section-center overflow-hidden px-4 py-12 max-w-screen-xl mx-auto">
            {portfolioSections?.map((section, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={section.id}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-16" style={{ margin: '4rem 0px' }}
                    >
                        {/* Slider Section */}
                        <div
                            className={`w-full h-[300px]  px-2 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
                            data-aos={isEven ? 'fade-left' : 'fade-right'}
                        >
                            <Slider {...settings}>
                                {section?.images?.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="h-full w-full flex items-center justify-center"
                                    >
                                        <img
                                            src={img}
                                            alt={`product-img-${idx}`}
                                            className="max-h-[300px] w-full object-contain rounded"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Text Section */}
                        <div
                            className={`text-black w-full  text-center px-2 ${isEven ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}
                            data-aos={isEven ? 'fade-right' : 'fade-left'}
                        >
                            <SubHeading text={section.title} style={'0rem auto 1rem auto'} />
                            <strong className="text-center text-[#8b7d6b] block">
                                {section.location}
                            </strong>
                            <p className="my-6" style={{ margin: '1rem 0px' }}>{section.description}</p>
                            <Btn text="Explore Project" />
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Portfolio;
