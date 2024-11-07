import { Button } from "@/components/ui/button";
import { courseList } from "@prisma/client";
import Image from "next/image";
import { FaPuzzlePiece } from "react-icons/fa6";

const BasicInfo = ({ course }: { course: courseList | null }) => {
  return (
    <div className="md:mx-36">
      <div className="border rounded-lg mt-7 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-3">{course?.name}</h2>
            <p className="text-md text-gray-500">
              {course?.courseOutput &&
                (course.courseOutput as { "Course Description": string })[
                  "Course Description"
                ]}
            </p>
            <p className="flex flex-row items-center text-md gap-2 mt-3 text-primary font-semibold">
              <FaPuzzlePiece /> {course?.category}
            </p>
            <Button className="w-full mt-5">Start</Button>
          </div>
          <div className="p-10 flex flex-row items-center justify-center">
            <Image
              src="/image_placeholder.png"
              alt="placeholder"
              width={200}
              height={200}
              className="w-full rounded-xl md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
