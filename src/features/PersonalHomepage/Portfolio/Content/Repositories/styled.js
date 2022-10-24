import styled from "styled-components";
import a from "color-alpha";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    list-style-type: none;
    padding: 0;
    margin-top: 24px;
    margin-bottom: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        padding: 16px;
        margin-bottom: 40px;
    }
`;

export const Tile = styled.li`
    background: ${({ theme }) => theme.background.tiles};
    padding: 56px;
    border-radius: 4px;
    border: 6px solid ${({ theme }) => theme.borderTiles};
    box-shadow: ${({ theme }) => theme.hoverTile};
    transition: border-color 0.3s;

    &:hover {
        border-color: ${({ theme }) => theme.borderHoverTiles};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 24px;
    }
`;

export const Name = styled.h3`
    color: ${({ theme }) => theme.titlesPortfolio};
    font-size: 24px;
    font-weight: 700;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Links = styled.dl`
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.links};
    border-bottom: 1px solid ${({ theme }) => a(theme.borderLinks, 0.3)};
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`;
