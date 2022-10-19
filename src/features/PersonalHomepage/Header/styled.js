import styled from "styled-components";

export const Avatar = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    padding: 5px;
    margin-top: -20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        max-width: 133px;
        height: auto;
        width: 100%;
        aspect-ratio: 1/1;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        padding: 16px;
        grid-gap: 0;
    }
`;

export const Wrapper = styled.div`
    margin-top: 30px;
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
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

export const ButtonText = styled.span`
    color: ${({ theme }) => theme.elementColor.ButtonText};
    font-size: 20px;
    font-weight: 600;
    margin-left: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 1.2;
    }
`;