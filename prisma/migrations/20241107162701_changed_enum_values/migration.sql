/*
  Warnings:

  - The values [health,business,technology,programming,science,creative] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The values [beginner,intermediate,advance] on the enum `Difficulty` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('Health', 'Business', 'Technology', 'Programming', 'Science', 'Creative');
ALTER TABLE "courseList" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Difficulty_new" AS ENUM ('Beginner', 'Intermediate', 'Advance');
ALTER TABLE "courseList" ALTER COLUMN "difficulty" TYPE "Difficulty_new" USING ("difficulty"::text::"Difficulty_new");
ALTER TYPE "Difficulty" RENAME TO "Difficulty_old";
ALTER TYPE "Difficulty_new" RENAME TO "Difficulty";
DROP TYPE "Difficulty_old";
COMMIT;
