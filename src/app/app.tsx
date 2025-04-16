import { createBrowserRouter, Outlet } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { Home } from "@/pages/home/Home";
import { routerPath } from "@/constants/routerPath";
import { ClientLayout } from "@/pages/layout/ClientLayout";
import { Rooms } from "@/pages/rooms/Rooms";
import { About } from "@/pages/about/About";
import { Contact } from "@/pages/contact/Contact";
import { SignInLayout } from "@/pages/layout/SignInLayout";

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
            children: [],
          },
        ],
      },
    ],
  },
]);
