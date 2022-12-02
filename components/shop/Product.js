import React from 'react'
import styles from "./Product.module.css"
import Image from 'next/image'
import PropTypes from 'prop-types';
import { useSelector,useDispatch} from 'react-redux';
import {addToCart} from '../../redux/reducers/CartSlice'

function Product({id,title,price,image}) {
  const state = useSelector(state=>state.cartState);
  const dispatch = useDispatch();
   return (
    <div className={styles.single_product}>
        <Image src={image} width={160} height={130} alt={title}/>
        <h3 className={styles.title}>{title}</h3>
        <i className={styles.price}>${price}</i>
        <button className={styles.btn__add_cart} onClick={()=>{dispatch(addToCart({id,title,price,image}))}}>Add to cart</button>
    </div>
  )
}

export default Product

Product.defaultProps = {
  title : 'Example title'
}