import { Button } from "@/components/ui/button";
import { courseList } from "@prisma/client";
import Image from "next/image";
import { FaPuzzlePiece } from "react-icons/fa6";
import EditBasicInfo from "./EditBasicInfo";
import { courseOutput } from "../page";
import { useState } from "react";

interface Props {
  course: courseList | null;
  output?: courseOutput;
}

const BasicInfo = ({ course, output }: Props) => {
  const [name, setName] = useState(course?.name);
  const [desc, setDesc] = useState(output?.["Course Description"]);

  const handleUpdate = (updatedName: string, updatedDesc: string) => {
    setName(updatedName);
    setDesc(updatedDesc);
  };

  return (
    <div className="border rounded-lg mt-7 shadow-sm dark:shadow-gray-900 lg:mx-48">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 md:p-10">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
            {name}{" "}
            <EditBasicInfo
              course={course}
              output={output}
              onUpdate={handleUpdate}
            />
          </h2>
          <p className="text-md text-gray-500">{desc}</p>
          <p className="flex flex-row items-center text-md gap-2 mt-3 text-primary font-semibold">
            <FaPuzzlePiece /> {course?.category}
          </p>
          <Button className="w-full mt-5">Start</Button>
        </div>
        <div className="p-5 md:p-10 pt-0 md:pt-10 flex flex-row items-center justify-center">
          <Image
            src="/image_placeholder.png"
            alt="placeholder"
            width={200}
            height={200}
            className="w-full rounded-xl md:h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
