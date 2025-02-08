import React from 'react';

function Home() {
    return (
        <div className="text-black flex items-center justify-center mt-64">
            <div className="text-center">
                <h1 className="text-5xl font-bold">HEY, I AM VINCENT</h1>
                <h1 className="text-2xl mt-4">A Epitech student in his first years</h1>
                <h1 className="text-2xl mt-2">Learning software and web programming</h1>
                <button type="button" className="text-white bg-violet-700 focus:outline-none rounded-lg text-sm font-bold px-16 py-3 mt-8 hover:-translate-y-1 transition-transform">Projects</button>
                <div className="flex flex-row gap-2 justify-center mt-64">
                    <div className="w-4 h-4 rounded-full bg-violet-700 animate-bounce" />
                    <div className="w-4 h-4 rounded-full bg-violet-700 animate-bounce [animation-delay:-.3s]" />
                    <div className="w-4 h-4 rounded-full bg-violet-700 animate-bounce [animation-delay:-.5s]" />
                </div>
            </div>
        </div>
    );
}

export default Home;