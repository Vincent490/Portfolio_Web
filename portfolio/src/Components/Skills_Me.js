import React from 'react';

function Skills_Me() {
    return (
        <div className="text-black mt-48 flex flex-col justify-between ml-14">
            <div className="text-center max-w-screen-sm">
                <h1 className="text-3xl font-bold">Get to know me !</h1>
                <p className="text-xl mt-5"> My name is Begue Vincent, a first-year student at Epitech, passionate about software development and web programming.
                    Curious and motivated, I enjoy exploring innovative technologies while building my technical skills. </p>
                <p className="text-xl mt-4">I am currently seeking an internship to apply my knowledge, contribute to real-world projects, and gain professional experience.
                    I’m eager to take on challenges and learn in a dynamic environment. Feel free to reach out to learn more!
                </p>
                <button type="button" className="text-white bg-violet-700 focus:outline-none rounded-lg text-sm font-bold px-14 py-4 mt-8 hover:-translate-y-1 transition-transform">Contact</button>
            </div>
            <div className="">
                <h1 className="text-3xl font-bold">My Skills</h1>
            </div>
        </div>
    );
}

export default Skills_Me;