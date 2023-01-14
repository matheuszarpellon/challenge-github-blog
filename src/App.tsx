import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsProvider } from "./contexts/PostsContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <PostsProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </PostsProvider>
  )
}