import React from 'react'
import Link from 'next/link'

const WinterBedSheets = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link href={'/product/upgrade-your-home'} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">  
                <span className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover h-[30vh] object-center w-[250vh] " src="/SingleBedSheet.jpg" />
                </span>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Single Bed Sheet</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Upgrade Your Home</h2>
                  <p className="mt-1">₹199.00</p>
                </div> 
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default WinterBedSheets
