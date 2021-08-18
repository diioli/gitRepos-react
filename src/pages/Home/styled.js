import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
export const Content = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 30px;
    padding: 0 10px;
    border-radius: 5px 0px 0px 5px;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    heigth: 10px;
    border: 7px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const ErrorMsg = styled.span`
    display: block;
    font-family: sans-serif;
    font-size: 0.75rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;