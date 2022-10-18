import { ListWrapper, ListHeader, ListSkills, ListItem, Point } from "./styled";

const Skills = ({ title, list }) => {
    return (
        <>
            <ListWrapper>
                <ListHeader>
                    {title}
                </ListHeader>
                <ListSkills>
                    {list.map((item) => (
                        <ListItem key={item}>
                            <Point />
                            {item}
                        </ListItem>
                    ))}
                </ListSkills>
            </ListWrapper>
        </>
    )
};

export default Skills;