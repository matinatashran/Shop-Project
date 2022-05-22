import React from 'react';

// style
import style from './cartProduct.module.css';

// helper
import { quantityCount } from '../../helper/functions';

// actions
import { removeItem, increaseItem, decreaseItem } from '../../redux/cart/cartActions';


const CartProduct = ({ id, image, category, price, discount,  productData, dispatchCart, state }) => {

    const quantity = quantityCount(state, id)

    return (
        <div className={style.cartProductContainer}>
            <div className={style.imageBox}>
                <img src={image} alt={category}/>
            </div>
            <div className={style.category}>{category}</div>
            <div className={style.price}>$ {price - price * (discount / 100)}</div>
            <div className={style.quantity}>{quantity}</div>
            <div className={style.buttonBox}>
                {
                    quantity === 1 &&
                        <button onClick={() => dispatchCart(removeItem(productData, discount))}>
                            <i className='fa fa-trash'></i>
                        </button>
                }
                {
                    quantity > 1 &&
                        <button onClick={() => dispatchCart(decreaseItem(productData, discount))}>-</button>
                }
                <button onClick={() => dispatchCart(increaseItem(productData, discount))}>+</button>
            </div>
        </div>
    );
};

export default CartProduct;