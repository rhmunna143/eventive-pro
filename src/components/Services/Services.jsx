/* eslint-disable react/prop-types */

import Service from "./Service";
import { useEffect, useState } from "react";


const Services = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data=> setData(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto p-4 lg:p-0 mb-20">
            <h2 className="text-4xl text-center mb-10">Our <span className="text-pink-600">Services</span></h2>

            <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data?.map(service => <Service key={service?.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;