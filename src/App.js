import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme, darkTheme } from "./theme";
import PersonalHomepage from "./features/PersonalHomepage";
import ThemeSwitcher from "./common/ThemeSwitcher";
import { PageWrapper } from "./PageWrapper";
import { selectIsDarkTheme } from "./common/ThemeSwitcher/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <Normalize />
      <GlobalStyle />
      <PageWrapper>
        <ThemeSwitcher />
        <PersonalHomepage />
      </PageWrapper>
    </ThemeProvider>

  );
}

export default App;
