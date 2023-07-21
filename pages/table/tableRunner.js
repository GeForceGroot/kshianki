import React from 'react'
import Link from 'next/link'
import Product from '@/models/Product'
import mongoose from "mongoose";
import connectDb from '@/middleware/mongoose'

const TableRunner = ({ products }) => {
  return (
    <>
<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) =>{ return <Link passHref={true} key={item._id} href={`/product/${item.slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-xl m-5">
              <span className="block relative  rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover h-[30vh] object-center w-[250vh] " src={item.img} />
              </span>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p className="mt-1">₹{item.price}</p>
              </div>
            </Link>})}
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

  let products = await Product.find({ category: 'tableRunner'})

  return {

    // Will be passed to the page component as props
    props: { products : JSON.parse(JSON.stringify(products)) },

  }
}

export default TableRunner
