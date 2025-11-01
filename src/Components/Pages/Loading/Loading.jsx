import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center gap-4">

                <div className="loading loading-spinner loading-lg text-yellow-500"></div>

                <p className="mt-2 text-gray-700 text-lg">Loading...</p>
                <p className="text-gray-500 text-sm">Please wait a moment</p>
            </div>
        </div>
    );
};

export default Loading;
