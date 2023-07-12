import React from 'react'

const WhoWeAre = () => {
    return (
        <>
            <div>
                <div className='text-6xl font-bold flex justify-center mt-20 text-pink-900'>
                    <h2 >Who Are We ?</h2>
                </div>
                <div className="flex justify-center mt-10">
                    <p className="text-center  max-w-3xl text-2xl">
                        At Fam Home (KSHIANKI®), we manufacture most of our products locally which enable use
                        create the highest quality cotton fabrics within our own factories. As a result, we
                        provide our customers top: notch quality products at prices significantly lower than
                        what our competitors can offer.
                    </p>
                </div>
                <div className='justify-center flex mt-10'>
                    <button className="bg-pink-200 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded shadow text-xl">
                        About Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre
