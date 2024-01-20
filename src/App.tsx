import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalContextProvider } from "./components/Modal/ModalContext";
import { UserContextProvider } from "./contexts/UserContext";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserContextProvider>
          <ModalContextProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <LandingPage />
                  </Layout>
                }
              />
              <Route
                path="/artykuly"
                element={
                  <Layout>
                    <ArticlesPage />
                  </Layout>
                }
              />
              <Route
                path="/artykuly/:id"
                element={
                  <Layout>
                    <ArticlePage />
                  </Layout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <Layout>
                    <DashboardPage />
                  </Layout>
                }
              />
              <Route
                path="*"
                element={
                  <Layout>
                    <NotFoundPage />
                  </Layout>
                }
              />
            </Routes>
            <Modal />
          </ModalContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
