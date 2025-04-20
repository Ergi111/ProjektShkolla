import { WorkerHeader } from "@/components/Workers/WorkerHeader";
import { Outlet } from "react-router";

export const WorkersLayout = () => {
  return (
    <div>
      <WorkerHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
