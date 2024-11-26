"use client";

import { useUser } from "@clerk/nextjs";
import { courseList } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import DifficultyBadge from "@/app/_components/DifficultyBadge";
import { IoBook } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { SlOptionsVertical } from "react-icons/sl";
import DeleteCourseButton from "./DeleteCourseButton";

const UserCourseList = () => {
  const { user, isLoaded } = useUser();
  const [courses, setCourses] = useState<courseList[]>([]);

  useEffect(() => {
    if (isLoaded && user) {
      getUserCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user]);

  const getUserCourses = async () => {
    try {
      const result = await axios.get("/api/course");
      setCourses(result.data); // Ensure the API returns an array of courses
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
      console.log("Error deleting course");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => {
        const output =
          typeof course.courseOutput === "string"
            ? JSON.parse(course.courseOutput)
            : course.courseOutput;

        return (
          <Card key={course.courseId}>
            <CardHeader>
              <Image
                src={course.imageUrl}
                alt="course banner"
                width={100}
                height={100}
                className="w-full h-auto rounded-sm"
              />
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex items-center justify-between">
                  <CardTitle>{output["Course Name"]}</CardTitle>
                  <DeleteCourseButton
                    handleOnDelete={() => {
                      handleOnDelete(course.courseId);
                    }}
                  >
                    <SlOptionsVertical className="hover:cursor-pointer" />
                  </DeleteCourseButton>
                </div>
                <Badge className="text-sm text-gray-400 mt-2" variant="outline">
                  {course.category}
                </Badge>
                <CardDescription className="mt-4">
                  {output["Course Description"].slice(0, 100) + "..."}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Badge variant="outline">
                <p className=" flex gap-1 items-center text-sm text-primary">
                  {" "}
                  <IoBook />
                  {course?.courseOutput &&
                  Array.isArray(
                    (course.courseOutput as { Chapters: [] }).Chapters
                  )
                    ? (course.courseOutput as { Chapters: [] }).Chapters.length
                    : 0}{" "}
                  chapters
                </p>
              </Badge>
              <DifficultyBadge difficulty={course.difficulty} />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default UserCourseList;
