"use client";

import { useParams } from "next/navigation";
import { courseOutput } from "@/app/create-course/[courseId]/page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import { chapters } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiMiniListBullet, HiOutlineClock } from "react-icons/hi2";

interface Chapter {
  "Chapter Name": string;
  "Chapter Description": string;
  Duration: string;
}

const StartPage = () => {
  const params = useParams();
  const courseId = params?.courseId as string;
  const [output, setOutput] = useState<courseOutput | undefined>(undefined);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | undefined>(
    undefined
  );
  const [chapter, setChapter] = useState<chapters | undefined>(undefined);
  const { user } = useUser();

  const getCourse = async () => {
    try {
      if (user) {
        const result = await axios.get(`/api/course/${courseId}`);
        if (result) {
          setOutput(result.data.courseOutput);
          if (result.data.courseOutput.Chapters.length > 0) {
            setSelectedChapter(result.data.courseOutput.Chapters[0]);
          }
        }
        console.log(result.data);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  useEffect(() => {
    if (courseId) getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, user]);

  const fetchChapter = async (chapterId: number) => {
    try {
      const result = await axios.get(
        `/api/course/${courseId}/chapter/${chapterId}`
      );
      setChapter(result.data.chapter);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching chapter:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-purple-500">
          {selectedChapter?.["Chapter Name"]}
        </h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="border-primary">
              <HiMiniListBullet />
              <span className="hidden md:inline">Chapters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="max-h-screen overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{output?.["Course Name"]}</SheetTitle>
              <SheetDescription>
                {output?.["Course Description"]}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-5">
              {output?.Chapters.map((chapter, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-purple-100 dark:hover:bg-gray-900 ${
                    selectedChapter?.["Chapter Name"] ===
                      chapter["Chapter Name"] &&
                    "bg-purple-100 dark:bg-gray-900"
                  }`}
                >
                  <div
                    className="flex items-center gap-2 border-b py-4"
                    onClick={() => {
                      setSelectedChapter(chapter);
                      fetchChapter(index);
                    }}
                  >
                    <p className="text-xs border border-primary rounded-full p-1 px-2">
                      {index + 1}
                    </p>
                    <div>
                      <p className="font-semibold text-purple-500">
                        {chapter["Chapter Name"]}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-gray-500">
                        <HiOutlineClock /> {chapter.Duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <p className="text-sm text-gray-400 mt-1">
        {selectedChapter?.["Chapter Description"]}
      </p>
    </div>
  );
};

export default StartPage;
