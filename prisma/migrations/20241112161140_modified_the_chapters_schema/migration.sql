/*
  Warnings:

  - The primary key for the `chapters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `chapterId` on the `chapters` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chapters" DROP CONSTRAINT "chapters_pkey",
DROP COLUMN "chapterId",
ADD COLUMN     "chapterId" INTEGER NOT NULL,
ADD CONSTRAINT "chapters_pkey" PRIMARY KEY ("chapterId");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_chapterId_key" ON "chapters"("chapterId");
