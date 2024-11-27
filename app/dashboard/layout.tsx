"use client";
import { PropsWithChildren, useState } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/Header";
import { UserCourseListContext } from "../_context/UserCourseListContext";
import { courseList } from "@prisma/client";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [userCourseList, setUserCourseList] = useState<courseList[]>([]);
  return (
    <UserCourseListContext.Provider
      value={{ userCourseList, setUserCourseList }}
    >
      <div>
        <div className="md:w-64 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:ml-64 m-2">
          <DashboardHeader />
          <div className="p-5">{children}</div>
        </div>
        ;
      </div>
    </UserCourseListContext.Provider>
  );
};

export default DashboardLayout;
