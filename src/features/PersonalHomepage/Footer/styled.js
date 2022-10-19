import styled from "styled-components";

export const Caption = styled.h2`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 400;

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
`;

export const LogosContainer = styled.div`
    display: flex;
    gap: 24px;
`;
export const Link = styled.a`

`;


export const styledLogo = (Logo) => styled(Logo)`
    fill: ${({ theme }) => theme.elementColor.textTitles};

    &:hover {
        fill: ${({ theme }) => theme.elementColor.hover};
    }
`;