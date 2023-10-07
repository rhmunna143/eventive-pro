// import number counter
import NumberCounter from 'number-counter';
import './counter.css';

const Counter = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-10'>Our <span className='text-pink-600'>Proud</span></h2>
            <div data-aos="zoom-in" className="max-w-6xl mx-auto bg-pink-600 py-12 px-8 rounded-sm text-white text-3xl flex justify-between items-center flex-wrap">
                <NumberCounter end={100} delay={3} className="increment" preFix="Events:" postFix="+" />
                <NumberCounter end={500} delay={2} className="increment" preFix="Happy Clients:" postFix="+" />
                <NumberCounter end={25} delay={4} className="increment" preFix="Locations:" postFix="+" />
                <NumberCounter end={35} delay={3} className="increment" preFix="Awards:" postFix="+" />
            </div>
        </div>
    );
};

export default Counter;