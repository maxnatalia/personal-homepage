import styled from "styled-components";
import { ReactComponent as PointList } from "../Skills/point.svg";

export const ListWrapper = styled.section`
    background-color: ${({ theme }) => theme.background.tiles};
    margin-top: 72px;
    box-shadow: ${({ theme }) => theme.hoverTile};
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 16px;
    }
`;

export const ListHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme }) => theme.titles};
    border-bottom: 1px solid ${({ theme }) => theme.borderTiles};
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const ListSkills = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    padding: 4px;
    font-size: 18px;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Point = styled(PointList)`
    margin-right: 16px;
`;

export const Icon = styled.img`
    padding: 0 16px;
`;