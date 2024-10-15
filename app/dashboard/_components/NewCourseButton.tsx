import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NewCourseButton = () => {
  return (
    <Link href="/create-course">
      <Button>Create new course</Button>
    </Link>
  );
};

export default NewCourseButton;
