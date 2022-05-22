import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// style
import style from './detail.module.css';

// helper
import { quantityCount } from '../helper/functions';

// actions
import fetchAPI from '../redux/products/productsActions';
import { addItem, removeItem, increaseItem, decreaseItem } from '../redux/cart/cartActions';

const Detail = () => {

    let { id } = useParams();

    // products
    const { allProducts } = useSelector(state => state.productsState);
    const dispatchProducts = useDispatch();

    useEffect(() => {
        dispatchProducts(fetchAPI("ALL"));
    }, [])

    // cart
    const state = useSelector(state => state.cartState);
    const dispatchCart = useDispatch(); 

    
    const productData = allProducts[id - 1];
    const { title, image, category, price, description } = productData;

    id = Number(id);

    const quantity = quantityCount(state, id);

    return (
        <div className={style.detailContainer}>
            <div className={style.title}>
                <span>Atashran</span>Store
            </div>
            <div className={style.left}>
                <div className={style.productInfo}>
                    <div className={style.productTitle}>
                        { title }
                    </div>
                    <div className={style.ProductCategory}>
                        <span> Category: </span>
                        {category}
                    </div>
                    <div className={style.productDescr}>
                       <span> Description: </span>
                        { description }
                    </div>
                    <div className={style.productPrice}>
                        <span>{ price - price * (0 * 100) } $</span>
                    </div>
                    <div className={style.buttonsAndLinkBox}>
                        <div>
                            <button className={style.link}>
                                <Link to="/home"> Back to Home </Link>
                            </button>
                        </div>
                        <div className={style.buttonsBox}>
                            {
                                quantity === 1 &&
                                <button className={style.incOrDecOrRemoveBtn} 
                                onClick={() => dispatchCart(removeItem(productData, 0))}>
                                        <i className='fa fa-trash'></i>
                                    </button>
                            }
                            {
                                quantity &&
                                    <span className={style.quantity}>{quantity}</span>
                            }
                            {
                                quantity > 1 &&
                                <button className={style.incOrDecOrRemoveBtn} 
                                onClick={() => dispatchCart(decreaseItem(productData, 0))}>-</button>
                            }
                            {
                                quantity ?
                                <button className={style.incOrDecOrRemoveBtn} 
                                onClick={() => dispatchCart(increaseItem(productData, 0))}>+</button>
                                :
                                <button className={style.addCartBtn} 
                                onClick={() => dispatchCart(addItem(productData, 0))}>Add to Cart</button>
                            }
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.imageBox}>
                        <img src={image} alt={category}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;