import { useEffect, useState } from "react";


const GalleryComp = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/gallery.json")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto my-20 p-4 lg:p-0">
            <h2 className="text-4xl text-pink-600 text-center my-10">Gallery of Our Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data?.map(item=>
                        <img className="h-[250px] w-[375px]" key={item?.id} src={item?.image} alt="gallery images" />
                    )
                }
            </div>
        </div>
    );
};

export default GalleryComp;