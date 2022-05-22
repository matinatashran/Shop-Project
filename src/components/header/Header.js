import React from 'react';

// style
import style from './header.module.css';

// components
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className={style.headerContainer}>
            <Navbar/>
            <h1>Atashran Digital Tools Store</h1>
            <div className={style.line}></div>
            <div className={style.circle}>
                <a href='#' className={style.instagram}>
                    <i className='fa fa-instagram'></i> 
                </a>
                <a href='#' className={style.telegram}>
                    <i className='fa fa-telegram'></i> 
                </a>
                <a href='#' className={style.github}>
                    <i className='fa fa-github'></i> 
                </a>
                <a href='#' className={style.whatsapp}>
                    <i className='fa fa-whatsapp'></i> 
                </a>
            </div>
        </div>
    );
};

export default Header;