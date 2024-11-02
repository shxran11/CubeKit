-- CreateEnum
CREATE TYPE "Category" AS ENUM ('HEALTH', 'BUSINESS', 'TECHNOLOGY', 'PROGRAMMING', 'SCIENCE', 'CREATIVE');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCE');

-- CreateTable
CREATE TABLE "CourseList" (
    "courseId" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "courseOutput" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(255) NOT NULL,
    "userProfileImage" VARCHAR(255) NOT NULL,

    CONSTRAINT "CourseList_pkey" PRIMARY KEY ("courseId")
);
