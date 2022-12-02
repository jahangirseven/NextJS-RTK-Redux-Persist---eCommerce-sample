import React from 'react'
import Image from 'next/image'
import styles from './CartItem.module.css'
import {incrementQuantity, decrementQuantity,removeItem} from './../../../redux/reducers/CartSlice'
import {useDispatch} from 'react-redux'
function CartItem({id,title,price,image,quantity}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart_item}>
        <Image src={image} height={60} width={60} />
        <h3>{title}</h3>
        <span className={styles.price_self}>${quantity*price}</span>
        <div className={styles.quantity_block}>
             <button disabled={quantity>1 ? false  : true} className={`btn ${styles.increase}`} onClick={()=>{dispatch(decrementQuantity(id))}}>-</button>
              <span className={styles.quantity_self}>{quantity}</span>
             <button className={`btn ${styles.decrease}`} onClick={()=>{dispatch(incrementQuantity(id))}}>+</button>
        </div>
        <button className={`btn ${styles.delete_btn}`} onClick={()=>{dispatch(removeItem(id))}}>Delete item</button>
    </div>
  )
}

export default CartItem