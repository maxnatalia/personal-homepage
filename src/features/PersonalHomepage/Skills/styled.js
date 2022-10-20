import styled from "styled-components";
import { ReactComponent as PointList } from "../Skills/point.svg";

export const ListWrapper = styled.section`
    min-width: 1216px;
    background-color: ${({theme}) => theme.elementColor.backgroundSkills};
    padding: 32px;
    margin-top: 72px;
    box-shadow: ${({theme}) => theme.elementColor.boxShadowSkills};
    border-radius: 4px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        padding: 16px;
        min-width: 347px;
    }
`;

export const ListHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme }) => theme.elementColor.textTitles};
    border-bottom: 1px solid ${({ theme }) => theme.elementColor.borderBottom};
    padding-bottom: 15px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const ListSkills = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        grid-template-columns: 292px;
    }
`;

export const ListItem = styled.li`
    padding: 4px;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 400;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Point = styled(PointList)`
    margin-right: 16px;
`;

export const Icon = styled.img`
    padding: 0 16px;
`;