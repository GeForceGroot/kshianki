import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Order from '@/models/Order'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Orders = () => {

  const router = useRouter()

  useEffect(() => {
      if (!localStorage.getItem('token')) {
          router.push('/')
      }
  }, [])

  return (
    <>
      <div className='container mx-auto min-h-screen'>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <h1 className='font-semibold text-center text-3xl p-6'>My Orders</h1>
                <table className="min-w-full text-left text-sm font-light">
                  <thead
                    className="border-b bg-white font-medium dark:border-neutral-100 dark:bg-neutral-200">
                    <tr>
                      <th scope="col" className="px-6 py-4">OrderId#</th>
                      <th scope="col" className="px-6 py-4">Email</th>
                      <th scope="col" className="px-6 py-4">Amount</th>
                      <th scope="col" className="px-6 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-neutral-100 dark:border-neutral-100 dark:bg-neutral-200">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">he</td>
                      <td className="whitespace-nowrap px-6 py-4">fsdf</td>
                      <td className="whitespace-nowrap px-6 py-4">sfsf</td>
                      <td className="whitespace-nowrap px-6 py-4">sdfds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


//  Get server side props

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let orders = await Order.find({})

  return {

    // Will be passed to the page component as props

    props: { orders: orders },

  }
}

export default Orders
