import { Wrapper, Info, Loader } from "./styled";

const Loading = () => {
    return (
        <Wrapper>
            <Info>Please wait, projects are being loaded...</Info>
            <Loader />
        </Wrapper>
    )
};

export default Loading;