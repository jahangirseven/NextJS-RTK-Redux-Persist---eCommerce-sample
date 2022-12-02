import React from 'react'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from "react-redux"

 function Header() {
  const state = useSelector(states=>states.cartState)

  const cartTotal = ()=>{
     let cartTotal = 0 ;
     state.cartItems.map(item=>{
         cartTotal= cartTotal+ item.quantity
         
      })
      return cartTotal
  }
  return (
    <div className='header-main'>
         <div className='content-limiter'>
              <nav>
                  <Link href='/' className='nav-link'>Home</Link>
                  <Link href='/shop' className='nav-link'>Shop</Link>
                  <Link href='/cart' className='nav-link'>Cart</Link>
              </nav>
              <span className='quantity__header'>
                  <BsCart2 size={20   } />
                  <span className='quantity__self'>{cartTotal()}</span>
              </span>
         </div>
    </div>
  )
}

export default Header