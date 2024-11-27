import { createContext, Dispatch, SetStateAction } from "react";
import { courseList } from "@prisma/client";

interface UserCourseListContextType {
  userCourseList: courseList[];
  setUserCourseList: Dispatch<SetStateAction<courseList[]>>;
}

export const UserCourseListContext = createContext<UserCourseListContextType>({
  userCourseList: [],
  setUserCourseList: () => {},
});
