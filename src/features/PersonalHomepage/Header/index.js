import { Avatar, Container, Caption, Name, Description, ButtonText } from "./styled";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { ReactComponent as MessageIcon } from "../Header/message.svg";
import avatar from "../Header/avatar.jpg";
import { email } from "../email";

const Header = () => {
    return (
        <>
            <Container>
                <Avatar src={avatar} alt="Natalia Mazur-Żurek" />
                <div>
                    <Caption>this is</Caption>
                    <Name>Natalia Mazur-Żurek</Name>
                    <Description>
                        👩💻I’m an enthusiastic Frontend Developer in friendship with React, 
                        currently looking for new job opportunities and challenges.
                    </Description>
                    <ButtonLink
                        title={email}
                        href={`mailto:${email}`}>
                        <MessageIcon />
                        <ButtonText>Hire Me</ButtonText>
                    </ButtonLink>
                </div>
            </Container>
        </>
    )
};

export default Header;