-- CreateTable
CREATE TABLE "chapters" (
    "chapterId" VARCHAR(255) NOT NULL,
    "courseId" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" JSONB NOT NULL,
    "videoId" VARCHAR(255) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("chapterId")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapters_chapterId_key" ON "chapters"("chapterId");

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courseList"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
