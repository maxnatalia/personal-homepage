import { Avatar, Container, Caption, Name, Description, ButtonText } from "./styled";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as MessageIcon } from "../Header/message.svg";
import avatar from "../Header/avatar.jpg";


const Header = () => {
    return (
        <>
            <Container>
                <Avatar src={avatar} alt="Natalia Mazur-Żurek" />
                <div>
                    <Caption>this is</Caption>
                    <Name>Natalia Mazur-Żurek</Name>
                    <Description>I'm a passionate Frontend Developer in love with React, currently
                        looking for new job opportunities.</Description>
                    <ButtonLink>
                        <MessageIcon />
                        <ButtonText>Hire Me</ButtonText>
                    </ButtonLink>
                </div>
            </Container>
        </>
    )
};

export default Header;