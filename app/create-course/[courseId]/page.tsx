"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import BasicInfo from "./_components/BasicInfo";
import CourseDetails from "./_components/CourseDetails";
import ChapterDetails from "./_components/ChapterDetails";
import { Difficulty } from "@prisma/client";
import GenerateContentButton from "./_components/GenerateContentButton";

export interface courseOutput {
  Chapters: Array<{
    "Chapter Name": string;
    "Chapter Description": string;
    Duration: string;
  }>;
  "Course Description": string;
  "Course Duration": string;
  "Course Name": string;
  Difficulty: Difficulty;
}

interface Props {
  params: { courseId: string };
}

const CourseLayoutPage = ({ params }: Props) => {
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
      <BasicInfo course={course} output={output} edit={true} />
      <CourseDetails course={course} />
      <ChapterDetails course={course} output={output} edit={true} />
      <GenerateContentButton course={course} output={output} />
    </div>
  );
};

export default CourseLayoutPage;
