import React, { use } from 'react';
import Categories from './Categories/Categories';

const promiseCard = fetch('toyData.json')
    .then(res => res.json());

const Home = () => {
    const singleToy = use(promiseCard);
    return (
        <div className=' w-11/12 mx-auto bg-base-300 '>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 shadow-lg'>
                {
                    singleToy.map(toy => <Categories key={toy.toyId} toy={toy}></Categories>)
                }
            </div>

        </div>
    );
};

export default Home;
