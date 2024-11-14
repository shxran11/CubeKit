/*
  Warnings:

  - The primary key for the `chapters` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_pkey",
ADD CONSTRAINT "chapters_pkey" PRIMARY KEY ("id");
