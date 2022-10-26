import styled from "styled-components";

export const ButtonLink = styled.a`
    background-color: ${({ theme }) => theme.background.button};
    color: ${({ theme }) => theme.textButton};
    padding: 12px 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid  ${({ theme }) => theme.borderButton};
    transition: box-shadow 0.3s;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow 0.3s;
    
    &:hover {
        box-shadow: ${({ theme }) => theme.hoverButton};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.activeButton};
    }
`;