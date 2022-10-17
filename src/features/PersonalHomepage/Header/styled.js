import styled from "styled-components";

export const Avatar = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    margin-top: -40px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const Caption = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.elementColor.textTitles};
    font-size: 38px;
    font-weight: 900;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 32px;
`;

export const ButtonText = styled.span`
    color: ${({theme}) => theme.elementColor.ButtonText};
    font-size: 20px;
    font-weight: 600;
    margin-left: 16px;
`;