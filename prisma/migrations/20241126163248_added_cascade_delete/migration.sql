-- DropForeignKey
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_courseId_fkey";

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courseList"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;
