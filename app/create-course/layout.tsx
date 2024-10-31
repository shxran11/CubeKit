import React, { PropsWithChildren } from "react";
import DashboardHeader from "../dashboard/_components/Header";

const CreateCourseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
        <DashboardHeader />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CreateCourseLayout;
