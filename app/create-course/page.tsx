"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  HiServerStack,
  HiClipboardDocumentList,
  HiMiniSquaresPlus,
} from "react-icons/hi2";

const CreateCoursePage = () => {
  const Steppers = [
    {
      id: 1,
      name: "Category",
      icon: <HiServerStack />,
    },
    {
      id: 2,
      name: "Topic and Desc",
      icon: <HiClipboardDocumentList />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiMiniSquaresPlus />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-10">
      <div className="text-3xl md:text-4xl font-bold text-primary flex justify-center items-center">
        Create New Course
      </div>
      <div className="flex justify-center items-center mt-10 text-4xl">
        {Steppers.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-row justify-center items-center"
          >
            <div className="flex flex-col items-center gap-3">
              <div
                className={`bg-violet-300 text-white rounded-full p-2 m-2 ${
                  activeIndex >= index && "bg-purple-500"
                }`}
              >
                {item.icon}
              </div>
              <div className="hidden md:block md:text-sm md:font-semibold md:text-gray-500">
                {item.name}
              </div>
            </div>
            {index != Steppers.length - 1 && (
              <div
                className={`h-1 w-[50px] md:w-[100px] lg:w-[200px] bg-gray-300 dark:bg-gray-700 rounded-full ${
                  activeIndex - 1 >= index && "bg-purple-500"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
    </div>
  );
};

export default CreateCoursePage;
