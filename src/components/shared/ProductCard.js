import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

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
                    <div className={style.discount}>
                        <i className="fa fa-certificate">
                            <span>{discount}%</span>
                        </i>
                    </div>
                    
                :
                    null
            }

            <div className={style.title}>
                {title}
            </div>
            <div className={style.priceANDquantity}>
                <span className={style.price}>{price - price * (discount / 100)} $</span>
                {
                    quantity &&
                    <span className={style.quantity}>{quantity}</span>
                }
            </div>
            <div className={style.buttonAndLinkBox}>
                <Link to={`/products/${id}`}>Detail</Link>
                <div className={style.buttonBox}>
                    {
                        quantity === 1 &&
                            <button className={style.incOrDecOrRemoveBtn + ' ' + style.remove} 
                                onClick={() => dispatchCart(removeItem(productData, discount))}>
                                <i className='fa fa-trash'></i>
                            </button>
                    }
                    {
                        quantity > 1 &&
                            <button className={style.incOrDecOrRemoveBtn} 
                                onClick={() => dispatchCart(decreaseItem(productData, discount))}>-</button>
                    }
                    {
                        quantity ?
                            <button className={style.incOrDecOrRemoveBtn} 
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