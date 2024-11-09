import { HiOutlineClock } from "react-icons/hi2";
import { courseOutput } from "../page";
import EditChapterDetails from "./EditChapterDetails";
import { courseList } from "@prisma/client";

const ChapterDetails = ({
  output,
  course,
}: {
  output?: courseOutput;
  course: courseList | null;
}) => {
  const chapters = output?.Chapters;

  return (
    <div className="lg:mx-48 mt-5">
      <h2 className="text-2xl font-semibold">Chapters</h2>
      {chapters?.map((chapter, index) => (
        <div key={index} className="border rounded-lg p-5 my-3">
          <div className="flex items-center gap-3">
            <p className="text-xs border border-primary w-8 h-8 rounded-full p-2 text-center flex-none">
              {index + 1}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold flex items-center gap-2">
                {chapter["Chapter Name"]}{" "}
                <EditChapterDetails
                  course={course}
                  output={output}
                  index={index}
                />
              </p>
              <p className="text-sm text-gray-500">
                {chapter["Chapter Description"]}
              </p>
              <p className="text-sm text-primary flex items-center gap-2">
                {" "}
                <HiOutlineClock />
                {chapter["Duration"]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterDetails;
