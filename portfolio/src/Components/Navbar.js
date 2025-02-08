import React from 'react';

function Navbar() {
    return (
        <nav className="bg-black text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                   
                    <span className="self-center font-semibold whitespace-nowrap hover:text-indigo-600">
                        VINCENT BEGUE
                    </span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-semibold mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="/home" className="block py-2 px-3 md:p-0 hover:text-indigo-600" aria-current="page">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 md:p-0 hover:text-indigo-600">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="block py-2 px-3 md:p-0 hover:text-indigo-600">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 md:p-0 rounded-sm hover:text-indigo-600">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;