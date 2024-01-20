import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticlesPage from "./pages/ArticlesPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/Layout/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/artykuly",
    element: <ArticlesPage/>,
  },
  {
    path: "/artykuly/:id",
    element: <ArticlePage/>,
  },
  {
    path: "/dashboard",
    element: <Layout child={<DashboardPage/>}/>,
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
