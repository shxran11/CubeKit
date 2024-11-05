-- CreateEnum
CREATE TYPE "Category" AS ENUM ('health', 'business', 'technology', 'programming', 'science', 'creative');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('beginner', 'intermediate', 'advance');

-- CreateTable
CREATE TABLE "courseList" (
    "courseId" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "courseOutput" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255) NOT NULL,
    "userProfileImage" VARCHAR(255) NOT NULL,

    CONSTRAINT "courseList_pkey" PRIMARY KEY ("courseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "courseList_courseId_key" ON "courseList"("courseId");
