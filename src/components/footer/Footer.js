import React from 'react';
import { Link } from 'react-router-dom';

// style
import style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.belong}>      
                All rights of this site belong to Atashran Shop
            </div>
            <div className={style.aouther}>
                Site Aouther is <a href='https://admirable-swan-bbeece.netlify.app' target="_blank">MATIN ATASHRAN</a>
            </div>
        </div>
    );
};

export default Footer;