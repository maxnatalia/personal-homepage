import { Wrapper, Button, SwitcherText, BoxSwitcher, IconWraper, Icon } from "./styled";

const ThemeSwitcher = () => {
    return (
        <Wrapper>
            <Button>
                <SwitcherText>
                    dark mode off
                </SwitcherText>
                <BoxSwitcher>
                    <IconWraper>
                        <Icon />
                    </IconWraper>
                </BoxSwitcher>
            </Button>
        </Wrapper>
    )
};

export default ThemeSwitcher;