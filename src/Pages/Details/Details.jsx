import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const params = useParams()

    const data = useLoaderData()

    const selected = data?.find(item => params.id == item.id);

    const { image, title, description, details, price } = selected || {};

    return (
        <div className="max-w-6xl mx-auto mb-20">
            <div className="img mt-20">
                <img className="w-3/4 mx-auto" src={image} alt="details img" />
            </div>

            <div className="w-3/4 mx-auto mt-5">
                <h2 className="text-4xl text-pink-600">{title}</h2>
                <p className="text-slate-600 mt-2 text-lg">{price}</p>

                <p className="mt-2">{description}</p>

                <p className="mt-2">{details}</p>
            </div>
        </div>
    );
};

export default Details;