import React, { use } from 'react';
import Categories from './Categories/Categories';


const promiseCard = fetch('toyData.json').then(res => res.json());

const Home = () => {
    const singleToy = use(promiseCard);
    const limitedToys = singleToy.slice(0, 4);

    // Prevent anchor tag default behavior to stop page jump
    const handleArrowClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').replace('#', '');
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    return (
        <>
            {/* Centered Carousel */}
            <div className="flex justify-center w-full my-10">
                <div className="carousel max-w-[1200px] rounded-xl shadow-lg overflow-hidden">
                    {limitedToys.map((toy, index) => (
                        <div
                            key={toy.toyId}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full"
                        >

                            <div className="w-full h-[700px] flex justify-center items-center bg-base-200">
                                <img
                                    src={toy.pictureURL}
                                    alt={toy.name}
                                    className="w-full h-[650px] object-fit rounded-xl"
                                />
                            </div>

                            {/* Arrows */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a
                                    href={`#slide${index === 0 ? limitedToys.length : index}`}
                                    className="btn btn-circle"
                                    onClick={handleArrowClick}
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#slide${index + 2 > limitedToys.length ? 1 : index + 2}`}
                                    className="btn btn-circle"
                                    onClick={handleArrowClick}
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Toy Grid Section */}
            <div className="w-11/12 mx-auto bg-base-300 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shadow-lg" data-aos='flip-right' data-aos-duration="2000">
                    {singleToy.map((toy) => (
                        <Categories key={toy.toyId} toy={toy} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
