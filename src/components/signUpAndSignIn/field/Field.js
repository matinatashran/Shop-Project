import React  from 'react';

// style
import style from './field.module.css';

// helper
import { validate } from '../../../helper/functions';


const Field = ({ id, name, type, data, changeData, touch, setTouch, setChangeData, pageType }) => {
    const index = id - 1;

    const changeHandler = (event) => {

        data[index].value = event.target.value;

        setTouch({...touch, [data[index].name]: true})
        setChangeData(!changeData)
    }

    data[index].error = validate(data[index], pageType);

    return (
        <div className={style.field}>
            <label className={style.fieldName}>{name}</label>
            <input type={type} className={style.fieldInput} name={name} onChange={changeHandler}/>
            {
                touch[data[index].name] && 
                data[index].error &&
                <span className={style.fieldError}>{data[index].error}</span>
            }
        </div>

    );
};

export default Field;