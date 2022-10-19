import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import { skillsList, toLearnSkillsList } from "./Skills/skillsData";
import { Main } from "./Main";

const PersonalHomepage = () => {
    return (
        <>
            <Header />
            <Main>
                <Skills
                    title={"My skillset includes"}
                    list={skillsList}
                />
                <Skills
                    title={"What I want to learn next"}
                    list={toLearnSkillsList}
                />
            </Main>
            <Footer />
        </>
    )
};

export default PersonalHomepage;