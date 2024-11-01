"use client";

import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { UserInputContext } from "../_context/UserInputContext";
import SelectCategory from "./_components/SelectCategory";
import SelectOptions from "./_components/SelectOptions";
import SelectTopic from "./_components/SelectTopic";
import { Steppers } from "../_shared/Steppers";

const CreateCoursePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error(
      "SelectCategory must be used within a UserInputContext provider"
    );
  }

  const { userCourseInput } = context;

  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkStatus = () => {
    if (
      activeIndex == 0 &&
      (userCourseInput?.category?.length == 0 ||
        userCourseInput?.category == undefined)
    )
      return true;
    if (
      activeIndex == 1 &&
      (userCourseInput?.topic?.length == 0 ||
        userCourseInput?.topic == undefined)
    )
      return true;
    if (
      activeIndex == 2 &&
      (userCourseInput?.difficulty == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.video == undefined ||
        userCourseInput?.chapters == undefined)
    )
      return true;

    return false;
  };

  return (
    <div className="mt-20 p-2 md:p-5">
      <div className="text-3xl md:text-4xl font-semibold text-primary flex justify-center items-center">
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
                className={`rounded-full p-2 m-2 ${
                  activeIndex >= index
                    ? "bg-purple-500 dark:bg-purple-500 text-white"
                    : "bg-violet-300 text-white"
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
                  activeIndex - 1 >= index && "bg-purple-500 dark:bg-purple-500"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="md:mx-44">
        {activeIndex == 0 ? (
          <div>
            <SelectCategory />
          </div>
        ) : activeIndex == 1 ? (
          <div className="md:mx-52 my-10">
            <SelectTopic />
          </div>
        ) : (
          <div className="md:mx-44 my-10">
            <SelectOptions />
          </div>
        )}
        <div className="flex justify-between items-center">
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 ? (
            <Button
              onClick={() => setActiveIndex(activeIndex + 1)}
              disabled={checkStatus()}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => setActiveIndex(activeIndex + 1)}
              disabled={checkStatus()}
            >
              Generate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
