import { createContext, Dispatch, SetStateAction } from "react";

interface UserCourseInput {
  category?: string;
  topic?: string;
  description?: string;
  difficulty?: string;
  duration?: string;
  video?: string;
  chapters?: number;
}

interface UserInputContextType {
  userCourseInput: UserCourseInput;
  setUserCourseInput: Dispatch<SetStateAction<UserCourseInput>>;
}

export const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined
);
