import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { AddHotel, Register, SignIn } from "./pages";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { isLoggedIn } = useAppContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        ...(isLoggedIn
          ? [
              {
                path: "add-hotel",
                element: <AddHotel />,
              },
            ]
          : []),
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
