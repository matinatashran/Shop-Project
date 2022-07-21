import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import style from './cart.module.css';

// components
import CartProduct from './shared/CartProduct';

// actions
import { clear, checkout } from '../redux/cart/cartActions';

// helper
import { notification } from './notification/Notify';

const Cart = () => {

    const state = useSelector(state => state.cartState);
    const dispatchCart = useDispatch();

    window.localStorage.setItem('userCart', JSON.stringify(state));

    const discount = 50;

    useEffect(() => {
        if (state.checkout){
            notification("Your Shopping chekout successfully", "SUCCESS");
            if (!state.itemsCounter){
                dispatchCart(clear());
            }
        }
    }, [state])

    return (
        <div className={style.cartContainer}>
            <section className={style.title}>
                Cart
            </section>
            <section className={style.cartHeader}>
                <div className={style.cartInfo}>
                    <p>
                        Quantity: <span>{state.itemsCounter}</span>
                    </p>
                    <p>
                        Total: <span>{state.totalPrice.toFixed(2)} $</span>
                    </p>
                </div>
                <div className={style.cartInfoBtns}>
                    <button className={style.clearBtn} onClick={() => dispatchCart(clear())}>Clear</button>
                    {
                        state.itemsCounter ?
                            <button className={style.checkoutBtn} onClick={() => dispatchCart(checkout())}>Checkout</button>
                        :   
                            <button className={style.fakeButton}>Checkout</button>
                    }
                </div>
            </section>
            <section className={style.showProducts}>
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

                            </div>
                }
            </section>
        </div>
    );
};

export default Cart;