import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./gitHub.svg";

export const Wrapper = styled.section`
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-top: 48px;
    }
`;

export const Icon = styled(GitHubIcon)`
    & path {
        fill: ${({ theme }) => theme.elementColor.logo};
    } 

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
        height: 32px;
    }
`;
export const Header = styled.h2`
    color: ${({ theme }) => theme.elementColor.textTitles};
    font-size: 30px;
    font-weight: 900;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.05em;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

export const Content = styled.div`

`;

