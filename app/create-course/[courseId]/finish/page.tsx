"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasicInfo from "../_components/BasicInfo";
import { courseOutput } from "../page";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 lg:mx-48">
        <div
          className="cursor-pointer bg-primary hover:bg-violet-500 text-white font-medium py-2 px-4 rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
          onClick={() => handleCopyToClipboard(`/course/${params.courseId}`)}
        >
          <span className="text-sm sm:text-base">Click to Copy Link</span>
        </div>
        <Link href={"/dashboard"}>
          <div className="cursor-pointer bg-primary hover:bg-violet-500 text-white font-medium py-2 px-4 rounded-lg shadow-md flex items-center justify-center transition-all duration-300">
            Go to Dashboard
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FinalCoursePage;
