import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { EnsureLoggedIn } from "./components/EnsureLoggedIn";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><LandingPage /></Layout>,
  },
  {
    path: "/artykuly",
    element: <ArticlesPage />,
  },
  {
    path: "/artykuly/:id",
    element: <ArticlePage />,
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
  return (
    <>
      <RouterProvider router={router} />;
      <Modal />
    </>
  );
};

export default App;
