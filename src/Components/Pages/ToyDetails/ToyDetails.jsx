import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Star } from 'lucide-react'; // <-- import this for the rating star

const ToyDetails = () => {
    const toyData = useLoaderData();
    const { id } = useParams();

    const toy = toyData.find((t) => t.toyId === parseInt(id));

    if (!toy) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-2xl font-semibold text-gray-600">Toy not found 😢</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-10">

            <div className="bg-base-200 rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="w-full flex justify-center">
                    <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full md:w-[90%] h-[350px] md:h-[550px] object-fit rounded-xl shadow-md"
                    />
                </div>


                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        {toy.toyName}
                    </h2>
                    <p className="text-lg text-gray-500 italic">{toy.subCategory}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <span className="text-2xl font-bold text-success">
                            ${toy.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star size={20} fill="currentColor" />
                            <span className="font-semibold">{toy.rating}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-2">
                        {toy.description}
                    </p>

                    <div className="divider"></div>


                    <div>
                        <p className="font-semibold">
                            Seller: <span className="text-gray-700">{toy.sellerName}</span>
                        </p>
                        <p className="text-gray-500">{toy.sellerEmail}</p>
                        <p className="font-medium text-lg mt-2">
                            Available Quantity:{' '}
                            <span className="text-primary">{toy.availableQuantity}</span>
                        </p>
                    </div>

                    <div className="mt-6">
                        <button className="btn btn-primary w-full md:w-auto">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
            </div>


            <div className="bg-base-300 rounded-xl mt-10 p-6">
                <h3 className="text-2xl font-semibold mb-3 text-center">
                    Why Kids Love It ❤️
                </h3>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    This toy inspires creativity, learning, and fun. Designed for kids who
                    love adventure and imagination — perfect for solo or group play.
                </p>
            </div>
        </div>
    );
};

export default ToyDetails;
