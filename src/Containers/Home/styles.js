import styled from "styled-components";
import Background from '../../assets users/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
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
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
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

export const InputLabel = styled.p`
    color: #eee;
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
`;

export const Input = styled.input`
    border-radius: 14px;
    box-shadow: 0px 4x 4x rgba(0,0,0,0.25);
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 26px;
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-left: 25px;
    margin-bottom: 34px;
`;

export const Button = styled.button`
    width: 342px;
    height:74px;
    background: rgba(0,0,0,0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    color: #fff;
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    `;
    
  

