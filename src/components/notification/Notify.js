import React, { useState } from 'react';
import styled from 'styled-components';

// style
import style from './notify.module.css';

const func = () => {

}

const Line = styled.div`
    width: 0;
    height: 4px;
    position: absolute;
    bottom: 1px;
    background-color: ${props => props.type === "SUCCESS" ? "#00ff00" : "#ff0000"};
    animation: ${props => props.isShow ? "notification 4s 1 linear" : "none"};
    animation-delay: 1s;

    @keyframes notification {
        0%{
            width: 0;
        }
        100%{
            width: 100%;
        }
    }
`

const NotifyDiv = styled.div`
    top: ${props => props.isShow ? "0" : "-80px"};
    transition: 0.7s;

`
export let notification;

const Notify = () => {

    const [isShow, setIsShow] = useState(false);
    const [notifyData, setNotifyData] = useState({
        text: "",
        type: "SUCCESS"
    })

    notification = (text, type= "SUCCESS") => {
        setIsShow(!isShow);
        setNotifyData({
            text,
            type
        })

        setTimeout(() => {
            setIsShow(false)
        }, 4990);
    }

    const closeHandler = () => {
        setIsShow(false);
    }

    return (
        <NotifyDiv setIsShow={setIsShow} isShow={isShow} className={style.notifyContainer}>
            <div className={style.cross} onClick={closeHandler}>
                <i className="fas fa-times"></i>
            </div>
            <div className={style.notifyText}>
                {notifyData.text}
            </div>
            <Line type={notifyData.type} isShow={isShow} className={style.line}></Line>
        </NotifyDiv>
    );
};

export default Notify;