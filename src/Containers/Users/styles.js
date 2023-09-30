import styled from "styled-components";

export const Container = styled.div`
    background: #000000;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255,255,255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin-bottom: 80px;
`;


export const Button = styled.button`
    width: 342px;
    height:74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-top: 120px;
    line-height: 25px;
    color: #fff;
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 20px;


    img {
    transform: rotateY(180deg);
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    `;
    
    export const User = styled.li`
    display:flex;
    justify-content: space-around;
    align-items: center;
    

    border-radius: 14px;
    box-shadow: 0px 4x 4x rgba(0,0,0,0.25);
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;
    padding: 10px;



    p {
        color: #fff;
        font-weight: bold;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    `

