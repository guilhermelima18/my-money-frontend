import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AppRoutes } from "./routes";
import { MenuSidebarProvider } from "./contexts/MenuSidebarContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppContainer, AppMain } from "./styles/App";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MenuSidebarProvider>
        <AppContainer>
          <Header />
          <AppMain>
            <Sidebar />
            <AppRoutes />
          </AppMain>
          <Footer />
        </AppContainer>
      </MenuSidebarProvider>
    </BrowserRouter>
  );
}
