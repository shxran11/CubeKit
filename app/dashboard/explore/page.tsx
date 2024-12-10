import CourseCard from "../_components/CourseCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ExplorePage = async () => {
  const courses = await prisma.courseList.findMany();

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">Explore Courses</h2>
      <p className="text-sm text-gray-400">
        Explore more AI-generated courses by other users
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {courses.map((course) => {
          return (
            <div
              key={course.courseId}
              className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <CourseCard course={course} canDelete={true} showUser={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ExplorePage;
