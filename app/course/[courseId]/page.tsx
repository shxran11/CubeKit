"use client";
import BasicInfo from "@/app/create-course/[courseId]/_components/BasicInfo";
import ChapterDetails from "@/app/create-course/[courseId]/_components/ChapterDetails";
import CourseDetails from "@/app/create-course/[courseId]/_components/CourseDetails";
import { courseOutput } from "@/app/create-course/[courseId]/page";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewCoursePage = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState(null);
  const [output, setOutput] = useState<courseOutput | undefined>(undefined);
  const { user } = useUser();

  const getCourse = async () => {
    try {
      if (user) {
        const result = await axios.get(`/api/course/${params.courseId}`);
        if (result) {
          setCourse(result.data);
          setOutput(result.data.courseOutput);
        }
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
    <div>
      <div className="p-5">
        <BasicInfo course={course} output={output} edit={false} />
        <CourseDetails course={course} />
        <ChapterDetails course={course} output={output} edit={false} />
      </div>
    </div>
  );
};

export default ViewCoursePage;
