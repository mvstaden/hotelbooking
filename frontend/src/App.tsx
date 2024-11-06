import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <>Register</>,
      },
      {
        path: "login",
        element: <>Login</>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
