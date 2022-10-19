import styled from "styled-components";

export const Caption = styled.h2`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
        padding: 16px;
    }
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        padding: 16px;
    }
`;

export const Mail = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.elementColor.textTitles};
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0.05em;

    &:hover {
        color: ${({ theme }) => theme.elementColor.hover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        padding: 16px;
    }
`;

export const LogosContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 16px;
    }
`;

export const Link = styled.a`
    margin-top: 24px;
`;

export const styledLogo = (Logo) => styled(Logo)`
    fill: ${({ theme }) => theme.elementColor.textTitles};
    transition: fill 0.3s;
    
    &:hover {
        & path {
        fill: ${({ theme }) => theme.elementColor.hover};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
        height: 32px;
    }
`;