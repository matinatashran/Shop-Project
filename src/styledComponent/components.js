import styled from "styled-components";

// ----- CartGeneral info components -----
const ShowInfoDiv = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    top: 80px;
    right: calc(50% - 125px);
    transform: ${props => props.isShow ? "scale(1)" : "scale(0)"};
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 40px;
    font-size: 0.9rem;
    color: #ff4400;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    background-color: #1b2740e9;
    span{
        display: block;
        color: #ececec;
        font-weight: 600;
        margin-top: 5px;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        width: 180px;
        height: 180px;
        right: calc(50% - 90px);
        font-size: 0.8rem;
        padding-left: 20px;

        span{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 320px) {
        width: 90%;
        height: 170px;
        span{
            font-size: 0.8rem;
        }
    }
`
export { ShowInfoDiv };


// ----- Detail components -----
const Span = styled.span`
    font-size: 0.9rem;
    margin-right: 30px;
    position: absolute;
    bottom: -2px;
    border: none;
    padding-bottom: 4px;
    font-weight: 500;
    color: #6d6d6d;
    cursor: pointer;

    :nth-child(${props => props.childOfSpan}){
        color: #e3e3e3;
        border-bottom: 3px solid;
    }

    :nth-child(2){
        left: 140px;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
        
        :nth-child(2){
            left: 120px;
        }  
    }
`
const Descreption = styled.div`
    color: #969696;
    font-size: 0.85rem;
    font-weight: bold;
    display: ${props => props.descrOrDetail === "DESCREPTION" ? "block" : "none"};
    line-height: 18px;
    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`

const ProDetail = styled.div`
    display: ${props => props.descrOrDetail === "DETAIL" ? "block" : "none"};
`

export { Span, Descreption, ProDetail };


// ----- Detail components -----
const BurgerMenu = styled.div`
    top: ${props => props.isShow ? "-5px" : "-100px"};
    display: ${props => props.isShow ? "block" : "none"};
`
export { BurgerMenu };

