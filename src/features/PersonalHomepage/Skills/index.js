import { ListWrapper, ListHeader, ListSkills, ListItem, Point, Icon } from "./styled";

const Skills = ({ title, icon, list }) => {
    return (
        <>
            <ListWrapper>
                <ListHeader>
                    {title}
                    <Icon src={icon} alt="" />
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