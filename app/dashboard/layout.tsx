import { PropsWithChildren } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/Header";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64 m-2">
        <DashboardHeader />
        {children}
      </div>
      ;
    </div>
  );
};

export default DashboardLayout;
