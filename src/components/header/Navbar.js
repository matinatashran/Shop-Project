import React from 'react';
import { Link } from 'react-router-dom';

// style
import style from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.navbarContainer}>
            <div className={style.buttonBox}>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/sign-in">Sign In</Link>
            </div>
            <ul className={style.links}>
                <li> 
                    <Link to="/home">
                        Home
                    </Link> 
                </li>
                <li> 
                    <Link to="/products">
                        Products
                    </Link> 
                </li>
                <li> 
                    <Link to="/cart">
                        Cart
                    </Link> 
                </li>
            </ul>
        </div>
    );
};

export default Navbar;