import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../ThemeSwitcher/sun.svg";

export const Wrapper = styled.span`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}px) {
        margin-right: 17px;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: inherit;
    background: none;
    display: flex;
    align-items: center;
    outline-offset: 8px;
`;

export const SwitcherText = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
    }
`;

export const BoxSwitcher = styled.span`
    border-radius: 12px;
    background: ${({ theme }) => theme.elementColor.boxSwitcher};
    border: 1px solid;
    padding: 3px;
    width: 48px;
    display: flex;
`;

export const IconWraper = styled.span`
    display: flex;
    border-radius: 50%;
    padding: 3px;
    background: ${({ theme }) => theme.elementColor.iconWrapper};
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.elementColor.iconFill};
`;