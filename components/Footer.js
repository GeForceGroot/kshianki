import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
    return (

        <>
            <div className='footer'>
                <footer className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <Link href='/'>
                                    <Image src="/websiteLogo.jpg" alt='GeFroceGrot' width={80} height={10} />
                                </Link>
                                <span className="font-semibold ml-3 text-3xl mt-7">𝓚𝓼𝓱𝓲𝓪𝓷𝓴𝓲</span>
                            </span>
                            <p className="mt-2 text-m text-gray-500 px-6">Discover Bedding Bliss for Every Night!</p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-12">
                                <h2 className="title-font text-xl text-gray-900  tracking-widest font-semibold mb-3"> About Us</h2>
                                <nav className="list-none mb-10">
                                    <li className='abus mt-8'>
                                        <a className="text-gray-600 hover:text-gray-800">Our Story</a>
                                    </li>
                                    <li className='abus mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">About Kshianki</a>
                                    </li>
                                    <li className='abus mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Founder's Note</a>
                                    </li>
                                    <li className='abus mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Indian Craftsmanship</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-12">
                                <h2 className="title-font text-xl text-gray-900 tracking-widest font-semibold mb-3">Customer Support</h2>
                                <nav className="list-none mb-10">
                                    <li className='cusSup mt-8'>
                                        <a className="text-gray-600 hover:text-gray-800">FAQs</a>
                                    </li>
                                    <li className='cusSup mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                                    </li>
                                    <li className='cusSup mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Bulk Orders</a>
                                    </li>
                                    <li className='cusSup mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Return or Exchange</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-12">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xl mb-3">Our Policies</h2>
                                <nav className="list-none mb-10">
                                    <li className='orPo mt-8'>
                                        <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
                                    </li>
                                    <li className='orPo mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">FAQs</a>
                                    </li>
                                    <li className='orPo mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Reutrn and Exchange</a>
                                    </li>
                                    <li className='orPo mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Refund Policy</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-12">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xl mb-3">Contact Details</h2>
                                <nav className="list-none mb-10">
                                    <li className='contDet mt-8'>
                                        <a className="text-gray-600 hover:text-gray-800">Mail us for queries- xyz@gmail.com</a>
                                    </li>
                                    <li className='contDet mt-5'>
                                        <a className="text-gray-600 hover:text-gray-800">Operating Address-4/57 shankla colony college Road Beawar,Ajmer (Rajasthan)</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 — Kshianki : Discover Bedding Bliss for Every Night!
                                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@GeFroceGroot</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
