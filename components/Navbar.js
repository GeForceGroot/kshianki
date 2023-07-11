import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isNestedOpen, setIsNestedOpen] = useState(false);
    const [isNestedOpen1, setIsNestedOpen1] = useState(false);
    const [isNestedOpen2, setIsNestedOpen2] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleNestedDropdown = () => {
        setIsNestedOpen(!isNestedOpen);
    };
    const toggleNestedDropdown1 = () => {
        setIsNestedOpen1(!isNestedOpen1);
    };
    const toggleNestedDropdown2 = () => {
        setIsNestedOpen2(!isNestedOpen2);
    };

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link href='/'>
                            <Image src="/websiteLogo.jpg" alt='GeFroceGrot' width={80} height={20} />
                        </Link>
                        <span className="ml-3 mt-4 text-xl">KSHIANKI®</span>
                    </span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-black-700 font-semibold">Home</a>
                        <a>
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    className="inline-flex justify-center items-center space-x-1 px-4 py-2 text-m leading-5 font-medium rounded-md text-black-700 transition ease-in-out duration-150"
                                    onClick={toggleDropdown}
                                >
                                    <span className='font-medium'>Home Furnishing</span>
                                    <svg
                                        className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="absolute left-0 mt-4  w-40 rounded-md shadow-lg ">
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                onClick={toggleNestedDropdown}
                                            >
                                                Bed Sheets
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen && (
                                                <div className="pl-6">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Single Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Double Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Pure Cotton Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Kid's Special King Size Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        King Size Elastic/Fitted Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Super King Size Bedsheet
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Book Folding Bedsheet Set
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Bed Covers
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Winter Bedsheets
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                onClick={toggleNestedDropdown1}
                                            >
                                                Cushion
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen1 ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen1 && (
                                                <div className="pl-6">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Cushion Fillers
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Cushion Cover
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Cushion Covers With Fillers
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                onClick={toggleNestedDropdown2}
                                            >
                                                Table
                                                <svg
                                                    className={`-mr-1 ml-2 h-4 w-4 ${isNestedOpen2 ? 'transform rotate-180' : ''
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-.7.3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>

                                            {isNestedOpen2 && (
                                                <div className="pl-6">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Table Runner
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Table Cover
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                                    >
                                                        Table Mats
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Comforter
                                            </a>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Carpet
                                            </a>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Diwan Set
                                            </a>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Rugs
                                            </a>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Blankets
                                            </a>
                                        </div>
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <a
                                                href={'/comforter'}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white"
                                            >
                                                Quilt
                                            </a>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </a>
                        <a className="mr-5 hover:text-black-700 font-semibold">Bath Towels</a>
                        <a className="mr-5 hover:text-black-700 font-semibold">Kurtis</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar
