import { Wrapper, Icon, Title, Info } from "./styled";
import { ButtonLink } from "../../../ButtonLink/ButtonLink";
import { gitHubUserName } from "../../../apiLink";

const Error = () => {
    return (
        <Wrapper>
            <Icon />
            <Title>Ooops! Something went wrong...</Title>
            <Info>Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </Info>
            <ButtonLink
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${gitHubUserName}`}
                title={"github.com/maxnatalia"}
            >
                Go To GitHub
            </ButtonLink>
        </Wrapper>
    )
};

export default Error;