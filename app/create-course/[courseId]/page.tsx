"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import BasicInfo from "./_components/BasicInfo";
import CourseDetails from "./_components/CourseDetails";
import ChapterDetails from "./_components/ChapterDetails";

const CourseLayoutPage = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState(null);
  const { user } = useUser();

  const getCourse = async () => {
    try {
      if (user) {
        const result = await axios.get(`/api/course/${params.courseId}`);
        if (result) setCourse(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  useEffect(() => {
    if (params.courseId) getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.courseId, user]);

  return (
    <div className="mt-14 p-10">
      <div>
        <h1 className="flex flex-col items-center text-3xl font-bold text-primary">
          Course Layout
        </h1>
      </div>
      <BasicInfo course={course} />
      <CourseDetails course={course} />
      <ChapterDetails course={course} />
    </div>
  );
};

export default CourseLayoutPage;
