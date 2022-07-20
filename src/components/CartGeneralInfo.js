import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// style
import style from './cartGeneralInfo.module.css';

const ShowInfoDiv = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    top: 80px;
    right: calc(50% - 125px);
    transform: ${props => props.isShow ? "scale(1)" : "scale(0)"};
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 40px;
    font-size: 0.9rem;
    color: #ff4400;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    background-color: #1b2740e9;
    span{
        display: block;
        color: #ececec;
        font-weight: 600;
        margin-top: 5px;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        width: 180px;
        height: 180px;
        right: calc(50% - 90px);
        font-size: 0.8rem;
        padding-left: 20px;

        span{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 320px) {
        width: 90%;
        height: 170px;
        span{
            font-size: 0.8rem;
        }
    }
`

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