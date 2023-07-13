import React from 'react'

const MixProsuct = () => {
    return (
        <>
            <div className='text-4xl font-semibold justify-normal flex-auto mt-10 ml-10'>🖤 Turkish Style 100% Pure Cotton Towles</div>
            <div className='h-auto bg-gradient-to-r from-pink-50 to-pink-200 mt-10'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" className="object-cover object-center h-full w-full" src="/side.jpg" />
                        </div>
                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div> <div className="flex flex-wrap justify-center">
                                <div className="lg:w-auto w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ml-10">
                                    <img src="/div.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                                    <button className="mt-5 bg-pink-200 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-full shadow text-xl flex items-center">
                                        <span className="mr-2">Diwan Set</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>

                                </div>
                            </div></div>
                            <div> <div className="flex flex-wrap justify-center mt-10">
                                <div className="lg:w-auto w-full mb-8 rounded-lg overflow-hidden ml-10">
                                    <img src="/towel.jpg" alt="..." className="shadow-lg rounded-xl max-w-full h-auto align-middle border-none" />
                                    <button className="mt-8 bg-pink-200 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-full shadow text-xl flex items-center">
                                        <span className="mr-2">Bath Towels</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>

                                </div>
                            </div></div>
                        </div>
                    </div>
                </section>
                <div className='text-4xl font-semibold text-pink-700 leading-snug justify-center flex'>" Transform Your Home With Our Exquisite Range Of Home Furnishings." 🏠</div>
            </div>
        </>
    )
}

export default MixProsuct
