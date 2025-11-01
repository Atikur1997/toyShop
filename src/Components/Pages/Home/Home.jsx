import React, { use } from 'react';
import Categories from './Categories/Categories';

const promiseCard = fetch('toyData.json').then(res => res.json());

const Home = () => {
  const singleToy = use(promiseCard);
  const limitedToys = singleToy.slice(0, 4);

  const handleArrowClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <>
      
      <div className="w-full flex justify-center my-10 overflow-hidden">
        <div className="carousel w-full sm:w-[90%] md:w-[95%] lg:max-w-[1200px] rounded-xl shadow-lg">
          {limitedToys.map((toy, index) => (
            <div
              key={toy.toyId}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center bg-base-200 overflow-hidden">
                <img
                  src={toy.pictureURL}
                  alt={toy.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              
              <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? limitedToys.length : index}`}
                  className="btn btn-circle btn-sm sm:btn-md"
                  onClick={handleArrowClick}
                >
                  ❮
                </a>
                <a
                  href={`#slide${index + 2 > limitedToys.length ? 1 : index + 2}`}
                  className="btn btn-circle btn-sm sm:btn-md"
                  onClick={handleArrowClick}
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 mx-auto bg-base-300 py-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shadow-lg">
          {singleToy.map((toy) => (
            <Categories key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
