import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// style
import style from './signUpAndSignIn.module.css';

// components
import Field from './field/Field';

// helper
import { notification } from '../notification/Notify';

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
            notification("Email or Password not correct!", "ERROR");
            if (data[i].error){
                setTouch({
                    Email: true,
                    Password: true,
                });
                break;
            }
            i++;
        }

        if (i === (data.length)){
            notification("Welcom!", "SUCCESS");
        }
    }

    return (
        <div className={style.signInContainer}>
            <form className={style.fields} onSubmit={submitHandler}>
                <div className={style.pageTitle}>
                    Enter Your Account
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
                <div className={style.pageBtns}>
                    <button type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;