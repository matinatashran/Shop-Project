import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// style
import style from './navbar.module.css';

// styled components
import { BurgerMenu } from '../styledComponent/components';

const Navbar = () => {

    const [isShow, setIsShow] = useState(false);

    const clickHandler = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={style.navbarContainer}>
            <div className={style.buttonBox}>
                <Link to="/validation/sign-up">Sign Up</Link>
                <Link to="/validation/sign-in">Sign In</Link>
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

            {/* mobile device */}
            <div className={style.burgerMenuIcon} onClick={clickHandler}>
                <i class="fa fa-bars"></i>
            </div>

            <BurgerMenu isShow={isShow} className={style.burgerMenu}>
                <div className={style.cross} onClick={clickHandler}>
                    <li className='fas fa-times'></li>
                </div>
                <ul className={style.burgerMenuLinks}>
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
                <div className={style.burgerMenuButtons}>
                    <Link to="/validation/sign-up">Sign Up</Link>
                    <Link to="/validation/sign-in">Sign In</Link>
                </div>
            </BurgerMenu>
        </div>
    );
};

export default Navbar;