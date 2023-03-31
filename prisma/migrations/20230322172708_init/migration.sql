/*
  Warnings:

  - You are about to alter the column `altura` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `peso` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `pokemon` MODIFY `altura` VARCHAR(191) NOT NULL,
    MODIFY `peso` VARCHAR(191) NOT NULL;
