import { Wrapper, Button, SwitcherText, BoxSwitcher, IconWraper, Icon } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

const ThemeSwitcher = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}> 
                <SwitcherText>
                    Dark mode {isDarkTheme ? "off" : "on" }
                </SwitcherText>
                <BoxSwitcher>
                    <IconWraper moveToRight={isDarkTheme} >
                        <Icon />
                    </IconWraper>
                </BoxSwitcher>
            </Button >
        </Wrapper >
    )
};

export default ThemeSwitcher;