"use client";
import React, { PropsWithChildren, useState } from "react";
import { UserInputContext } from "../_context/UserInputContext";
import DashboardHeader from "../dashboard/_components/Header";

const CreateCourseLayout = ({ children }: PropsWithChildren) => {
  const [userCourseInput, setUserCourseInput] = useState<{ category?: string }>(
    {}
  );

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <div>
        <div className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
          <DashboardHeader />
        </div>
        <div>{children}</div>
      </div>
    </UserInputContext.Provider>
  );
};

export default CreateCourseLayout;
