import { PropsWithChildren } from "react";
import CourseHeader from "./_components/Header";

const StartCourseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
        <CourseHeader />
      </div>
      <div className="mt-20 mb-10 mx-5 lg:mx-20">{children}</div>
    </div>
  );
};

export default StartCourseLayout;
