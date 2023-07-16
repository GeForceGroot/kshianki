import React from 'react'
import Link from 'next/link'
const CushionCoversWithFillers = () => {
  return (
    <>
     <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
              <Link href={'/product/upgrade-your-home'}>
                <span class="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover h-[30vh] object-center w-[250vh] " src="/SingleBedSheet.jpg" />
                </span>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Bed Cover</h3>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Upgrade Your Home</h2>
                <p class="mt-1">₹199.00</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CushionCoversWithFillers
