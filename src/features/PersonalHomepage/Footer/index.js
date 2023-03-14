import { email } from "../email";
import { socialMedia } from "./socialMedia";
import { Caption, Address, Mail, Paragraph, LogosContainer, Link } from "./styled";

const Footer = () => {
    return (
        <footer>
            <Caption>Let's talk!</Caption>
            <Address>
                <Mail href={`mailto:${email}`}>{email}</Mail>
                <Paragraph>
                    I'm looking forward to improving and learning new skills at FrontEnd.
                    If you want to give me a chance to demonstrate my knowledge and hire me,
                    please contact me by e-mail or other way.
                    I'm gladly waiting for any challenges and jobs opportunities.
                </Paragraph>
                <LogosContainer>
                    {socialMedia.map(({ name, link, Logo }) => (
                        <Link
                            key={name}
                            href={link}
                            title={name}
                            target="_blank"
                            rel="noreferrer">
                            <Logo />
                        </Link>
                    ))}
                </LogosContainer>
            </Address>
        </footer>
    )
};

export default Footer;