import styled from "styled-components";
import { ReactComponent as IconDanger } from "./danger.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 95px;
    margin-bottom: 140px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-bottom: 48px;
        margin-top: 24px;
    }
`;

export const Icon = styled(IconDanger)`

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
        height: 32px;
    }
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.titles};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const Info = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;