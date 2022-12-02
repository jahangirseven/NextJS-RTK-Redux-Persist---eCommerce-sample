import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import Head from 'next/head'
import CartItem from '../components/shop/cart/CartItem'
import { useSelector} from 'react-redux'
function cart() {
  const cartTotalPrice = ()=>{
    let cartTotal = 0 ;
    state.cartItems.map(item=>{
        cartTotal+= (item.price*item.quantity) 
     })

     if(cartTotal){
      return 'Total : $' + cartTotal
     }else{
      return <i>Cart is empty.</i>
     }
    
 }

  const state = useSelector(state=>state.cartState) ;
  
  return (
    <MainLayout>
     <Head>
      <title>Cart</title>
     </Head>
        <h1>Cart</h1>
        <div className='app-content'>
          {
            state.cartItems.length>0 ?
            state.cartItems.map(item=>{
                return <CartItem 
                    key={item.id} 
                    id={item.id} 
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity} />
           }) 
           : <i>Cart is empty..</i> 
          }

          <div className='cart_total'>
              {
                 cartTotalPrice()
              }
          </div>

        </div>
    </MainLayout>
  )
}


export default cart