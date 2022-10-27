import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../gitHubSlice";
import { Wrapper, Icon, Header, Title } from "./styled";
import Content from "./Content";
import { gitHubUserName } from "../apiLink";

const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(gitHubUserName));
    }, [dispatch]);

    return (
        <Wrapper>
            <Icon />
            <Header>Portfolio</Header>
            <Title>My recent projects</Title>
            <Content
                status={repositoriesStatus}
                repositories={repositories} />
        </Wrapper>
    )
};

export default Portfolio;