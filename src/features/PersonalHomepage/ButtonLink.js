import styled from "styled-components";

export const ButtonLink = styled.a`
    background-color: ${({ theme }) => theme.elementColor.buttonBackground};
    color: ${({ theme }) => theme.elementColor.buttonText};
    padding: 12px 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid  ${({ theme }) => theme.elementColor.buttonBorder};
    transition: box-shadow 0.3s;
    font-size: 20px;
    text-decoration: none;
    
    &:hover {
        box-shadow: ${({ theme }) => theme.elementColor.buttonHover};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.elementColor.buttonActive};
    }

`;