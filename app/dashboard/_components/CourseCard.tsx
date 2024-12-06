import DifficultyBadge from "@/app/_components/DifficultyBadge";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { IoBook } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import DeleteCourseButton from "./DeleteCourseButton";
import Image from "next/image";
import { courseList } from "@prisma/client";

interface Props {
  course: courseList;
  handleOnDelete?: (id: string) => void;
  canDelete: boolean;
  showUser: boolean;
}

const CourseCard = ({ course, handleOnDelete, canDelete, showUser }: Props) => {
  const output =
    typeof course.courseOutput === "string"
      ? JSON.parse(course.courseOutput)
      : course.courseOutput;

  return (
    <Card>
      <CardHeader>
        <Link href={`/course/${course.courseId}`}>
          <Image
            src={course.imageUrl}
            alt="course banner"
            width={1000}
            height={800}
            className="w-full h-[200px] rounded-sm object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center justify-between">
            <CardTitle>{output?.["Course Name"]}</CardTitle>
            {canDelete && (
              <DeleteCourseButton
                handleOnDelete={() => handleOnDelete!(course.courseId)}
              >
                <SlOptionsVertical className="hover:cursor-pointer" />
              </DeleteCourseButton>
            )}
          </div>
          <Badge className="text-sm text-gray-400 mt-2" variant="outline">
            {course.category}
          </Badge>
          <Link href={`/course/${course.courseId}`}>
            <CardDescription className="mt-4">
              {output?.["Course Description"]?.slice(0, 100) + "..."}
            </CardDescription>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <Badge variant="outline">
            <p className="flex gap-1 items-center text-sm text-primary">
              <IoBook />
              {output?.Chapters?.length || 0} chapters
            </p>
          </Badge>
          <DifficultyBadge difficulty={course.difficulty} />
        </div>
        {showUser && (
          <div className="flex items-center gap-2 self-start w-full">
            <Image
              src={course.userProfileImage}
              alt="user image"
              width={25}
              height={25}
              className="rounded-full"
            />
            <p className="text-sm text-gray-500">{course.username}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
