import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme, darkTheme } from "./theme";
import PersonalHomepage from "./features/PersonalHomepage";
import ThemeSwitcher from "./common/ThemeSwitcher";
import { selectDarkTheme } from "./common/ThemeSwitcher/themeSlice";

function App() {
  const isdarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isdarkTheme ? darkTheme : theme}>
      <Normalize />
      <GlobalStyle />
      <ThemeSwitcher />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
