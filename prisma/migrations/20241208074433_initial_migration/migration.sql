-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Health', 'Business', 'Technology', 'Programming', 'Science', 'Creative');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Beginner', 'Intermediate', 'Advance');

-- CreateTable
CREATE TABLE "courseList" (
    "courseId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "includeVideo" VARCHAR(25) NOT NULL DEFAULT 'Yes',
    "courseOutput" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL DEFAULT 'Sharanya',
    "userProfileImage" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL DEFAULT '/image_placeholder.png',
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "courseList_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "videoId" VARCHAR(255) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courseList_courseId_key" ON "courseList"("courseId");

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courseList"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;
