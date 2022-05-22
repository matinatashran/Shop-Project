import React, { useState } from 'react';
import { Link, Route, Navigate, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../toastify';

// style
import style from './signUpAndSignIn.module.css';

// components
import Field from './field/Field';


const data = [
    {id: 1, name: "Email", type: "text", value: "", error: "", touch: false},
    {id: 2, name: "Password", type: "password", value: "", error: "", touch: false},
];


const SignIn = () => {

    const [changeData, setChangeData] = useState(false);

    const [touch, setTouch] = useState({
        Email: false,
        Password: false,
    });

    const submitHandler = (event) => {
        event.preventDefault();

        let i = 0;
        while (i < data.length){
            if (data[i].error){
                notify("An error occured.");
                setTouch({
                    Email: true,
                    Password: true,
                });
                break;
            }
            i++;
        }

        if (i === (data.length)){
            notify("Welcom to your Shop.", "success");
        }


    }

    return (
        <div className={style.signInContainer}>
            <div className={style.menu}>
                <div className={style.shoppingTitle}>
                    <span>Atashran</span>Store
                </div>
                <div className={style.backToHomeBtn}>
                    <Link to="/home">Home</Link>
                </div>
            </div>
            <form className={style.fields} onSubmit={submitHandler}>
                <div className={style.pageTitle}>
                    Sign In
                </div>
                {
                    data.map(item =>
                        <Field
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            data={data}
                            changeData={changeData}
                            touch={touch}
                            setTouch={setTouch}
                            setChangeData={setChangeData}
                            pageType={"SignIp"}
                        />
                    )
                }
                <div className={style.signUpAndSignInBtnBox}>
                    <Link to="/sign-up">Sign Up</Link>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignIn;