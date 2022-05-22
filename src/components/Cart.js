import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './toastify';

// style
import style from './cart.module.css';

// components
import CartProduct from './shared/CartProduct';

// actions
import { clear, checkout } from '../redux/cart/cartActions';

const Cart = () => {

    const state = useSelector(state => state.cartState);
    const dispatchCart = useDispatch();
    const discount = 50;

    useEffect(() => {
        if (state.checkout){
            notify("Your shopping is successfully", "success")
            if (!state.itemsCounter){
                dispatchCart(clear());
            }
        }
    }, [state])

    return (
        <div className={style.cartContainer}>
            <div className={style.title}>
                <span>Atashran</span>Store
            </div>
            <div>
                <div className={style.left}>
                    {
                        state.selectedItems.length ? 
                            state.selectedItems.map(item => 
                                <CartProduct
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    category={item.category}
                                    price={item.price}
                                    productData={item}
                                    dispatchCart={dispatchCart}   
                                    state={state} 
                                    discount={item.id > 4 ? 0 : discount}
                                />)
                        :
                                <div className={style.emptyAlarm}>
                                    <button className={style.backBtn}>
                                        <Link to="/home">Back to Home</Link>
                                    </button>
                                    <div>Your Cart is Empty</div>
                                </div>
                    }
                </div>
                <div className={style.right}>
                    <div className={style.factor}>
                        <div> 
                            Quantity : <span className={style.quantity}>{state.itemsCounter}</span> 
                        </div>
                        <div> 
                            Total : <span className={style.total}>{state.totalPrice.toFixed(2)} $</span> 
                        </div>
                        
                        <div className={style.buttonBox}>
                            <button onClick={() => dispatchCart(clear())}>Clear</button>
                            <button className={ !state.itemsCounter && style.checkoutBtn} 
                                onClick={ state.itemsCounter && (() => dispatchCart(checkout())) }
                                >Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer/>
        </div>
    );
};

export default Cart;