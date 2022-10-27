import styled from "styled-components";

export const Avatar = styled.img`
    width: 30vw;
    max-width: 384px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    margin-top: -30px; // that's height of the theme switcher

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       width: 133px;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 66px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
        padding: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-gap: 32px;
    }
`;

export const Caption = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.titles};
    font-size: 38px;
    font-weight: 900;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 32px;
    max-width: 650px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        max-width: 570px;
    }
`;

export const ButtonText = styled.span`
    color: ${({ theme }) => theme.textButton};
    font-size: 20px;
    font-weight: 600;
    margin-left: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 1.2;
    }
`;