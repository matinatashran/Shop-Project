import React from 'react';
import { Link, useParams } from 'react-router-dom';

// style
import style from './validation.module.css';

// components
import SignUp from './SignUp';
import SignIn from './SignIn';

const Validation = () => {
    const path = useParams();

    return (
        <div className={style.validationContainer}>
            <div className={style.validation}>
                <div className={style.innerContainer}>
                    <section className={style.leftContainer}>
                        <span className={style.leftTitle}>
                            {
                                path.pageType === "sign-in" ? "Welcome Back!" : "Hello Friend!"
                            }    
                        </span>
                        <p className={style.text}>
                            {
                                path.pageType === "sign-in" ? 
                                "To keep connected with us please login with your personal info" 
                                : 
                                "Enter your personal details and start journey with us"
                            }  
                        </p>
                        {
                            path.pageType === "sign-in" ? 
                            <Link to="/validation/sign-up">Sign Up</Link>
                            :
                            <Link to="/validation/sign-in">Sign In</Link>
                        }

                    </section>
                    <section className={style.signUpOrSignInBox}>
                        <div className={style.title}>ATASHRAN</div>

                        {/* ----- these links are for device less than 768px ----- */}
                        {
                            path.pageType === "sign-in" ? 
                            <Link to="/validation/sign-up">Sign Up</Link>
                            :
                            <Link to="/validation/sign-in">Sign In</Link>
                        }
                        {/* ------------------------------------------------------ */}
                        
                        {
                            path.pageType === "sign-in" ? <SignIn/> : <SignUp/>
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Validation;