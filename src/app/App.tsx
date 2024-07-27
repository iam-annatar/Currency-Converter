import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout";
import PageNotFound from "../components/PageNotFound";
import routes from "./pages/routes/routes";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
