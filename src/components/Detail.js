import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// style
import style from './detail.module.css';

// helper
import { quantityCount } from '../helper/functions';

// actions
import fetchAPI from '../redux/products/productsActions';
import { addItem, removeItem, increaseItem, decreaseItem } from '../redux/cart/cartActions';

// styled Components
import { Span, Descreption, ProDetail } from '../styledComponent/components';


const Detail = () => {
    
    const [childOfSpan, setChildOfSpan] = useState(1)
    const [descrOrDetail, setDescrOrDetail] = useState("DESCREPTION");
    
    const spanClickHandler = (child) => {
        setChildOfSpan(child)
        
        child === 1 ? setDescrOrDetail("DESCREPTION") : setDescrOrDetail("DETAIL");
    }
    
    let { id } = useParams();

    // products
    const { allProducts } = useSelector(state => state.productsState);

    // cart
    const state = useSelector(state => state.cartState);
    const dispatchCart = useDispatch(); 


    const productData = allProducts[id - 1];
    const { title, image, category, price, description } = productData;


    id = Number(id);

    // "men's clothing" 

// "Mens Casual Slim Fit"
    const quantity = quantityCount(state, id);

    return (
        <div className={style.detailContainer}>
            <section className={style.productInfo}>
                <div className={style.title}>
                    <span>ATASHRAN</span> SHOP
                </div>
                <div className={style.subTitle}>ORGINAL</div>
                <div className={style.productPrice}>$ {price}</div>
                <div className={style.progressBar}>
                    <Span onClick={() => spanClickHandler(1)} childOfSpan={childOfSpan}>DESCREPTION</Span>
                    <Span onClick={() => spanClickHandler(2)} childOfSpan={childOfSpan}>DETAILS</Span>
                </div>

                <Descreption descrOrDetail={descrOrDetail}>
                    {description}
                </Descreption>

                <ProDetail descrOrDetail={descrOrDetail} className={style.detailInfo}>
                    <section>
                        <h5>TITLE</h5>
                        <span>{title}</span>
                    </section>
                    <section>
                        <h5>CATEGORY</h5>
                        <span>{category}</span>
                    </section>
                </ProDetail>

                {
                    quantity > 0 &&
                    <div className={style.productQuantity}>
                    
                    {
                        quantity === 1 &&
                            <button className={style.removeBtn} 
                                onClick={() => dispatchCart(removeItem(productData, 0))}>
                            <i className='fa fa-trash'></i>
                            </button>
                    }
                    {
                        quantity > 1 &&
                        <button className={style.quantityBtns} 
                        onClick={() => dispatchCart(decreaseItem(productData, 0))}>-</button>
                    }
                    {
                        
                        <span className={style.quantity}>{quantity}</span>
                    }

                    <button className={style.quantityBtns} 
                        onClick={() => dispatchCart(increaseItem(productData, 0))}>+</button>

                </div>
                    }
                <div className={style.productTotalPrice}>
                    <span className={style.totalPriceTitle}>TOTAL PRICE</span>
                    <span className={style.totalPrice}>$ {(quantity * price).toFixed(2)}</span>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.addCartBtn} 
                        onClick={() => dispatchCart(addItem(productData, 0))}>ADD TO CART</button>
                </div>
            </section>
            <section className={style.productImage}>
                <img src={image}/>
            </section>
        </div>
    );
};

export default Detail;