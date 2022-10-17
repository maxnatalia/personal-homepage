import Normalize from "react-normalize";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import PersonalHomepage from "./features/PersonalHomepage";
import ThemeSwitcher from "./common/ThemeSwitcher";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <ThemeSwitcher />
      <PersonalHomepage />
    </ThemeProvider>

  );
}

export default App;
