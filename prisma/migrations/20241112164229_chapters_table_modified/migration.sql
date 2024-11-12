-- DropIndex
DROP INDEX "chapters_chapterId_key";

-- AlterTable
ALTER TABLE "chapters" ADD COLUMN     "id" SERIAL NOT NULL;
