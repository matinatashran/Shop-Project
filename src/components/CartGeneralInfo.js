import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// style
import style from './cartGeneralInfo.module.css';

// styled components
import { ShowInfoDiv } from '../styledComponent/components';

const CartGeneralInfo = () => {
    
    const [isShow, setIsShow] = useState(false);

    const state = useSelector(state => state.cartState);

    const showHandler = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={style.cartGeneralInfoContainer}>
            <div className={style.cartIcon} onClick={showHandler}>
                <div>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>

            <ShowInfoDiv isShow={isShow}>
                <div>
                    QUANTITY <span className={style.quantity}>{state.itemsCounter}</span>
                </div>
                <div>
                    TOTAL PRICE <span className={style.total}>$ {state.totalPrice.toLocaleString()}</span>
                </div>

            </ShowInfoDiv>
        </div>
    );
};


export default CartGeneralInfo;