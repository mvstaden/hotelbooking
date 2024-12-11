import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { AddHotel, Register, SignIn, MyHotels } from "./pages";
import { useAppContext } from "./context/AppContext";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";

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
        {
          path: "search",
          element: <Search />,
        },
        ...(isLoggedIn
          ? [
              {
                path: "add-hotel",
                element: <AddHotel />,
              },
              {
                path: "my-hotels",
                element: <MyHotels />,
              },
              {
                path: "edit-hotels/:hotelId",
                element: <EditHotel />,
              },
            ]
          : []),
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
