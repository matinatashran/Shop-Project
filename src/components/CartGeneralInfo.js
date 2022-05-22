import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// style
import style from './cartGeneralInfo.module.css';

const CartGeneralInfo = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className={style.cartGeneralInfoContainer}>
            <div>Quantity: <span className={style.quantity}>{state.itemsCounter}</span></div>
            <div className={style.cartIcon}>
                <Link to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </div>
            <div>Total: <span className={style.total}>{state.totalPrice.toLocaleString()} $</span></div>
        </div>
    );
};


export default CartGeneralInfo;