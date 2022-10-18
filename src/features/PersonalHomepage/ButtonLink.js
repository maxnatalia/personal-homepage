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
    border: 1px solid  ${({ theme }) => theme.elementColor.buttonHover};
    transition: box-shadow 0.3s;
    font-size: 20px;
    text-decoration: none;
    
    &:hover {
        box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
                -2px -2px 0px #8cc2ff;
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }

`;