import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../toastify';

// style
import style from './signUpAndSignIn.module.css';

// components
import Field from './field/Field';


const data = [
    {id: 1, name: "Name", type: "text", value: "", error: ""},
    {id: 2, name: "Email", type: "text", value: "", error: ""},
    {id: 3, name: "Number", type: "text", value: "", error: ""},
    {id: 4, name: "Password", type: "password", value: "", error: ""},
    {id: 5, name: "ConfirmPassword", type: "password", value: "", error: ""},
    {id: 6, name: "Accepted", type: "checkBox", value: false, error: ""},
];


const SignUp = () => {

    const [changeData, setChangeData] = useState(false);

    const [touch, setTouch] = useState({
        Name: false,
        Email: false,
        Number: false,
        Password: false,
        ConfirmPassword: false,
        Accepted: false
    });

    const submitHandler = (event) => {
        event.preventDefault();

        let i = 0;
        while (i < data.length){
            if (data[i].error){
                notify("An error occured.");
                setTouch({
                    Name: true,
                    Email: true,
                    Number: true,
                    Password: true,
                    ConfirmPassword: true,
                    Accepted: true
                });
                break;
            }
            i++;
        }

        if (i === (data.length))
            notify("Your sign up is successfully.", "success");

    }

    return (
        <div className={style.signUpContainer}>
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
                    Sign Up
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
                            pageType={"SignUp"}
                        />
                    )
                }
                <div className={style.signUpAndSignInBtnBox}>
                    <Link to="/sign-in">Sign In</Link>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;