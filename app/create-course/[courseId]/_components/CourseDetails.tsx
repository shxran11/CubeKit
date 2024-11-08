import { courseList } from "@prisma/client";
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlinePlayCircle,
} from "react-icons/hi2";

const CourseDetails = ({ course }: { course: courseList | null }) => {
  const numberOfChapters =
    course?.courseOutput &&
    Array.isArray((course.courseOutput as { Chapters: [] }).Chapters)
      ? (course.courseOutput as { Chapters: [] }).Chapters.length
      : 0;
  return (
    <div className="lg:mx-48 border rounded-lg shadow-sm dark:shadow-gray-900 mt-5 p-3 lg:pl-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2">
          <HiOutlineChartBar className="text-xl md:text-3xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Level</h2>
            <h2 className="text-sm font-bold">{course?.difficulty}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineClock className="text-xl md:text-3xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="text-sm font-bold">
              {course?.courseOutput &&
                (course.courseOutput as { "Course Duration": string })[
                  "Course Duration"
                ]}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineBookOpen className="text-xl md:text-3xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">No. of Chapters</h2>
            <h2 className="text-sm font-bold">{numberOfChapters}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlinePlayCircle className="text-xl md:text-3xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Includes Video</h2>
            <h2 className="text-sm font-bold">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
