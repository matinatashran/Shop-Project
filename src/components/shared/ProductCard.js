import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// style
import style from './productCard.module.css';

// helper
import { quantityCount } from '../../helper/functions';

// actions
import { addItem, removeItem, increaseItem, decreaseItem } from '../../redux/cart/cartActions';


const ProductCard = ({ id, title, image, price, category, discount, productData }) => {

    const state = useSelector(state => state.cartState)
    const dispatchCart = useDispatch();
    const quantity = quantityCount(state, id); 

    return (
        <div className={style.productContainer}>
            <div className={style.imageBox}>
                <img src={image} alt={category}/>
            </div>
            
            {
                discount ? 
                    <div className={style.discountBox}>
                        <span>{discount}%</span>
                    </div>
                :
                    null
            }

            <div className={style.price}>
                <span>{price - price * (discount / 100)} $</span>
            </div>
            <div className={style.bottomBox}>
                <div className={style.detail}>
                    <Link to={`/products/${id}`}>Detail</Link>
                </div>
                <div className={style.buttonAndQuantityBox}>
                    {
                        quantity === 1 &&
                            <button className={style.removeBtn} 
                                onClick={() => dispatchCart(removeItem(productData, discount))}>
                                <i className='fa fa-trash'></i>
                            </button>
                    }
                    {
                            quantity > 1 &&
                                <button className={style.incOrDecBtn} 
                                    onClick={() => dispatchCart(decreaseItem(productData, discount))}>-</button>
                    }
                    {
                        quantity &&
                            <div className={style.quantity}>
                                <span>{quantity}</span>
                            </div>
                    }
                    {
                        quantity ?
                            <button className={style.incOrDecBtn} 
                                onClick={() => dispatchCart(increaseItem(productData, discount))}>+</button>
                        :
                            <button className={style.addCartBtn} 
                                onClick={() => dispatchCart(addItem(productData, discount))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;