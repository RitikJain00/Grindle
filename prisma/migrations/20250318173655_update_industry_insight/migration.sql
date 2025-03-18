/*
  Warnings:

  - The `demandLevel` column on the `IndustryInsights` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `marketOutlook` column on the `IndustryInsights` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "demandLevel",
ADD COLUMN     "demandLevel" TEXT,
DROP COLUMN "marketOutlook",
ADD COLUMN     "marketOutlook" TEXT;

-- DropEnum
DROP TYPE "DemandLevel";

-- DropEnum
DROP TYPE "MarketOutlook";
