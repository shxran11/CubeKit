-- AlterTable
ALTER TABLE "courseList" ADD COLUMN     "imageUrl" VARCHAR(255) NOT NULL DEFAULT '/image_placeholder.png',
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
