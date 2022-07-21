import React from 'react';
import { Link } from 'react-router-dom';

// style
import style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <section className={style.footerTop}>
                <div className={style.logo}>ATASHRAN</div>
                <div className={style.links}>
                    <ul>
                        <li>About Us</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </section>
            <div className={style.line}></div>
            <section className={style.footerBottom}>
                <ul className={style.socialNetworks}>
                    <li> 
                        <Link to="#" className={style.link}>
                            <i className='fab fa-instagram'></i>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="#" className={style.link}>
                            <i className='fab fa-telegram'></i>
                        </Link> 
                    </li>                        
                    <li> 
                        <Link to="#" className={style.link}>
                            <i className='fab fa-whatsapp'></i>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="#" className={style.link}>
                            <i className='fab fa-twitter'></i>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="#" className={style.link}>
                            <i className='fab fa-facebook'></i>
                        </Link> 
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Footer;