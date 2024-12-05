"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { courseList } from "@prisma/client";

const ExplorePage = () => {
  const [courses, setCourses] = useState<courseList[] | undefined>(undefined);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const getCourses = async () => {
    try {
      const result = await axios.get("/api/course/all");
      setCourses(result.data);
      setShowSkeleton(false);
    } catch (error) {
      console.log(error);
      setShowSkeleton(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">Explore Courses</h2>
      <p className="text-sm text-gray-400">
        Explore more AI-generated courses by other users
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {showSkeleton &&
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-slate-400 w-full h-[300px] animate-pulse rounded-lg"
            ></div>
          ))}
        {courses &&
          courses.length > 0 &&
          courses.map((course) => {
            return (
              <div
                key={course.courseId}
                className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <CourseCard course={course} canDelete={true} showUser={true} />
              </div>
            );
          })}
        {!showSkeleton && courses?.length === 0 && (
          <p className="text-center text-gray-500">
            No courses available to explore.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
