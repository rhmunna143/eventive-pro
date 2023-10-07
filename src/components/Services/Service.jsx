/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, image, title, price, details } = service;

    return (
        <div className="border border-pink-100 p-4 rounded-sm">
            <div className="img">
                <img className="h-56 rounded-sm" src={image} alt="" />
            </div>

            <div className="txt">
                <h3 className="mt-4 text-2xl text-pink-700">{title}</h3>

                <h4 className="mt-2 text-lg text-slate-500">{price}</h4>

                <p className="mt-1">
                    {
                        details?.slice(0, 80)
                    }
                </p>

                <Link to = {`/event/details/${id}`} >
                    <button className="mt-2 bg-pink-600 text-white py-1 px-4 rounded-sm hover:bg-black">Details</button>
                </Link>

            </div>
        </div>
    );
};

export default Service;