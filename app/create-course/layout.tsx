import React, { PropsWithChildren } from "react";
import DashboardHeader from "../dashboard/_components/Header";

const CreateCourseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
};

export default CreateCourseLayout;
