import React from 'react'
import Link from 'next/link'
import Product from '@/models/Product'
import mongoose from "mongoose";
import connectDb from '@/middleware/mongoose'

const BedCover = ({ products }) => {
    return (
        <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p>Sorry All The Bed Cover are Currently Out Of Stock. New Stock Coming Soon!</p>}
            {Object.keys(products).map((item) => {
              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
                <span className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover h-[30vh] object-center w-[250vh] " src={products[item].img} />
                </span>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <div className='mt-1 flex'>
                    <div className='text-md'>Available Colors :</div>
                    {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-4 bg-green-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('pink') && <button className="border-2 border-gray-300 ml-1 bg-pink-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                  <p className="mt-1">₹{products[item].price}</p>

                </div>
              </Link>
            })}
          </div>
        </div>
      </section>
        </>
      )
}

// Get server side props

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: 'bedCover'})

  let bedCover = {}

  for (let item of products) {

    if (item.title in bedCover) {

      if (!bedCover[item.title].color.includes(item.color) && item.availableQty > 0) {
        bedCover[item.title].color.push(item.color)
      }

    }
    else {
      bedCover[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        bedCover[item.title].color = [item.color]
      }
    }

  }

  return {

    // Will be passed to the page component as props
    props: { products : JSON.parse(JSON.stringify(bedCover)) },

  }
}

export default BedCover
