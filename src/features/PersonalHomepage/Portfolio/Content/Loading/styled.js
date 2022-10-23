import styled from "styled-components";
import { ReactComponent as LoaderIcon } from "./loader.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.p`
    margin-bottom: 48px;
    margin-top: 88px;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

export const Loader = styled(LoaderIcon)`
    margin-bottom: 140px;
    animation: spin 1s linear infinite;
    height: auto;

    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 86px;
    }
`;