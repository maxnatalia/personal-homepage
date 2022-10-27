import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import { skillsData } from "./Skills/skillsData";
import { Main } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

const PersonalHomepage = () => {
    return (
        <>
            <Header />
            <Main>
                {skillsData.map((skillsInfo) => (
                    <Skills
                        key={nanoid()}
                        title={skillsInfo.title}
                        icon={skillsInfo.icon}
                        list={skillsInfo.list}
                    />
                ))}
                <Portfolio />
            </Main>
            <Footer />
        </>
    )
};

export default PersonalHomepage;