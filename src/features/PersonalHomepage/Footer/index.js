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
                    I’m always open to new projects whenever I have the time.
                    If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life,
                    feel free to conatct me
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
}

export default Footer;