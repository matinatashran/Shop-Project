import React, { useEffect, useState } from 'react';

// style
import style from './field.module.css';

// helper
import { validate } from '../../../helper/functions';




const Field = ({ id, name, type, data, changeData, touch, setTouch, setChangeData, pageType }) => {
    const index = id - 1;

    const changeHandler = (event) => {
        if (event.target.name === "Accepted"){
            data[index].value = event.target.checked;
        }
        else
            data[index].value = event.target.value;


        setTouch({...touch, [data[index].name]: true})
        setChangeData(!changeData)
    }

    data[index].error = validate(data[index], pageType);

    return (
        <div className={data[index].name === "Accepted" ? style.checkBox : style.field}>
            <label>{name}{data[index].name === "Accepted" && " our Rules for sign up"}</label>
            <input type={type} name={name} onChange={changeHandler}/>
            {
                touch[data[index].name] && 
                data[index].error &&
                <span>{data[index].error}</span>
            }
        </div>

    );
};

export default Field;