import { PropsWithChildren } from "react";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">{children}</div>;
    </div>
  );
};

export default DashboardLayout;
