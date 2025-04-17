import { createBrowserRouter, Outlet } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { Home } from "@/pages/Client/Home";
import { routerPath } from "@/constants/routerPath";
import { ClientLayout } from "@/pages/Layout/ClientLayout";
import { Rooms } from "@/pages/Client/Rooms";
import { About } from "@/pages/Client/About";
import { Contact } from "@/pages/Client/Contact";
import { SignInLayout } from "@/pages/Layout/SignInLayout";
import { SignIn } from "@/pages/SignIn/Sign-In";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const App = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            element: <ClientLayout />,
            children: [
              {
                element: <Home />,
                path: routerPath.home,
              },
              {
                element: <Rooms />,
                path: routerPath.rooms,
              },
              {
                element: <About />,
                path: routerPath.about,
              },
              {
                element: <Contact />,
                path: routerPath.contact,
              },
            ],
          },
          {
            element: <SignInLayout />,
            children: [
              {
                element: <SignIn />,
                path: routerPath.signIn,
              },
            ],
          },
        ],
      },
    ],
  },
]);
