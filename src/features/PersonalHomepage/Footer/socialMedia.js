import { ReactComponent as GitHubLogo } from "./gitHub.svg";
import { ReactComponent as LinkedInLogo } from "./linkedIn.svg";
import { styledLogo } from "./styled";
import { gitHubUserName } from "../apiLink";

export const socialMedia = [

    {
        name: "GitHub",
        link: `https://github.com/${gitHubUserName}`,
        Logo: styledLogo(GitHubLogo),
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/natalia-mazur-%C5%BCurek-136a35254/",
        Logo: styledLogo(LinkedInLogo),
    }
]