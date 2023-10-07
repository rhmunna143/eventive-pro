/* eslint-disable react/no-unescaped-entities */
import team from '../../assets/images/business-team.jpg'


const ShortAbout = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 px-4 lg:px-0 mb-20">
            <div data-aos="fade-right" className="dec w-fit">
                <h2 className="text-4xl">We are the <span className='text-pink-600'>Best Planner</span></h2>

                <p className="mt-4">
                    "At <span className="text-pink-600">Eventive</span>, we take pride in being the best in the business. With a passion for excellence and a commitment to perfection, we craft unforgettable experiences for every occasion. Discover why we're your top choice for event management!"
                </p>

                <button className='bg-pink-600 text-white py-1 px-4 mt-4 rounded-sm hover:bg-black'>Book Us Now</button>
            </div>

            <div data-aos="fade-left" className="img">
                <img className='rounded-3xl' src={team} alt="our team" />
            </div>
        </div>
    );
};

export default ShortAbout;