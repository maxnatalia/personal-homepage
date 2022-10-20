import { Wrapper, Icon, Title, Info } from "./styled";
import { ButtonLink } from "../../../PersonalHomepage/ButtonLink";

const Error = () => {
    return (
        <Wrapper>
            <Icon />
            <Title>Ooops! Something went wrong...</Title>
            <Info>Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </Info>
            <ButtonLink>Go To GitHub</ButtonLink>
        </Wrapper>
    )
};

export default Error;