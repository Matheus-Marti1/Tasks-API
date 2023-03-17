/*
  Warnings:

  - You are about to alter the column `altura` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `peso` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `pokemon` MODIFY `altura` DOUBLE NOT NULL,
    MODIFY `peso` DOUBLE NOT NULL;
