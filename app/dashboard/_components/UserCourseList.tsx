"use client";

import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { useUser } from "@clerk/nextjs";
import { courseList } from "@prisma/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const UserCourseList = () => {
  const { user, isLoaded } = useUser();
  const [courses, setCourses] = useState<courseList[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { setUserCourseList } = useContext(UserCourseListContext);

  useEffect(() => {
    if (isLoaded && user) {
      getUserCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (courses.length === 0) setShowSkeleton(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [courses]);

  const getUserCourses = async () => {
    try {
      const result = await axios.get("/api/course");
      const courses = result.data;
      setCourses(courses);
      setUserCourseList(courses);
      if (courses.length > 0) setShowSkeleton(false);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const handleOnDelete = async (courseId: string) => {
    try {
      await axios.delete(`/api/course/${courseId}`);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.courseId !== courseId)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {showSkeleton &&
        Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-slate-400 w-full h-[300px] animate-pulse rounded-lg"
          ></div>
        ))}
      {courses.length > 0 &&
        courses.map((course) => {
          return (
            <div
              key={course.courseId}
              className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <CourseCard
                course={course}
                handleOnDelete={handleOnDelete}
                canDelete={true}
                showUser={false}
              />
            </div>
          );
        })}
    </div>
  );
};

export default UserCourseList;
