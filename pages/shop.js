import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import Product from '../components/shop/Product'
import Head from 'next/head'
import {productsDB} from '../data/sample_data.js'
function shop() {
  return (
    <MainLayout>
      <Head>
        <title>Shop</title>
      </Head>
        <h1>Products</h1>
        <div className='app-content content__shop'>
            {
              productsDB.map(product=>{
                return <Product key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
              })
            }
        </div>
    </MainLayout>
  )
}

export default shop