import { Outlet } from "react-router";

export const SignInLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};
