"use client";
import { PropsWithChildren, useState } from "react";
import { UserInputContext } from "../_context/UserInputContext";
import CourseHeader from "../course/[courseId]/_components/Header";

const CreateCourseLayout = ({ children }: PropsWithChildren) => {
  const [userCourseInput, setUserCourseInput] = useState<{ category?: string }>(
    {}
  );

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <div>
        <div className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
          <CourseHeader />
        </div>
        <div>{children}</div>
      </div>
    </UserInputContext.Provider>
  );
};

export default CreateCourseLayout;
