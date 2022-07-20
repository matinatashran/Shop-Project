import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { notification } from '../notification/Notify';

// style
import style from './signUpAndSignIn.module.css';

// components
import Field from './field/Field';


const data = [
    {id: 1, name: "Name", type: "text", value: "", error: ""},
    {id: 2, name: "Email", type: "text", value: "", error: ""},
    {id: 3, name: "Password", type: "password", value: "", error: ""},
    {id: 4, name: "ConfirmPassword", type: "password", value: "", error: ""},
];


const SignUp = () => {

    const [changeData, setChangeData] = useState(false);

    const [touch, setTouch] = useState({
        Name: false,
        Email: false,
        Password: false,
        ConfirmPassword: false,
    });

    const submitHandler = (event) => {
        event.preventDefault();

        let i = 0;
        while (i < data.length){
            notification("An Error Occured.", "ERROR");
            if (data[i].error){
                setTouch({
                    Name: true,
                    Email: true,
                    Password: true,
                    ConfirmPassword: true,
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
        <div className={style.signUpContainer}>
            <form className={style.fields} onSubmit={submitHandler}>
                <div className={style.pageTitle}>
                    Create Acount
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
                <div className={style.pageBtns}>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;