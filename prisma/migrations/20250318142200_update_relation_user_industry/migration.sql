/*
  Warnings:

  - You are about to drop the column `industryId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_industryId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "industryId",
ADD COLUMN     "industry" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industry_fkey" FOREIGN KEY ("industry") REFERENCES "IndustryInsights"("industry") ON DELETE SET NULL ON UPDATE CASCADE;
