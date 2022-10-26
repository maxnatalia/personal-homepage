import { Wrapper, Button, SwitcherText, BoxSwitcher, IconWraper, Icon } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectDarkTheme } from "./themeSlice";

const ThemeSwitcher = () => {
    const darkTheme = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}> 
                <SwitcherText>
                    Dark mode {darkTheme ? "off" : "on" }
                </SwitcherText>
                <BoxSwitcher>
                    <IconWraper moveToRight={darkTheme} >
                        <Icon />
                    </IconWraper>
                </BoxSwitcher>
            </Button >
        </Wrapper >
    )
};

export default ThemeSwitcher;