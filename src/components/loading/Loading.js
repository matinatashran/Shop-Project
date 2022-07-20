import React from 'react';

// style
import style from './loading.module.css';

// component
import LoadingCard from './LoadingCard';

const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>
    );
};

export default Loading;