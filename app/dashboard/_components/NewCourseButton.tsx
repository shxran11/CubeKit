import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useContext } from "react";

const NewCourseButton = () => {
  const { userCourseList } = useContext(UserCourseListContext);
  return (
    <Link
      href={
        userCourseList?.length > 5 ? "/dashboard/upgrade" : "/create-course"
      }
    >
      <Button>Create new course</Button>
    </Link>
  );
};

export default NewCourseButton;
