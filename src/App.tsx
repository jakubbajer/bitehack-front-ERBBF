import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { EnsureLoggedIn } from "./components/EnsureLoggedIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
        <DashboardPage />
      </EnsureLoggedIn>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
