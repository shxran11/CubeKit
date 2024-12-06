"use client";
import { PropsWithChildren, useState } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/Header";
import { UserCourseListContext } from "../_context/UserCourseListContext";
import { courseList } from "@prisma/client";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [userCourseList, setUserCourseList] = useState<courseList[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <UserCourseListContext.Provider
      value={{ userCourseList, setUserCourseList }}
    >
      <div className="flex">
        {/* Sidebar */}
        <div className={`md:w-64`}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>

        {/* Main content */}
        <div className="flex-1">
          <DashboardHeader toggleSidebar={toggleSidebar} />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  );
};

export default DashboardLayout;
