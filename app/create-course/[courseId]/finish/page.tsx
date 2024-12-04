"use client";

import React, { useEffect, useState } from "react";
import BasicInfo from "../_components/BasicInfo";
import { courseOutput } from "../page";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

interface Props {
  params: { courseId: string };
}

const FinalCoursePage = ({ params }: Props) => {
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

  const handleCopyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="mt-14 p-10">
      <h2 className="text-center text-2xl text-primary font-semibold">
        Congratulations! Your course is ready!
      </h2>
      <BasicInfo course={course} output={output} edit={false} />
      <div onClick={() => handleCopyToClipboard(`/course/${params.courseId}`)}>
        <span>Click to Copy Link and Share Course</span>
      </div>
    </div>
  );
};

export default FinalCoursePage;
