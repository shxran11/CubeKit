"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import NewCourseButton from "./_components/NewCourseButton";
import UserCourseList from "./_components/UserCourseList";

const DashboardPage = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
        <div>
          <p className="text-3xl font-bold">Hello, {user.firstName}</p>
          <p className="text-sm text-gray-500">
            Create smart AI generated courses, instantly.
          </p>
        </div>
        <NewCourseButton />
      </div>
      <div className="mt-10">
        <UserCourseList />
      </div>
    </>
  );
};

export default DashboardPage;
