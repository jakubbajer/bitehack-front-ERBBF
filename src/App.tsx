import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { EnsureLoggedIn } from "./components/EnsureLoggedIn";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalContextProvider } from "./components/Modal/ModalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: "/artykuly",
    element: (
      <Layout>
        <ArticlesPage />
      </Layout>
    ),
  },
  {
    path: "/artykuly/:id",
    element: (
      <Layout>
        <ArticlePage />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <EnsureLoggedIn>
        <Layout>
          <DashboardPage />
        </Layout>
      </EnsureLoggedIn>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <RouterProvider router={router} />
        <Modal />
      </ModalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
