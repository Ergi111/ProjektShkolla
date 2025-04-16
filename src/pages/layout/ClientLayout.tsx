import { Header } from "@/components/Header";
import { Outlet } from "react-router";

export const ClientLayout = () => {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
