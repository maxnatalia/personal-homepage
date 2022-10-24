import styled from "styled-components";

export const Caption = styled.h2`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding: 16px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    }
`;

export const Address = styled.address`
    font-style: unset;
    padding: 16px;
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Mail = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.linkFooter};
    font-size: 32px;
    font-weight: 900;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.hover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const LogosContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;
    margin-bottom: 109px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-top: 40px;
        margin-bottom: 31px;
    }
`;

export const Link = styled.a`
    margin-top: 24px;
`;

export const styledLogo = (Logo) => styled(Logo)`
    height: auto;
    
    & path {
        fill: ${({ theme }) => theme.icons};
    } 

    transition: fill 0.3s;
        
    &:hover {
        & path {
            fill: ${({ theme }) => theme.hover};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }
`;