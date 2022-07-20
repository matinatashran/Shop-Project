import React from 'react';

// style
import style from './loadingCard.module.css';

const LoadingCard = () => {
    return (
        <div className={style.loadingCardContainer}>
            <div className={style.one}></div>
            <div className={style.two}></div>
            <div className={style.three}></div>
        </div>
    );
};

export default LoadingCard;